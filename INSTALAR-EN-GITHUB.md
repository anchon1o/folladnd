# Poñer o Libro de Heroes en GitHub (e que se abra cunha dirección web)

Resultado: unha dirección como `https://O-TEU-USUARIO.github.io/libro-de-heroes/` que calquera do grupo abre no iPad ou no móbil, e que podes engadir á pantalla de inicio coma unha app.

## Opción A · Só co navegador (vale dende o iPad)

1. Entra en [github.com](https://github.com) e inicia sesión (ou crea unha conta gratuíta).
2. Arriba á dereita, **+** → **New repository**.
   - *Repository name*: `libro-de-heroes`
   - *Public* (necesario para GitHub Pages gratuíto).
   - Marca **Add a README file**. → **Create repository**.
3. No repositorio, **Add file → Upload files**. Arrastra ou escolle:
   - `index.html` (a app),
   - `README.md` e `INSTALAR-EN-GITHUB.md` (este ficheiro),
   - as carpetas `docs`, `packs`, `plantillas` e `ferramentas`.
   Dende un ordenador podes arrastrar as carpetas enteiras. Dende o iPad, sube os ficheiros dun en un; para meter un ficheiro nunha carpeta, escribe o nome como `docs/nome-do-ficheiro.md` cando che pida onde gardalo, ou sube primeiro só `index.html` e o resto máis tarde.
   Límite: 100 MB por ficheiro (os paquetes de 20 MB entran ben).
4. Abaixo, en *Commit changes*, escribe «Primeira versión» e pulsa **Commit changes**.
5. **Settings** (pestana do repositorio) → menú da esquerda **Pages** → en *Build and deployment*, *Source*: **Deploy from a branch**; *Branch*: **main**, carpeta **/ (root)** → **Save**.
6. Agarda un ou dous minutos e recarga a páxina de *Pages*: aparece «Your site is live at https://O-TEU-USUARIO.github.io/libro-de-heroes/». Esa é a dirección da app.

## Opción B · Con git dende un ordenador

```bash
git clone https://github.com/O-TEU-USUARIO/libro-de-heroes.git
cd libro-de-heroes
# copia aquí index.html, README.md, INSTALAR-EN-GITHUB.md, docs/, packs/, plantillas/, ferramentas/
git add .
git commit -m "Primeira versión"
git push
```
Despois, o paso 5 e 6 da opción A (activar Pages).

## Actualizar a app cando haxa unha versión nova
Só cambia `index.html`:
- **No navegador:** abre `index.html` no repositorio → icona do lapis (*Edit*) non serve para ficheiros grandes; mellor **Add file → Upload files** e sube o novo `index.html` co mesmo nome: substitúe o vello. *Commit changes*. Pages actualízase só en un ou dous minutos.
- **Con git:** copia o novo `index.html`, `git add index.html && git commit -m "v5.2" && git push`.

Os paquetes novos van a `packs/`; a guía actualizada a `docs/`.

## No iPad e no móbil
- Abre a dirección en Safari → botón *Compartir* → **Engadir á pantalla de inicio**. Abre a pantalla completa, sen barra do navegador.
- Os datos quedan **nese** navegador. Para copias e para pasar personaxes entre aparellos: Menú → *Exportar ficheiro de copia*.
- Para que un amigo importe un paquete: dálle a dirección directa, por exemplo `https://O-TEU-USUARIO.github.io/libro-de-heroes/packs/pack-chatgpt-cabeza.zip`; descárgao e impórtao en *Pezas debuxadas → Paquetes*.

## Se algo non vai
- **404 na dirección de Pages:** ou aínda non pasou o minuto de despregue, ou o ficheiro non se chama exactamente `index.html`, ou Pages non está en *main / (root)*.
- **Non aparece «Pages» en Settings:** o repositorio ten que ser público (ou ter conta de pago).
- **Non se importa un `.zip`:** fai falta conexión a Internet a primeira vez (carga o lector de zip). Como alternativa, descomprime e sube os PNG soltos.
- **Quero que non o vexa calquera:** GitHub Pages é público. Se queres control de acceso, hai que usar outro aloxamento; a app en si non ten contas nin servidor.
