# Poñer o Libro de Heroes en Vercel (repositorio `folladnd`)

Resultado: unha dirección como `https://folladnd.vercel.app` que calquera do grupo abre no iPad ou no móbil e engade á pantalla de inicio. GitHub garda o código; Vercel publícao e volve publicalo só cada vez que cambies algo.

## 1. Subir o código a GitHub (unha vez)
1. [github.com](https://github.com) → **+** → **New repository** → nome `folladnd`, público ou privado (para Vercel dá igual), marca *Add a README* → **Create repository**.
2. **Add file → Upload files**: sube o contido de `folladnd.zip` (`index.html`, `vercel.json`, `.vercelignore`, `README.md`, `INSTALAR-EN-VERCEL.md`, `INSTALAR-SUPABASE.md`, `supabase-dnd.sql` e as carpetas `docs`, `packs`, `plantillas`, `ferramentas`). Dende ordenador arrastras as carpetas; dende o iPad, sube primeiro `index.html` e `vercel.json` e o resto cando poidas.
3. **Commit changes**.

## 2. Conectar Vercel (unha vez, 2 minutos)
1. [vercel.com](https://vercel.com) → **Add New… → Project** → **Import Git Repository** → escolle `folladnd` (se non aparece, *Adjust GitHub App Permissions* e dálle acceso ao repositorio).
2. Na pantalla de configuración:
   - *Framework Preset*: **Other**.
   - *Root Directory*: `./` (a raíz).
   - *Build Command*: baleiro. *Output Directory*: baleiro. *Install Command*: baleiro. (É un sitio estático: non hai nada que construír.)
3. **Deploy**. Nun minuto tes a dirección `https://folladnd-XXXX.vercel.app`. En *Settings → Domains* podes deixala en `folladnd.vercel.app` se está libre, ou poñer un dominio teu.

## 3. Actualizar
Cada vez que subas un `index.html` novo a GitHub (Add file → Upload files, mesmo nome), Vercel despréga só en un minuto. O mesmo cos paquetes en `packs/` e as guías en `docs/`.

## 4. Sen GitHub (alternativa)
Dende un ordenador con Node: `npx vercel` dentro da carpeta do proxecto, e segue as preguntas (proxecto novo, raíz `./`, sen build). Cada `npx vercel --prod` publica a versión que teñas na carpeta.

## 5. Os paquetes de pezas
Non hai que facer nada: a app le `packs/packs.json` e trae soa o paquete a primeira vez que alguén abre a web (uns segundos, unha soa vez por aparello). Para engadir outro paquete, sobe o `.zip` a `packs/` e engádeo á lista de `packs.json`:

```json
{ "paquetes": [
  { "ficheiro": "pack-chatgpt-cabeza.zip", "nome": "Trazos ChatGPT · cabeza", "descricion": "…", "auto": true },
  { "ficheiro": "pack-corpos.zip", "nome": "Corpos", "descricion": "…", "auto": false }
] }
```
Con `"auto": false` non se trae só, pero aparece en Pezas debuxadas → Paquetes → «Paquetes deste sitio» para traelo cun toque.

## 6. No iPad e no móbil
- Safari → *Compartir* → **Engadir á pantalla de inicio**: ábrese a pantalla completa, coma unha app.
- Os datos quedan **nese** navegador (IndexedDB). Para pasar personaxes: Menú → *Exportar ficheiro de copia*. Con Supabase (ver `INSTALAR-SUPABASE.md`) sincronízanse sós.
- Para que un amigo importe un paquete: dálle a dirección directa, `https://folladnd.vercel.app/packs/pack-chatgpt-cabeza.zip`, e usa «Importar dende unha dirección web».

## 7. Se usas Supabase
En Supabase → Authentication → URL Configuration, pon a dirección de Vercel en *Site URL* e en *Redirect URLs* (con `/` ao final). Se non, a ligazón do correo non volve á app.

## 8. Se algo non vai
- **404 na raíz**: o `index.html` non está na raíz do repositorio, ou *Root Directory* non é `./`.
- **Despregue en erro**: comproba que *Build Command* e *Output Directory* están baleiros (Framework: Other).
- **Non se importa un `.zip`**: fai falta conexión a primeira vez (carga o lector de zip).
- **Cambiei algo e non se ve**: Vercel tarda un minuto; despois recarga sen caché (mantén pulsado o botón de recargar en Safari).
