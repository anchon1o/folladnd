# Libro de Heroes na nube con Supabase (prefixo `dnd_`)

Que aporta: os personaxes sincronízanse entre aparellos, os paquetes de pezas compártense por id sen pasar ficheiros, e a iniciativa do máster vese en directo na lapela «Á mesa» de cada xogador. Todo baixo o prefixo `dnd_` para convivir cos outros proxectos da mesma base.

## 1. Preparar Supabase (unha vez, 10 minutos)
1. Entra no teu proxecto de Supabase → **SQL Editor** → *New query* → pega enteiro `supabase-dnd.sql` → **Run**. Crea as táboas `dnd_mesas`, `dnd_membros`, `dnd_personaxes`, `dnd_paquetes`, `dnd_pezas`, as políticas de seguridade (RLS) e o bucket `dnd-pezas`. Se a última liña (`alter publication…`) dá erro porque a táboa xa está na publicación, ignórao.
2. **Authentication → Providers → Email**: activado, con *Confirm email* como prefiras. A app entra por **ligazón máxica** (OTP por correo), sen contrasinal.
3. **Authentication → URL Configuration**: en *Site URL* e en *Redirect URLs* engade a dirección onde vive a app, por exemplo `https://O-TEU-USUARIO.github.io/libro-de-heroes/`. Sen isto, a ligazón do correo non volve á app.
4. **Database → Replication**: comproba que `dnd_mesas` está na publicación `supabase_realtime` (o SQL intenta engadila).
5. **Project Settings → API**: copia a **Project URL** e a clave **anon public**. Esa clave é pública por deseño; o que protexe os datos son as políticas RLS do SQL.

## 2. Conectar a app
1. Abre a app (mellor a versión web, en GitHub Pages) → Menú → **Axustes e temas** → abaixo, **Nube (Supabase)**.
2. Pega a URL e a clave anon → **Gardar conexión**.
3. Escribe o teu correo → **Enviar ligazón** → abre a ligazón do correo **no mesmo aparello**. A app queda con sesión (o estado aparece ao lado do botón).
4. Dende ese momento, cada cambio nun personaxe súbese só (uns segundos despois de deixar de escribir), e ao abrir a app noutro aparello coa mesma sesión, tráense os personaxes que non teñas.

## 3. A mesa
- **O máster**: Axustes → Nube → **Crear mesa** → obtén un código de seis letras. Dállo ao grupo.
- **Os xogadores**: Axustes → Nube → escriben o código → **Unirme**. Os seus personaxes quedan asociados á mesa.
- **Na mesa do máster** (♛): botón **Grupo da nube** trae os personaxes de todos os membros coa súa iniciativa. Cada cambio na iniciativa (roldas, PV, quendas) vese ao instante nos aparellos dos xogadores, na lapela «Á mesa», bloque «Iniciativa da mesa».

## 4. Paquetes de pezas
- **Publicar**: Menú → Pezas debuxadas → Paquetes → **☁︎ Publicar** ao lado do paquete. Sobe as pezas ao bucket e dáche un **id** para compartir.
- **Traer**: Paquetes → **Traer da nube por id** → pega o id. Descarga as pezas e crea o paquete no aparello.

## 5. Cousas que convén saber
- **Sen conexión** a app segue funcionando igual; o que cambies súbese cando volva haber rede e gardes algo.
- **Conflitos**: gaña o último que garda. Se dous aparellos editan o mesmo personaxe á vez, o último pisa ao outro. Para xogar, cada quen co seu.
- **Tamaño**: cada personaxe con retrato e corpo compostos pesa entre 0,5 e 2 MB en JSON; o plan gratuíto de Supabase (500 MB de base, 1 GB de ficheiros) dá para centos de personaxes e varios paquetes.
- **Privacidade**: só quen inicia sesión e está na mesa ve os personaxes dos demais. Os paquetes publicados vense con calquera sesión que teña o id.
- **Isto está probado na app pero non contra un proxecto real de Supabase** (dende aquí non hai acceso). Se algo falla, cópiame o texto exacto do erro (aparece nun aviso na app ou na consola do navegador) e arránxoo.

## 6. Se algo non vai
| Síntoma | Causa probable |
|---|---|
| «Non se puido cargar a biblioteca de Supabase» | Sen conexión a primeira vez; carga de jsDelivr. |
| A ligazón do correo abre a app pero segue «Sen sesión» | Falta a dirección en *Redirect URLs* (paso 1.3), ou abriches a ligazón noutro aparello. |
| «new row violates row-level security policy» | Non hai sesión, ou o SQL non se executou enteiro. |
| Os xogadores non ven a iniciativa | `dnd_mesas` non está en Replication, ou non se uniron á mesa co código. |
| Erro ao publicar pezas | O bucket `dnd-pezas` non existe ou as políticas de storage non se crearon (volve executar a parte final do SQL). |
