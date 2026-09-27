-- ============================================================
-- Libro de Heroes · esquema Supabase (prefixo dnd_)
-- Pegar enteiro en Supabase → SQL Editor → Run
-- ============================================================

-- Mesas de xogo: un código curto que comparte o grupo
create table if not exists dnd_mesas (
  codigo      text primary key,
  nome        text not null default '',
  master_id   uuid not null references auth.users(id) on delete cascade,
  estado      jsonb not null default '{}'::jsonb,   -- iniciativa (ENC) en directo
  grupo       jsonb not null default '{}'::jsonb,   -- cofre común, misións, notas
  updated_at  timestamptz not null default now()
);

-- Quen está en cada mesa
create table if not exists dnd_membros (
  mesa        text not null references dnd_mesas(codigo) on delete cascade,
  user_id     uuid not null references auth.users(id) on delete cascade,
  alcume      text not null default '',
  joined_at   timestamptz not null default now(),
  primary key (mesa, user_id)
);

-- Personaxes: o JSON completo da folla, coma o ficheiro de copia
create table if not exists dnd_personaxes (
  id          text primary key,                      -- o id que xa usa a app
  user_id     uuid not null references auth.users(id) on delete cascade,
  mesa        text references dnd_mesas(codigo) on delete set null,
  nome        text not null default '',
  clase       text not null default '',
  nivel       int  not null default 1,
  data        jsonb not null,
  updated_at  timestamptz not null default now()
);
create index if not exists dnd_personaxes_user on dnd_personaxes(user_id);
create index if not exists dnd_personaxes_mesa on dnd_personaxes(mesa);

-- Paquetes de pezas (as imaxes van no bucket dnd-pezas)
create table if not exists dnd_paquetes (
  id          text primary key,
  user_id     uuid not null references auth.users(id) on delete cascade,
  nome        text not null default '',
  autores     text not null default '',
  tint        boolean not null default true,
  labels      jsonb not null default '{}'::jsonb,
  publico     boolean not null default true,        -- visible para todo o que teña o id
  updated_at  timestamptz not null default now()
);
create table if not exists dnd_pezas (
  paquete_id  text not null references dnd_paquetes(id) on delete cascade,
  chave       text not null,                         -- lenzo:slot:idx, p. ex. head:ollos:03
  ruta        text not null,                         -- ruta no bucket
  primary key (paquete_id, chave)
);

-- ---------- Seguridade (RLS) ----------
alter table dnd_mesas      enable row level security;
alter table dnd_membros    enable row level security;
alter table dnd_personaxes enable row level security;
alter table dnd_paquetes   enable row level security;
alter table dnd_pezas      enable row level security;

-- Función auxiliar: son membro (ou máster) desta mesa?
create or replace function dnd_e_membro(p_mesa text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from dnd_membros m where m.mesa = p_mesa and m.user_id = auth.uid())
      or exists (select 1 from dnd_mesas s where s.codigo = p_mesa and s.master_id = auth.uid());
$$;

-- Mesas: calquera autenticado pode ler unha mesa se coñece o código; só o máster a cambia
drop policy if exists dnd_mesas_sel on dnd_mesas;
create policy dnd_mesas_sel on dnd_mesas for select to authenticated using (true);
drop policy if exists dnd_mesas_ins on dnd_mesas;
create policy dnd_mesas_ins on dnd_mesas for insert to authenticated with check (master_id = auth.uid());
drop policy if exists dnd_mesas_upd on dnd_mesas;
create policy dnd_mesas_upd on dnd_mesas for update to authenticated using (master_id = auth.uid());
drop policy if exists dnd_mesas_del on dnd_mesas;
create policy dnd_mesas_del on dnd_mesas for delete to authenticated using (master_id = auth.uid());

-- Membros: únome eu mesmo; vexo os da miña mesa
drop policy if exists dnd_membros_sel on dnd_membros;
create policy dnd_membros_sel on dnd_membros for select to authenticated using (dnd_e_membro(mesa));
drop policy if exists dnd_membros_ins on dnd_membros;
create policy dnd_membros_ins on dnd_membros for insert to authenticated with check (user_id = auth.uid());
drop policy if exists dnd_membros_del on dnd_membros;
create policy dnd_membros_del on dnd_membros for delete to authenticated using (user_id = auth.uid());

-- Personaxes: o dono fai todo; os membros da mesa poden ler
drop policy if exists dnd_pers_sel on dnd_personaxes;
create policy dnd_pers_sel on dnd_personaxes for select to authenticated
  using (user_id = auth.uid() or (mesa is not null and dnd_e_membro(mesa)));
drop policy if exists dnd_pers_ins on dnd_personaxes;
create policy dnd_pers_ins on dnd_personaxes for insert to authenticated with check (user_id = auth.uid());
drop policy if exists dnd_pers_upd on dnd_personaxes;
create policy dnd_pers_upd on dnd_personaxes for update to authenticated using (user_id = auth.uid());
drop policy if exists dnd_pers_del on dnd_personaxes;
create policy dnd_pers_del on dnd_personaxes for delete to authenticated using (user_id = auth.uid());

-- Paquetes e pezas: o dono escribe; lectura pública (quen teña o id)
drop policy if exists dnd_paq_sel on dnd_paquetes;
create policy dnd_paq_sel on dnd_paquetes for select to authenticated using (publico or user_id = auth.uid());
drop policy if exists dnd_paq_all on dnd_paquetes;
create policy dnd_paq_all on dnd_paquetes for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists dnd_pez_sel on dnd_pezas;
create policy dnd_pez_sel on dnd_pezas for select to authenticated
  using (exists (select 1 from dnd_paquetes p where p.id = paquete_id and (p.publico or p.user_id = auth.uid())));
drop policy if exists dnd_pez_all on dnd_pezas;
create policy dnd_pez_all on dnd_pezas for all to authenticated
  using (exists (select 1 from dnd_paquetes p where p.id = paquete_id and p.user_id = auth.uid()))
  with check (exists (select 1 from dnd_paquetes p where p.id = paquete_id and p.user_id = auth.uid()));

-- ---------- Bucket de imaxes ----------
insert into storage.buckets (id, name, public) values ('dnd-pezas', 'dnd-pezas', true)
  on conflict (id) do nothing;
drop policy if exists dnd_bucket_read on storage.objects;
create policy dnd_bucket_read on storage.objects for select using (bucket_id = 'dnd-pezas');
drop policy if exists dnd_bucket_write on storage.objects;
create policy dnd_bucket_write on storage.objects for insert to authenticated
  with check (bucket_id = 'dnd-pezas' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists dnd_bucket_upd on storage.objects;
create policy dnd_bucket_upd on storage.objects for update to authenticated
  using (bucket_id = 'dnd-pezas' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists dnd_bucket_del on storage.objects;
create policy dnd_bucket_del on storage.objects for delete to authenticated
  using (bucket_id = 'dnd-pezas' and (storage.foldername(name))[1] = auth.uid()::text);

-- ---------- Tempo real ----------
-- Database → Replication → engadir dnd_mesas á publicación supabase_realtime (ou executa):
alter publication supabase_realtime add table dnd_mesas;
