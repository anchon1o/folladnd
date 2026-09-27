# Libro de Heroes

Creador de follas de personaxe de rol (D&D 5e, Pathfinder 2e, A chamada de Cthulhu, Aquelarre) nun só ficheiro HTML, en galego, pensado para xogar con iPad e móbil. Con dados, mesa do máster, mapas, biblioteca de manuais e un creador de personaxes por capas que admite pezas debuxadas a man ou xeradas.

**Abrir a app:** `index.html` (ou a dirección de Vercel deste proxecto). **Publicar en Vercel:** `INSTALAR-EN-VERCEL.md`. **Nube opcional con Supabase:** `INSTALAR-SUPABASE.md` e `supabase-dnd.sql`.

| Carpeta | Contido |
|---|---|
| `index.html` | A app completa. Non necesita nada máis. |
| `docs/` | Guía do proxecto, guía para debuxantes, como pedir follas a ChatGPT, infografía. |
| `packs/` | Paquetes de pezas. `packs.json` lista os que a app trae soa a primeira vez que se abre na web. |
| `plantillas/` | Plantillas PSD e PNG para debuxar pezas en Procreate ou similares. |
| `ferramentas/` | Banco de probas do debuxo automático. |

- Os datos gárdanse no navegador de cada dispositivo. Para pasar personaxes: Menú → Exportar ficheiro de copia.
- Ao cambiar de sitio a app (do ficheiro á web), o navegador tráaa como nova: exporta antes e importa despois.
- Sen conexión funciona todo agás o visor de PDF e os códigos QR, que se cargan de Internet a primeira vez.
- Regras e compendio baseados no SRD 5.2 de Wizards of the Coast (CC BY 4.0).
