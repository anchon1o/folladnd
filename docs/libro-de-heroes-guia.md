# Libro de Heroes — guía do proxecto

*Dossier vivo do creador de follas de personaxe. Actualizado o 27 de setembro de 2026, versión 7.*

> Un só ficheiro HTML, sen servidor, en galego, pensado para xogar con iPad e móbil. Estética de libro antigo con cinco temas. Regras baseadas no SRD 5.2 (CC BY 4.0).

A infografía co mapa da app está no ficheiro `libro-de-heroes-infografia.svg`.

---

## 1. Que é e para quen

**Libro de Heroes** é unha app web para crear e levar follas de personaxe de Dungeons & Dragons durante a partida. Naceu con dous obxectivos:

1. Que unha persoa que **empeza no rol** poida crear un heroe e xogar sen ler antes trescentas páxinas.
2. Que a folla sexa **fermosa e cómoda na mesa**, sobre todo nun iPad, e tamén nun móbil.

### Principios de deseño

| Principio | Como se aplica |
|---|---|
| Sinxelo por defecto | As regras avanzadas (recursos de clase, armadura automática, concentración, resistencias) van **apagadas** e actívanse en Axustes cando se dominen. |
| Primeiro iPad, despois móbil | Reixa de 12 columnas con bloques alineados. En móbil, barra de navegación inferior e filas compactas. |
| Todo nun ficheiro | `libro-de-heroes.html` funciona sen conexión e garda no dispositivo. Non depende de ningún servidor. |
| En galego | Toda a interface, os nomes dos conxuros, armas, especies e trasfondos. |
| Regras libres | Só se usa o SRD 5.2, publicado con licenza CC BY 4.0. Non se inclúen textos dos manuais oficiais. |

---

## 2. Mapa da app

```
┌─ Barra ─────────────────────────────────────────────────────┐
│ Selector de personaxe · ♛ Máster · ≡ Menú                    │
└─────────────────────────────────────────────────────────────┘
┌─ Cabeceira ─────────────────────────────────────────────────┐
│ Retrato · Nome · Clase · Nivel (+ Subir de nivel) · XP …     │
└─────────────────────────────────────────────────────────────┘
┌─ Lapelas ───────────────────────────────────────────────────┐
│ Á mesa · Personaxe · Combate · Grimorio · Alforxa · Crónica  │
└─────────────────────────────────────────────────────────────┘
                     ⬢ Selo de lacre = bandexa de dados

Menú ≡ ──┬─ Novo personaxe (asistente, folla en branco ou outro sistema)
         ├─ Desfacer o último cambio (tamén Ctrl/Cmd+Z)
         ├─ Compartir folla co máster (QR ou código)
         ├─ Tarxeta de heroe (PNG)
         ├─ Exportar PDF ou imprimir
         ├─ Exportar / importar copia (JSON)
         ├─ Mapas e taboleiro   → Mazmorra · Taboleiro · Campaña
         ├─ Biblioteca de manuais (PDF) e Compendio
         ├─ Folla do grupo
         ├─ Cartas imprimibles
         ├─ Axustes e temas (accesibilidade incluída)
         ├─ Axuda e glosario
         └─ Borrar este personaxe

♛ Máster ─┬─ Iniciativa (con «Recibir folla»)
          ├─ Bestiario
          ├─ Xeradores
          └─ Ambiente
```

---

## 3. Guía de uso, con exemplos

### 3.1 Crear un heroe co asistente

Menú → **Novo personaxe** → *Co asistente, paso a paso*. Sete pasos:

1. **Nome** e xogador.
2. **Especie** (10): cada tarxeta explica os dons.
3. **Clase** (12): marcadas como *Doado*, *Medio* ou *Avanzado*. Se é a primeira partida, Guerreiro, Pícaro, Bárbaro ou Paladín.
4. **Trasfondo** (16): dá dúas habilidades, unha dote e bonos.
5. **Características**: o libro propón o reparto ideal para a clase (botón *Reparto recomendado*); tamén matriz estándar ou tirar 4d6. Os bonos do trasfondo repártense como +2/+1 ou +1/+1/+1.
6. **Habilidades**: escóllense as da clase; as do trasfondo xa veñen marcadas.
7. **Resumo** e crear.

> **Exemplo.** Iria, elfa pícara con trasfondo Criminal. O asistente pon Destreza 17, PV 10, CA 14 (coiro), espada curta, arco curto e daga, ferramentas de ladrón, e a tirada gardada *Ataque furtivo 1d6*. Ao chegar ao nivel 3, o ataque furtivo pasa só a 2d6.

### 3.2 Xogar dende «Á mesa»

É a lapela para a partida: vida, ataques, conxuros preparados, probas, salvacións e estados nunha soa pantalla.

- **Dano / Curar / Temporais**: escribe a cantidade e toca o botón. Ao caer a 0 PV aparecen as salvacións de morte.
- **Atacar**: tira o d20 co bonus. Se sae 20 natural, o seguinte botón *Dano* dobra os dados.
- **Lanzar**: tira o dano do conxuro e gasta só o espazo do nivel correspondente (ou dun superior se non queda).
- **Tiradas gardadas**: atallos como *Bola de lume 8d6*. Gárdanse dende a bandexa de dados.

### 3.3 A bandexa de dados

Toca o **selo de lacre**. Xunta dados (d4 a d100), pon modificador e lanza; ou escribe unha expresión: `2d6+1d4+3`. Selector de **ventaxe/desvantaxe** (a insignia V ou D no selo lémbrache que está activo). O dado xira e soa; os 20 naturais levan campaíña. Rexistro das últimas 30 tiradas.

### 3.4 Subir de nivel

Botón **Subir de nivel** na cabeceira (ou o aviso dourado cando a XP chega ao limiar). O diálogo pide os PV (media ou tirada), avisa se sobe a competencia, ofrece **mellora de característica ou dote** nos niveis 4, 8, 12, 16, 19 (e os extra de guerreiro e pícaro) e pide a **subclase** no nivel 3. Actualiza sós os espazos de conxuro e os recursos de clase.

### 3.5 Combate, descansos e regras avanzadas

- **Descanso curto**: recupera recursos de descanso curto e os espazos de pacto do bruxo. *Gastar dado de golpe* cura.
- **Descanso longo**: vida completa, espazos, recursos, metade dos dados de golpe, un nivel de esgotamento.
- Con o **modo avanzado** activado (Axustes):
  - *Recursos de clase*: furia, canalizar divindade, ki, puntos de feitizaría… con contadores que se recargan.
  - *Armadura automática*: escolle armadura e escudo; a CA calcúlase coa Destreza e o seu límite.
  - *Concentración*: ao lanzar un conxuro de concentración queda marcado; ao recibir dano tírase a salvación de CON coa CD correcta.
  - *Resistencias*: toca un tipo de dano para marcalo resistente (½), inmune (0) ou vulnerable (×2); o botón Dano aplícao.

### 3.6 Grimorio e compendio

Ao escribir o nome dun conxuro (ou dunha arma en Combate) o compendio enche dados, notas, nivel e concentración. Hai **~65 conxuros** de trucos a nivel 3 e **34 armas**. Botón *Segundo a clase* pon os espazos da táboa. O campo **Referencia no manual** (p. ex. `Manual p. 241`) abre a Biblioteca nesa páxina.

### 3.7 Creador de personaxes (banco de imaxes)

Toca o retrato → *Debuxar un retrato*. A vista por defecto é o **corpo enteiro**; o botón *Busto* amosa só a cabeza (o que vai na folla). Capas:

| Grupo | Opcións |
|---|---|
| Corpo | 6 tipos (delgado, atlético, robusto, ancho, miúdo, xigante); as especies axustan altura e anchura (ananos baixos e anchos, medianos e gnomos pequenos, goliats altos) |
| Postura | De pé, en garda, saudando, brazos cruzados, conxurando (con luz nas mans), camiñando |
| Arma e escudo | Espada, machado, martelo, daga, lanza, bastón, arco, libro, laúde ou nada; escudo redondo ou de cometa |
| Capa | Curta, longa ou con capucha, en 8 cores |
| Roupa | 10 vestimentas de corpo enteiro (placas, mallas, coiro, túnica, traxe de bardo, peles, monxe, follas, sacra, camisa), 10 cores; proposta segundo a clase |
| Pernas e calzado | Pantalóns, saia, grebas ou curtos, en 8 cores; botas, botas altas, sandalias ou descalzo |
| Cabeza | 6 rostros, 14 tons de pel, ollos e cor, cellas, nariz, boca, barba, 9 peiteados con 12 cores, accesorios |
| Especie | Orellas élficas, cornos de tiflin, colmillos de orco, escamas de draconato, halo de aasimar, marcas de goliat |
| Fondo | Pergameo, pedra, bosque, noite, lume, mar |

*Sorpréndeme* xera un ao chou coherente coa especie e a clase (arma, escudo e roupa incluídos). Descargas: **Figura (PNG)** de corpo enteiro, **Ficha (PNG)** redonda para o taboleiro. A figura aparece tamén en Crónica → Aparencia, e a tarxeta de heroe úsaa no canto do busto.

### 3.8 Crónica e diario

Personalidade, ideais, vínculos, defectos, aparencia, historia, aliados e notas. **Diario de sesións**: unha entrada por partida con data, título, texto e XP; *Sumar XP* engádea ao personaxe e avisa cando toca subir.

### 3.9 Compañeiros

Bloque en Personaxe para mascotas, familiares, monturas ou seguidores: PV, CA, ataque e dano, con botóns propios para tirar.

### 3.10 Outros sistemas de xogo (v4)

Menú → Novo personaxe → *Outro sistema de xogo*, ou o campo **Sistema de xogo** na cabeceira. Cada sistema trae as súas características e habilidades:

| Sistema | Mecánica | Características | Habilidades |
|---|---|---|---|
| Dungeons & Dragons 5e | d20 + modificador | 6 | 18, con competencia e pericia |
| Pathfinder 2e | d20 + modificador | 6 | 17 propias (Ocultismo, Sociedade, Roubo…) |
| A chamada de Cthulhu 7e | d100 ≤ porcentaxe | 8 (FOR, CON, TAM, DES, APA, INT, POD, EDU) | 30 con base; máis Cordura, Sorte e Puntos de maxia |
| Aquelarre | d100 ≤ porcentaxe | 7 (FUE, AGI, HAB, RES, PER, COM, CUL) | 24; máis Irracionalidade, Racionalidade e Templanza |

Nos sistemas de d100, a tirada di *Éxito extremo* (⅕), *Éxito difícil* (½), *Éxito*, *Fallo* ou *Pifia*. O Grimorio e as regras de D&D quedan ocultos.

> **Exemplo.** Harvey, investigador con Descubrir 60 %. Toca *Descubrir*: sae 45 → Éxito. Se saíse 12 → Éxito extremo.

### 3.11 Desfacer (v4)

Menú → *Desfacer o último cambio*, ou Ctrl/Cmd+Z fóra dun campo de texto. Gárdanse os últimos 20 estados de cada personaxe; o aviso di que cambiou («Desfeito: vida, estados»).

### 3.12 Cronista automático (v4)

Anota sós na Crónica cada tirada, dano, cura, conxuro, descanso e subida de nivel, con hora. *Resumo ao diario* crea unha entrada coa conta de tiradas, críticos, dano e curación. Desactívase en Axustes.

### 3.13 Compartir folla co máster (v4)

Menú → *Compartir folla*: xera un código curto (`LH1:…`) e un QR coa foto da folla (nome, clase, nivel, PV, CA, iniciativa, percepción pasiva, estados). O máster, en ♛ → *Recibir folla*, escanea o QR coa cámara ou pega o código, e o heroe aparece na iniciativa cos seus datos. Non hai servidor: é unha foto do momento; cando cambie, vólvese compartir.

### 3.14 Tarxeta de heroe (v4)

Menú → *Tarxeta de heroe*: un PNG de 900×1200 co retrato, nome, clase, vida, armadura, características, mellores habilidades, ataques e conxuros, nas cores do tema activo. Para mandar polo grupo.

### 3.15 Pezas debuxadas a man (v5)

Menú → *Pezas debuxadas* abre unha ferramenta de debuxo por capas, coa mesma idea das plantillas PSD pero dentro da propia app, e un importador para quen prefira debuxar en Procreate ou outra app e traer o resultado.

**Pintar:** escolle un paquete (créase cun nome), a categoría (rostro, ollos, cellas, nariz, boca, orellas, barba, pelo de diante, pelo de atrás, cornos, accesorios para a cabeza; capa, roupa, cinto, pernas, calzado, brazos, arma, escudo, efecto para o corpo, estas últimas coa postura correspondente) e debuxa co dedo ou o lapis. Hai pincel con sensibilidade á presión, recheo (bote de pintura), borrador, sete cores (negro, tres grises, branco e dous fixos), desfacer e unha guía en verde e vermello coas mesmas zonas mínimo/recomendado/máximo explicadas na guía para debuxantes, superposta sobre un maniquí xerado pola propia app. *Gardar esta peza* engádea á galería da categoría; cada peza pode editarse, duplicarse ou borrarse.

**Paquetes:** créanse, renoméanse, expórtanse (nun .zip cos PNG e un `paquete.json`) ou bórranse. *Importar PNG ou .zip dos amigos* acepta os ficheiros exportados seguindo a guía para debuxantes: recoñece o nome (`ollos-03.png`, `brazo-diante-garda-01.png`…) e clasifícaos sós; o que non recoñece queda nun apartado para asignarlle categoría a man.

**Na folla:** ao editar o retrato (toca o retrato → *Debuxar un retrato*), un bloque novo «Cabeza debuxada a man» dea escoller un paquete e, para cada categoría con pezas, cal usar (ou ningunha). O resultado substitúe a cabeza automática no busto, na figura completa, na ficha redonda e na tarxeta de heroe; o corpo séguese debuxando automaticamente. As pezas de rostro, orellas e nariz tinguen coa cor de pel escollida; as de pelo de diante, pelo de atrás, cellas e barba, coa cor de pelo; o resto (ollos, boca, trazos de especie, cornos, accesorios) queda tal como se debuxou.

**Pezas xeradas con ChatGPT (v5.1).** O camiño que dá calidade de ilustración: follas de pezas xeradas por ChatGPT, recortadas e aliñadas ao lenzo 800×960 e importadas como paquete **a cor** (sen tinguir). Primeiro pack: `pack-chatgpt-cabeza.zip` con 18 rostros completos, 24 peiteados, 16 barbas, 16 orellas e 16 accesorios; e `retratos-chatgpt.zip` con 12 retratos enteiros para subir directamente. Novidades da app: cada paquete pode marcarse como «a cor» (non se tingue) ou «en grises» (tínguese); **Colocar imaxe** na ferramenta de debuxo (arrastrar, escalar, quitar fondo e fixar unha imaxe calquera sobre a guía); e **Descrición para un xerador de imaxes** no editor de retrato. Como pedir novas follas: `pedir-follas-a-chatgpt.md`.

**Corpo debuxado a man (v5.2).** No editor do retrato hai un segundo bloque, «Corpo debuxado a man»: escolles un paquete e, por categoría, a peza (capa, brazo de atrás, pernas, calzado, roupa, cinto, brazo de diante, arma, escudo, efecto). As de brazos, arma e escudo cambian coa **postura** escollida; as de pernas e calzado, entre «de pé» e «camiñando». Como se garante que cadren: todas as pezas están debuxadas sobre o mesmo maniquí (o da ferramenta de debuxo, que é o propio debuxo automático), así que ocupan o seu sitio por construción; ao montar, a app escala as pezas cos mesmos factores co que escala o maniquí (tipo de corpo e especie: ananos anchos e baixos, goliats altos…) e pega a cabeza exactamente onde a pega o debuxo automático. O que non teña peza debúxao a app por debaixo (a capa e o brazo de atrás van por detrás); se hai roupa, pernas e os dous brazos, o corpo automático desaparece. Nos paquetes en grises, a roupa tíngue coa cor de roupa, a capa coa de capa e as pernas coa de pernas.

**Retratos enteiros e etiquetas (v5.4).** Un paquete pode traer retratos completos (`head/retrato-NN.png`): no editor aparecen en «Retratos enteiros do paquete» e, escollendo un, vai tal cal á folla, á ficha e á tarxeta. O `paquete.json` pode etiquetar pezas (`"pezas": {"head/orellas-02.png": "Orellas · Élfica"}`): a etiqueta vese ao pousar o dedo e «Sorpréndeme» úsaa para dar a cada especie as súas orellas. Nos paquetes a cor, ao escoller un rostro a app toma o seu ton de pel para o pescozo e as mans do corpo automático, e a cor do pelo do peiteado. En Paquetes hai «Importar dende unha dirección web» para paquetes publicados (por exemplo, no GitHub do proxecto).

**Pendente:** pezas reais de corpo (aínda só hai de cabeza) e pelo de atrás.

---

## 4. Ferramentas do máster (botón ♛)

| Lapela | Que fai |
|---|---|
| **Iniciativa** | *Engadir o grupo* trae todos os heroes gardados coa súa iniciativa tirada; *Recibir folla* le o código ou QR dun xogador. Engade criaturas (varias á vez, numeradas). *Comezar o combate* e *Seguinte quenda*; roldas, PV con ± e cantidade, notas por criatura. |
| **Bestiario** | 32 criaturas do SRD (VD 1/8 a 8) filtradas por nome e terreo. *Á iniciativa* engádeas coas súas estatísticas; na fila aparecen os seus ataques listos para tirar (acerto e dano seguidos). |
| **Xeradores** | Nome (opción *sabor galego*: Iria do Courel, Brais de Ancares…), personaxe non xogador con oficio, trazo e segredo, taberna con prato e rumor, botín por nivel e encontro por terreo. Todo pódese copiar ás notas de campaña ou mandar á iniciativa. |
| **Ambiente** | Chuvia, lume de campamento, bosque, taberna e batalla, sintetizados con WebAudio (sen ficheiros). Mestúranse e teñen volume propio. |

---

## 5. Mapas (Menú → Mapas e taboleiro)

- **Mazmorra**: cuadrícula de 36×26 con dez tipos de casilla (chan, muro, porta, escaleiras, trampa, cofre, auga, columna, altar, borrar). Píntase co dedo ou o lapis. *Xerar ao chou* crea 7–9 salas conectadas, numeradas, cunha descrición editable para cada unha. *Descargar PNG* e *Levar ao taboleiro*.
- **Taboleiro**: imaxe propia ou a mazmorra. Néboa de guerra que o máster **revela ou oculta pintando**; fichas arrastrables traídas da iniciativa (os heroes con retrato debuxado usan a súa ficha redonda). *Ver como xogador* oculta o que non se revelou. **Novo na v4:** ferramentas *Medir* (casillas e metros), *Círculo*, *Cono* e *Liña* para áreas de conxuro, e **luz** por ficha (0, 2, 4 ou 8 casillas) que revela arredor dela mesmo na vista dos xogadores.
- **Campaña**: sobe o mapa do mundo, toca para poñer lugares numerados con notas e enlázaos a unha sesión do diario.

---

## 6. Biblioteca, grupo e cartas

- **Compendio** (lapela na Biblioteca, v4): rasgos de cada clase por nivel (1–10, e engádense sós ao subir), 18 dotes e 30 obxectos máxicos do SRD, con botóns para pasalos aos rasgos ou á alforxa.
- **Biblioteca**: engade os teus manuais en PDF. Visor con páxina, zoom, **buscador de texto** e **marcadores**. Os PDF gárdanse no dispositivo (IndexedDB); o visor (pdf.js) descárgase de Internet a primeira vez.
- **Folla do grupo**: todos os heroes cun vistazo (PV, CA, percepción pasiva, iniciativa), cofre común con ouro e obxectos, misións con feito/pendente e notas do grupo.
- **Cartas imprimibles**: conxuros, ataques, obxectos e os 14 estados con explicación, en cartas de 63×88 mm, nove por A4.

---

## 7. Axustes e temas

**Na mesa**: son e animación dos dados. **Modo avanzado**: as catro regras descritas en 3.5. **Accesibilidade (v4)**: tamaño do texto (normal, grande, enorme), alto contraste, lectura das tiradas en voz alta e cronista automático. **Axuda e glosario** (Menú): 30 termos explicados e unha guía da primeira partida. **Aspecto do libro**:

| Tema | Carácter |
|---|---|
| Pergameo | O clásico: pergameo, tinta e rúbrica vermella, Cinzel e Garamond. |
| Grimorio nocturno | Escuro con ouro e violeta. Para xogar con pouca luz. |
| Cartógrafo | Papel azulado con cuadrícula, tinta mariña e óxido, letra IM Fell. |
| Moderno | Branco, limpo, sen adornos, Space Grotesk e Inter, acento coral. |
| Cómic | Trazo groso negro, amarelo e vermello, sombras duras, Bangers e Nunito. |

---

## 8. Gardado e ficheiros

| Onde se abre | Como garda | Límites |
|---|---|---|
| Dentro de Claude (artefacto) | `window.storage`, automático | 5 MB por elemento: os PDF e mapas grandes **non** caben aquí. |
| Ficheiro descargado ou web (Vercel) | `IndexedDB` para todo (follas, pezas, PDF, mapas); `localStorage` só como reserva se non hai IndexedDB | Só ese navegador e ese dispositivo. Non se sincroniza. |

**Copia de seguridade**: Menú → *Exportar ficheiro de copia* (JSON por personaxe). Para pasar un heroe a outro dispositivo, exporta e importa. **Recomendación**: para xogar de verdade, usa o ficheiro descargado.

**PDF**: Menú → *Exportar PDF ou imprimir* → «Gardar como PDF». Catro páxinas A4: Personaxe, Combate, Grimorio e Alforxa, Crónica.

---

## 9. Notas técnicas

### Ficheiros fonte (en `/home/claude/lh/` durante o desenvolvemento)

| Ficheiro | Contido |
|---|---|
| `style.css` | Reixa, bloques, lapelas, móbil, impresión. |
| `themes.css` | Os cinco temas e os estilos dos módulos novos. |
| `body.html` | Estrutura: barra, cabeceira, seis lapelas, bandexa, xanelas. |
| `data.js` | Clases, especies, trasfondos, armas, conxuros, táboas de espazos e XP. |
| `data2.js` | Bestiario, táboas dos xeradores, descrición dos estados. |
| `app.js` | Estado, gardado, renderizado, dados, subida de nivel, asistente, iniciativa, axustes. |
| `avatar.js` | Retrato por capas en SVG, ficha redonda, interface do creador, composición coa cabeza debuxada a man. |
| `figure.js` | Figura de corpo enteiro: poses, armas, escudos, capas, pernas e calzado; embute a cabeza debuxada a man cando existe. |
| `maps.js` | Almacén grande (IndexedDB), mazmorra, taboleiro, campaña. |
| `library.js` | Visor de PDF (pdf.js), busca, marcadores, referencias. |
| `extras.js` | Temas, bestiario, xeradores, ambiente, grupo, cartas, compañeiros. |
| `systems.js` | Sistemas de xogo (Pathfinder, Cthulhu, Aquelarre), desfacer, cronista, compartir por código. |
| `more.js` | Compendio ampliado, ferramentas do taboleiro, tarxeta de heroe, glosario, accesibilidade. |
| `painter.js` | Ferramenta de debuxo por capas, xestión de paquetes, importación e exportación, composición da cabeza. |
| `build.py` | Concatena todo en `libro-de-heroes.html` (≈3 320 liñas, 350 kB). |

### Claves de gardado

`heroes:index`, `heroes:active`, `heroes:char:<id>`, `heroes:cfg`, `heroes:enc`, `heroes:maps`, `heroes:tb`, `heroes:cm`, `heroes:lib`, `heroes:group`. Almacén grande: `tabletop`, `campaign`, `pdf:<id>`.

### Dependencias externas

Fontes de Google (opcional; se non hai rede úsanse as do sistema), pdf.js (Biblioteca), qrcode-generator e jsQR (compartir folla), JSZip (exportar/importar paquetes de pezas en .zip), todos dende cdnjs e só cando se usan; sen conexión, exportar un paquete descarga os PNG soltos no canto dun .zip. Todo o demais é código propio.

### Como se probou

Con Playwright e Chromium a 820×1180 (iPad vertical), 1180×820 (iPad horizontal) e 390×844 (móbil): capturas de todas as lapelas, comprobación de que nada desborda horizontalmente, e probas de funcionamento do asistente, subida de nivel, resistencias, tiradas gardadas, diario, iniciativa, bestiario, xeradores, mapas, grupo, cartas, temas e persistencia tras recargar.

---

## 10. Historial de versións

| Versión | Data | Que trouxo |
|---|---|---|
| v1 | set. 2026 | Folla completa nun HTML: cinco lapelas, modificadores automáticos, barra de vida, dados co selo, gardado automático, exportar/importar, imprimir. |
| v2 | set. 2026 | Rediseño para iPad e móbil. Lapela «Á mesa». Asistente de creación. Subida de nivel guiada. Compendio en galego. Menú de axustes co modo avanzado. Tiradas gardadas. Dados con animación e son. Mesa do máster con iniciativa. Diario de sesións. PDF en catro páxinas. |
| v3 | 18 set. 2026 | Cinco temas. Retrato por capas e ficha redonda. Compañeiros. Mapas (mazmorra, taboleiro con néboa, campaña). Bestiario, xeradores e ambiente. Biblioteca de PDF con referencias. Folla do grupo. Cartas imprimibles. Gardado no dispositivo fóra de Claude. |
| v7 | 27 set. 2026 | **Un só creador de personaxes: o das imaxes.** O editor do retrato traballa só co banco de pezas (retratos enteiros e pezas de cabeza); retíranse da interface as opcións do debuxo automático en SVG, o selector de paquete de corpo e o botón de descrición para xeradores. Ao tocar o retrato ábrese directamente o editor, cun retrato xa composto, e «Sorpréndeme» combina pezas do banco. |
| v6.2 | 27 set. 2026 | O paquete de pezas vén co sitio: a app le `packs/packs.json` e tráeo soa a primeira vez que se abre na web, sen que ninguén importe nada. En Paquetes hai «Paquetes deste sitio» para traelos ou repetilos a man. |
| v6.1 | 27 set. 2026 | Arranxo: importar un paquete `.zip` xa non esixe crear un paquete baleiro antes (créase só, co nome, etiquetas e modo do `paquete.json`) e xa non depende de descargar un lector da rede (lector de zip propio con `DecompressionStream`). Aviso no editor do retrato cando non hai ningún paquete no aparello. |
| v6 | 27 set. 2026 | Nube opcional con Supabase (prefixo `dnd_`): sesión por ligazón de correo, personaxes sincronizados entre aparellos, mesas con código, iniciativa do máster en directo, paquetes publicados e traídos por id. Esquema en `supabase-dnd.sql`, pasos en `INSTALAR-SUPABASE.md`. Sen probar contra un proxecto real. |
| v5.5 | 27 set. 2026 | Gardado en IndexedDB fóra de Claude (sen o límite de 5 MB do localStorage), con migración automática dos datos vellos; imaxes compostas en WebP; retrato enteiro tamén na ficha e na tarxeta. Encargo dos corpos para ChatGPT con maniquís por postura (`pedir-corpos-a-chatgpt.md`). |
| v5.4 | 25 set. 2026 | Harmonización automática: a pel do corpo e a cor do pelo tómanse do rostro e do peiteado escollidos. «Sorpréndeme» escolle as orellas segundo a especie (etiquetas do paquete). Retratos enteiros dentro dos paquetes (`retrato-NN.png`), usables tal cal na folla. Importar paquetes dende unha dirección web. |
| v5.3 | 24 set. 2026 | Miniaturas das pezas (importación e selectores moito máis rápidos), «Sorpréndeme» tamén escolle pezas dos paquetes, retrato e ficha encadrados sen cortar o pelo, rostros do pack con ombreiro esvaecido para non tapar o corpo. |
| v5.2 | 24 set. 2026 | Composición do corpo con pezas debuxadas, aliñadas ao maniquí e escaladas co tipo de corpo e a especie; a cabeza pégase na posición exacta. Repositorio listo para publicar (Vercel) con instrucións. |
| v5.1 | 24 set. 2026 | Primeiro pack de pezas xeradas con ChatGPT (90 pezas de cabeza aliñadas) e 12 retratos; paquetes a cor sen tinguir; colocador de imaxes; descrición para xeradores de imaxes. |
| v5 | 18 set. 2026 | Ferramenta de debuxo por capas dentro da app (pincel con presión, recheo, borrador, guías) e importador de PNG/.zip debuxados fóra; paquetes de pezas; a cabeza da folla, a figura, a ficha e a tarxeta xa poden usar unha cabeza debuxada a man en vez da automática. |
| v4.1 | 18 set. 2026 | Creador de personaxes de corpo enteiro: poses, armas, escudos, capas, pernas e calzado. |
| v4 | 18 set. 2026 | Outros sistemas (Pathfinder 2e, Cthulhu 7e, Aquelarre). Desfacer. Compartir folla por QR ou código. Cronista automático. Compendio ampliado (rasgos por nivel, dotes, obxectos máxicos). Taboleiro con medición, áreas e luz. Tarxeta de heroe. Glosario e titorial. Accesibilidade. |

---

## 11. Táboa de melloras e estado

Lenda: ✅ feita · 🟡 parcial · ⏳ pendente · 💤 aprazada a propósito

### Primeira rolda (v2)

| # | Mellora | Estado | Notas |
|---|---|---|---|
| 1 | Subida de nivel guiada | ✅ | Visible sempre: axuda a quen empeza. |
| 2 | CA automática | ✅ | Modo avanzado, apagada por defecto. |
| 3 | Recursos de clase | ✅ | Modo avanzado. |
| 4 | Concentración | ✅ | Modo avanzado. |
| 5 | Resistencias e vulnerabilidades | ✅ | Modo avanzado. |
| 6 | Modo partida («Á mesa») | ✅ | |
| 7 | Tiradas gardadas | ✅ | Pícaro e monxe traen as súas. |
| 8 | Dados con animación e son | ✅ | Desactivables. |
| 9 | Modo máster con iniciativa | ✅ | Ampliado na v3. |
| 10 | Diario de sesións | ✅ | Con aviso de subida de nivel. |
| 11 | Asistente para novatos | ✅ | |
| 12 | Compendio SRD en galego | ✅ | ~65 conxuros, 34 armas. Ampliable (ver 3ª rolda). |
| 13 | Desfacer | ✅ | Feito na v4. |
| 14 | Gardado fóra de Claude | ✅ | Feito na v3 (localStorage + IndexedDB). |
| 15 | PDF fermoso | ✅ | Catro páxinas A4. |

### Segunda rolda (v3)

| # | Mellora | Estado | Notas |
|---|---|---|---|
| 1 | Editor de mazmorras | ✅ | |
| 2 | Xerador automático de mazmorras | ✅ | Con descrición de salas. |
| 3 | Taboleiro con néboa de guerra | ✅ | Fichas arrastrables, vista de xogador. |
| 4 | Mapa de campaña | ✅ | Lugares enlazados ás sesións. |
| 5 | Retrato por capas estilo cómic | ✅ | Busto e, dende a v4.1, corpo enteiro con posturas, armas e capas. |
| 6 | Fichas redondas | ✅ | PNG e uso no taboleiro. |
| 7 | Compañeiros | ✅ | |
| 8 | Visor de PDF | ✅ | Só con ficheiro descargado; precisa rede a primeira vez. |
| 9 | Referencias que abren o manual | ✅ | En ataques e conxuros. |
| 10 | Outros sistemas de xogo | ✅ | Feito na v4: Pathfinder 2e, Cthulhu 7e e Aquelarre. |
| 11 | Xeradores rápidos | ✅ | |
| 12 | Bestiario | ✅ | 32 criaturas; ampliable. |
| 13 | Folla do grupo | ✅ | |
| 14 | Ambiente sonoro | ✅ | Sintetizado; sen pistas propias. |
| 15 | Cartas imprimibles | ✅ | |
| — | Cinco temas visuais | ✅ | Pedidos á parte das 15. |

### Terceira rolda (propostas, 18 set. 2026)

| # | Mellora | Estado | Resumo |
|---|---|---|---|
| 1 | Outros sistemas de xogo | ✅ | Pathfinder 2e, A chamada de Cthulhu 7e e Aquelarre. Os compendios (armas, conxuros, bestiario) seguen sendo de D&D. |
| 2 | Desfacer e historial de cambios | ✅ | Últimos 20 estados; Ctrl/Cmd+Z. |
| 3 | App instalable (PWA) | 💤 | Descartada polo usuario. |
| 4 | Mesa compartida | 🟡 | Feita **por código e QR** (foto da folla, sen servidor). Sincronización en directo entre dispositivos non é posible sen un servidor. |
| 5 | Cronista automático | ✅ | Con resumo ao diario. |
| 6 | Compendio ampliado | ✅ | Rasgos de clase niveis 1–10, 18 dotes, 30 obxectos máxicos. Niveis 11–20 pendentes. |
| 7 | Taboleiro avanzado | ✅ | Medir, círculo, cono, liña e luz por ficha. |
| 8 | Tarxeta de heroe | ✅ | Tarxeta PNG coa figura de corpo enteiro (v4.1). |
| 9 | Glosario e titorial | ✅ | 30 termos e guía da primeira partida. |
| 10 | Accesibilidade e idiomas | 🟡 | Accesibilidade feita. A interface en castelán e inglés queda pendente: son centos de textos. |

### Pendentes acumulados

| Que | De onde vén |
|---|---|
| Pezas de **corpo** xeradas (roupa, brazos por postura, pernas, capas, armas): a app xa as compón; faltan as imaxes | v5.2 |
| Regenerar a folla de **accesorios** sen cabeza de guía (a actual deixa liñas) e pedir pelo de atrás, cornos e máis rostros | v5.1 |
| Mellorar o xerador SVG automático | **Descartado**: non chega a calidade de ilustración; substitúeno as pezas de píxeles |
| Interface en castelán e inglés | 3ª rolda, 10 |
| Rasgos de clase dos niveis 11–20 | 3ª rolda, 6 |
| Compendios propios para Pathfinder, Cthulhu e Aquelarre (armas, habilidades especiais, bestiario) | 3ª rolda, 1 |
| Sincronización en directo | ✅ na v6 con Supabase (opcional) |

---

## 12. Decisións de deseño rexistradas

- As regras avanzadas van ocultas tras Axustes para non asustar a quen se inicia.
- Prioridade de pantalla: iPad primeiro, móbil despois, cunha versión compacta.
- Todo o texto en galego; os nomes dos xeradores poden levar sabor galego.
- Só regras e compendio do SRD 5.2 (CC BY 4.0); os manuais oficiais cárgaos cada quen na Biblioteca.
- Os datos de especies, trasfondos e recursos seguen as regras de 2024. Se se xoga coa edición de 2014, convén revisalos.
- Os outros sistemas fixéronse na v4 cambiando as características e habilidades por personaxe; a mecánica de d100 ten as súas tiradas propias.
- A app instalable (PWA) descartouse.
- O creador de personaxes evolucionou a pezas debuxadas a man: hai unha ferramenta de debuxo dentro da propia app (pincel con presión, recheo, borrador, guías) e un importador para quen debuxe en Procreate ou outra app e exporte PNG seguindo a guía. A cabeza da folla xa pode usar pezas debuxadas; o corpo (con seis posturas) aínda non está composto, só se pode pintar e gardar para cando se amplíe.
- A mesa compartida fíxose sen servidor, por código e QR, aceptando que é unha foto do momento e non sincronización en directo.

---

## 13. Como seguimos

Cada sesión de traballo: (1) probar no iPad e apuntar o que non convence, (2) escoller dúas ou tres melloras da táboa, (3) construír e probar en Playwright nos tres tamaños, (4) actualizar esta guía e a táboa de estado.
