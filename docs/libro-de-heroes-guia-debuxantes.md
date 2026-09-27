# Guía para debuxantes — pezas do Libro de Heroes

*Como debuxar, en iPad ou en papel, as pezas que compoñen os personaxes. Versión 1, 18 de setembro de 2026.*

## 0. A idea en tres liñas

O creador de personaxes monta un heroe **apilando capas transparentes**: fondo → capa → pernas → calzado → roupa → brazo de atrás → cabeza (rostro, orellas, ollos, cellas, nariz, boca, barba, pelo) → brazo de diante → arma → escudo. Cada peza é **un PNG transparente do tamaño completo do lenzo**, debuxado no seu sitio sobre a plantilla. Como todas as pezas comparten o mesmo lenzo, non hai que medir nada: se pintas os ollos na liña dos ollos da plantilla, cadrarán con calquera rostro, calquera pelo e calquera nariz que debuxe outra persoa.

Só hai dous lenzos:

| Lenzo | Tamaño | Plantilla | Que se debuxa nel |
|---|---|---|---|
| **Cabeza** | 800 × 960 px | `plantilla-cabeza.png` | rostro, orellas, ollos, cellas, nariz, boca, barba, pelo, accesorios, trazos de especie |
| **Corpo** | 1200 × 2080 px | `plantilla-corpo-<postura>.png` (seis) | pernas, calzado, roupa, brazos, armas, escudos, capas |

A cabeza debúxase á parte porque despois a app a coloca sobre o corpo, escalada segundo a especie e o tipo de corpo. Así unha soa colección de caras serve para todas as posturas.

---

## 1. O pack por capas (PSD) e as apps para debuxar

Na carpeta `psd/` hai **sete ficheiros PSD**, un por lenzo, xa montados por capas:

| Ficheiro | Lenzo | Capas |
|---|---|---|
| `cabeza.psd` | 800 × 960 | plantilla · 11 guías por elemento (ocultas) · 12 capas «DEBUXA» nomeadas |
| `corpo-pe.psd`, `corpo-garda.psd`, `corpo-saudo.psd`, `corpo-cruzados.psd`, `corpo-conxuro.psd`, `corpo-camino.psd` | 1200 × 2080 | plantilla · 6 guías (ocultas) · 10 capas «DEBUXA» nomeadas, coa postura no nome onde toca |

Como se usa: abres o PSD, activas a guía do elemento que vas facer (por exemplo «guía · ollos»), debuxas na capa «DEBUXA · ollos-01», e cando remates apagas a guía. Para outra variante, duplica a capa e chámaa `-02`. Ao final exportas as capas DEBUXA como PNG transparente. O PSD é o formato que abre todo o mundo; se a túa app non o abre, usa os PNG soltos das plantillas como capa de fondo.

### Apps recomendadas

| Onde | App | Prezo | Notas |
|---|---|---|---|
| iPad | **Procreate** | uns 15 € unha vez | A mellor opción co Apple Pencil. Abre PSD con capas. *Accións → Compartir → Compartir capas → PNG* exporta todas as capas dunha vez, cada unha co nome da capa: é xusto o que precisamos. |
| iPad | **Clip Studio Paint** | subscrición ou pago único | Moi completo, abre PSD, exporta capas por separado. |
| iPad | **Affinity Photo 2** | pago único | Abre e garda PSD, exportación por capas (persona Export). |
| iPad, Android | **ibis Paint X** | gratis (con anuncios) | Abre PSD, exporta PNG transparente. Bo para quen non queira gastar. |
| iPad, Android, ordenador | **Sketchbook** | gratis | Sinxelo, abre PSD, exporta PNG. |
| Calquera navegador (tamén iPad) | **Photopea** (photopea.com) | gratis na web | É un Photoshop no navegador: abre o PSD tal cual, exporta capas (*File → Export layers*). Ideal para quen non queira instalar nada. |
| Ordenador (Windows, Mac, Linux) | **Krita** | gratis | Abre PSD; *Ficheiro → Exportar capas* saca os PNG. |
| Ordenador | **GIMP** | gratis | Abre PSD; hai que exportar capa a capa (ou co complemento *Export Layers*). |
| Ordenador | **Photoshop** | subscrición | *Ficheiro → Exportar → Capas a ficheiros*. |

Para debuxar co dedo no móbil, ibis Paint X ou Sketchbook; pero un lenzo de 1200 × 2080 no móbil é incómodo: mellor tableta.

## 1 bis. Preparar o lenzo a man (se non usas os PSD)

1. **Importa a plantilla** como imaxe nova: o lenzo queda exactamente do tamaño correcto (800 × 960 ou 1200 × 2080). Non recortes, non xires, non cambies o tamaño do lenzo nunca.
2. **A plantilla queda como capa de abaixo**, bloqueada, cunha opacidade do 30–50 %. É só unha guía: **non se exporta**.
3. **Crea unha capa nova por cada peza** que vaias debuxar (por exemplo «ollos-01», «ollos-02», «nariz-01»). Debuxa cada peza na súa capa, no lugar que lle toca segundo as liñas azuis.
4. Cando exportes, **agocha todas as capas menos a da peza** (e a plantilla) e exporta como **PNG con fondo transparente**, ao tamaño do lenzo, sen recortar ao contido.
   - Procreate: Accións → Compartir → PNG (a transparencia consérvase se a capa de fondo está oculta ou o «Cor de fondo» desactivado).
5. Nome do ficheiro segundo o apartado 5. Un ficheiro = unha peza.

> **Sobre papel:** escanea ou fotografa en boa luz, importa a foto, pon a plantilla enriba a 40 % de opacidade, axusta o debuxo ata que cadre coas liñas, limpa o fondo (Selección de cor → borrar) e exporta como PNG transparente. Vale, pero o trazo directo no iPad é máis limpo.

---

## 2. Estilo: as regras que fan que todas as pezas casen entre elas

Estas regras son as que permiten que pezas de persoas distintas se mesturen sen que cante.

1. **Trazo:** liña negra (`#241a12`, un negro cálido) de **grosor uniforme**: 10–12 px na cabeza, 12–14 px no corpo. Sen pinceis con textura, sen presión variable exaxerada. Estilo cómic limpo, coma o das figuras actuais da app.
2. **Cor: nada de cor.** As pezas debúxanse en **branco, grises e negro**. A app pon a cor despois multiplicándoa sobre o gris: o branco puro (`#ffffff`) toma a cor escollida; os grises claros (`#c8c8c8`) fan a sombra; o negro queda negro. Así un mesmo pelo serve para louros, morenos e verdes, e unha mesma túnica para todas as cores.
   - Pel, pelo, roupa, capa, pernas: **branco** con sombras en gris claro.
   - Ollos: o branco do ollo en branco; o iris en gris medio (`#9a9a9a`) para que se poida colorear; a pupila e o brillo en negro e branco.
   - Metal (armas, armaduras, grebas): gris medio con brillos brancos. Non se recolorea.
   - Coiro, madeira, cordas: gris escuro (`#6a6a6a`). Non se recolorean.
3. **Sombra:** só unha sombra plana en gris claro, sen degradados, sen esfumar. Luz dende arriba á esquerda.
4. **Sen fondo:** todo o que non sexa a peza queda transparente. Nada de cadrados brancos por detrás.
5. **Pechar as formas:** cada peza é un recorte que se coloca sobre outra. O rostro tapa o pelo de atrás; o pelo de diante tapa a fronte. Por iso hai que pintar o **recheo branco completo** debaixo do trazo, non só a liña: un pelo que sexa só liñas deixaría ver a fronte a través.
6. **Marxe:** deixa 20 px libres arredor do lenzo. Fóra iso, o pelo e as armas poden saír da cabeza e do corpo canto queiran.

---

## 3. O lenzo da cabeza (800 × 960)

Liñas guía da plantilla, con coordenadas por se alguén traballa con regra:

| Guía | Posición | Uso |
|---|---|---|
| Eixo central | x = 400 | Simetría do rostro |
| Liña das cellas | y = 345 | Centro das cellas |
| Liña dos ollos | y = 400 | Centro dos ollos; ollo esquerdo en x = 312, dereito en x = 488 |
| Punta do nariz | y = 490 | Onde remata o nariz |
| Liña da boca | y = 550 | Centro da boca |
| Queixelo | y = 660 | Base do rostro ovalado de referencia |
| Orellas | y = 416, x = 216 e x = 584 | Centro das orellas; as élficas soben ata y ≈ 336 |
| Zona do pelo | caixa punteada de arriba | O pelo pode saír por riba e polos lados |
| Pescozo | de x = 344 a 456, de y = 600 abaixo | A app pon o pescozo; non o debuxes |

O rostro gris da plantilla é o **rostro ovalado estándar**. Os outros rostros (redondo, cadrado, alongado, corazón, ancho) débense debuxar de xeito que os ollos, o nariz e a boca sigan caendo nas mesmas liñas: cambia o contorno, non a posición dos trazos.

### Pezas da cabeza, por orde de apilado (de atrás a diante)

| Orde | Categoría | Ficheiros | Cantas fan falta | Que debuxar |
|---|---|---|---|---|
| 1 | Pelo de atrás | `pelo-atras-NN.png` | unha por peiteado que caia por detrás (melena, longo, trenzas, coleta, rizos): 5 | A parte do pelo que queda **detrás** do rostro e das orellas: melena ata os ombreiros, coleta, trenzas caendo. Recheo branco completo. |
| 2 | Orellas | `orellas-NN.png` | 5: humanas, élficas (longas), élficas curtas (gnomo, mediano), redondas grandes (orco, goliat), con pendente non (o pendente é accesorio) | As dúas orellas, centradas en x = 216 e x = 584, y = 416. |
| 3 | Rostro | `rostro-NN.png` | 6: ovalado, redondo, cadrado, alongado, corazón, ancho | O contorno pechado da cara, **con recheo branco**, sen trazos interiores. Inclúe a base do pescozo ata y = 640. |
| 4 | Trazos de especie | `especie-NN.png` | 6: escamas de draconato (sobre o rostro), fociño de draconato, colmillos de orco, marcas de goliat, halo de aasimar, «nada» non fai falta | Só o que se pinta **sobre** o rostro. Os cornos van á categoría 11. |
| 5 | Ollos | `ollos-NN.png` | mínimo 6: grandes, amendoados, pequenos, cansos, pechados, ferozes; os que queiras máis (con lentes non: é accesorio) | Os dous ollos, centrados en x = 312 e x = 488, y = 400. Branco do ollo en branco, iris en gris medio, pupila negra, brillo branco. |
| 6 | Cellas | `cellas-NN.png` | 5: finas, grosas, arqueadas, fruncidas, unha soa (unicella) | As dúas cellas na liña y = 345. Recheo branco (toman a cor do pelo). |
| 7 | Nariz | `nariz-NN.png` | 6: pequeno, recto, ancho, de bola, de aguia, de fociño | Só o nariz, entre y = 400 e y = 490, centrado en x = 400. Liña e, se acaso, sombra gris. |
| 8 | Boca | `boca-NN.png` | 7: sorriso, seria, risa aberta, torta, con dentes, enfadada, sorpresa | Centrada en x = 400, y = 550. Interior da boca en gris escuro, dentes brancos. |
| 9 | Barba | `barba-NN.png` | 6: bigote, perilla, curta, longa, trenzada, patillas | Recheo branco (toma a cor do pelo). A barba longa pode baixar ata y = 900. |
| 10 | Pelo de diante | `pelo-diante-NN.png` | mínimo 9: curto, melena, longo, rizos, crista, trenzas, moño, coleta, raspado; canto máis mellor | A parte do pelo que queda **diante**: flequillo, coroa, laterais que tapan as orellas. Recheo branco. O calvo non se debuxa. |
| 11 | Cornos e apéndices | `cornos-NN.png` | 4: cornos de tiflin curvos, cornos rectos, cornos de draconato, antenas ou cristas | Van **por riba do pelo**. Gris medio (non se recolorean) ou branco se queres que tomen a cor da pel. |
| 12 | Accesorios | `acc-NN.png` | 8: lentes redondas, lentes cadradas, pendente, cicatriz, parche, diadema, tatuaxe, monóculo | A capa de máis arriba. |

**Total mínimo da cabeza: unhas 70 pezas.** Non ten por que facelas a mesma persoa nin de golpe: cada peza que chegue engádese á colección.

---

### Rangos por elemento (ver as imaxes de `guias-por-elemento/`)

Cada guía leva tres zonas: **azul** = mínimo, **verde** = recomendado, **laranxa** = máximo, e unha liña **vermella** que non se pode pasar. Resumo en números (todo en píxeles do lenzo de 800 × 960):

| Elemento | Mínimo | Recomendado | Máximo | Non pasar |
|---|---|---|---|---|
| Rostro | 320 de ancho | 320 de ancho, queixelo en y=660 | 460 de ancho, queixelo ata y=720, fronte dende y=150 | Nunca máis estreito ca a liña x=250–550 (os ollos teñen que caber) |
| Ollos (cada un) | 60×30 | 110×70 | 150×100 | Centro fixo en x=312 / x=488, y=400 |
| Cellas (cada unha) | — | 140×50 en y=345 | 170×95 | Non baixar de y=395 |
| Nariz | 30×60 | 70×100, punta en y=490 | 130×130 (fociños) | Eixo en x=400 |
| Boca | 80×25 | 160×65 en y=550 | 220×110 | Non subir de y=500 |
| Orellas | — | 80×100 en (216, 416) e (584, 416) | 140×200 (élficas ata y=300) | — |
| Barba | — | 320×160 baixo a boca | ata y=900 | Non tapa a boca |
| Pelo de diante | — | coroa e flequillo, y=120–330 | todo o lenzo | Tapar a fronte polo menos ata y=290 |
| Pelo de atrás | — | y=140–640 | todo o lenzo | — |
| Cornos | — | dous recadros de 180×260 sobre as sens | y=20–320 | — |
| Accesorios | — | banda dos ollos | y=200–700 | — |

**Ollos xuntos ou separados, e o tamaño:** non se debuxan variantes. Cada ollo debúxase centrado na súa cruz, e a app permitirá moverllos ao xogador ata ±30 px cara ao centro ou cara a fóra, e escalalos entre o 80 % e o 120 %. O mesmo axuste terán as cellas (van coa posición dos ollos), a boca (±15 px) e o nariz (escala). Así, unha soa colección de trazos dá caras moi distintas.

## 4. O lenzo do corpo (1200 × 2080)

> **Corrección (19 de setembro):** nas primeiras guías dicía que o brazo de diante era o da esquerda do lenzo. É ao revés: o brazo de diante (o que leva a arma) é o da **dereita** do lenzo, e o de atrás (escudo) o da esquerda. O maniquí gris das plantillas estaba ben; só o texto e o círculo vermello da man estaban cambiados de lado. A ferramenta de debuxo da app xa o amosa correctamente.

Hai **seis plantillas de corpo, unha por postura**: `pe` (de pé), `garda` (en garda), `saudo` (saudando), `cruzados` (brazos cruzados), `conxuro` (conxurando), `camino` (camiñando). O maniquí gris de cada unha marca onde van os brazos e as pernas nesa postura.

Liñas guía (iguais nas seis):

| Guía | y | Uso |
|---|---|---|
| Pescozo | 624 | Onde a app pega a cabeza. **Non debuxes a cabeza nin o pescozo** no corpo. |
| Ombreiros | 680 | Liña dos ombreiros |
| Cintura | 960 | |
| Cadeira | 1280 | Onde empezan as pernas |
| Xeonllos | 1620 | |
| Chan | 1960 | Os pés apoian aquí |
| Eixo central | x = 600 | |

O maniquí é o **corpo atlético**. A app escala a figura para os outros cinco tipos de corpo (delgado, robusto, ancho, miúdo, xigante) e para as especies (ananos baixos e anchos, goliats altos). **Non fai falta debuxar por tipo de corpo:** só o atlético.

### Pezas do corpo, por orde de apilado

| Orde | Categoría | Ficheiros | Cantas | Que debuxar |
|---|---|---|---|---|
| 1 | Capa | `capa-NN.png` | 3: curta, longa, con capucha (a capucha cae detrás da cabeza) | Vai **detrás** de todo. Recheo branco. Debúxase só na postura `pe`; a app úsaa en todas. |
| 2 | Brazo de atrás | `brazo-atras-<postura>-NN.png` | 6 (unha por postura), en manga longa branca; opcional: 6 máis en manga curta con pel | O brazo **esquerdo do personaxe**, que visto de fronte queda á **esquerda do lenzo**, tal como está no maniquí desa postura, con man. É o que leva o escudo. |
| 3 | Pernas | `pernas-<pe\|camino>-NN.png` | 2 posturas × 4 tipos (pantalóns, saia, grebas, curtos) = 8 | Dende a cadeira ata o nocello. As pernas de `pe` valen tamén para garda, saudo, cruzados e conxuro. Grebas en gris (metal). |
| 4 | Calzado | `calzado-<pe\|camino>-NN.png` | 2 × 4 (botas, botas altas, sandalias, descalzo) = 8 | Só os pés, apoiados na liña do chan. Gris escuro (coiro) ou branco se queres que tome cor. |
| 5 | Roupa | `roupa-NN.png` | mínimo 10: placas, mallas, coiro, túnica longa, traxe de bardo, peles, monxe, capa de follas, sacra, camisa. Máis: vestidos, armaduras de escamas, uniformes… | O torso, dos ombreiros á cadeira (ou ata o chan se é túnica). Sen brazos: os brazos van á parte. Branco onde se recolorea; gris para metal. Debúxase só sobre `pe`. |
| 6 | Cinto e bolsas | `cinto-NN.png` | 3–4 | Opcional. Sobre a roupa, na cintura. |
| 7 | Brazo de diante | `brazo-diante-<postura>-NN.png` | 6, como o de atrás | O brazo **dereito do personaxe**, que visto de fronte queda á **dereita do lenzo**, con man. É o que leva a arma. Nas posturas `garda` e `saudo` a man vai aberta arriba; en `conxuro`, aberta cara adiante. |
| 8 | Arma | `arma-<nome>.png` | as que queiras: espada, machado, martelo, daga, lanza, bastón, arco, libro, laúde, tridente, guadaña… | **Debúxase agarrada pola man de diante da postura `garda`** (arma en alto) e, se podes, tamén na de `pe` (arma baixa): `arma-espada-garda.png`, `arma-espada-pe.png`. En gris (metal) e gris escuro (madeira). |
| 9 | Escudo | `escudo-NN.png` | 3: redondo, de cometa, de torre | No brazo de atrás, postura `garda`: `escudo-redondo-garda.png`; e en `pe`. |
| 10 | Efectos | `efecto-NN.png` | 3–4: luz nas mans (conxuro), fume, lapas, néboa | A capa de arriba de todo. |

**Total mínimo do corpo: unhas 65 pezas.**

Rangos do corpo (píxeles do lenzo de 1200 × 2080; ver `guias-por-elemento/g-12` a `g-17`):

| Elemento | Recomendado | Máximo |
|---|---|---|
| Roupa (torso) | x=380–820, y=600–1260; ombreiros de 360 de ancho | x=300–900, ata o chan (túnicas) |
| Pernas | x=430–770, y=1220–1900 | x=300–900 (saias e faldróns) |
| Calzado | x=400–800, y=1780–1990, apoiado en y=1960 | ata o xeonllo (y=1600) |
| Brazos | seguir o maniquí da postura; ombreiro en y=680. Diante = dereita do lenzo (arma); atrás = esquerda (escudo) | y=300–1600 |
| Capa | x=300–900, y=600–1960 | x=150–1050, capucha ata y=500 |
| Arma | agarrada na man de diante de «garda», en (864, 560); en «pe», en (792, 1280) | x=500–1180, y=100–1500 |

---

### Como cadran as pezas do corpo ao montar
Todas as pezas do corpo debúxanse sobre o **mesmo maniquí atlético humano** (o das plantillas e o da ferramenta de debuxo da app, que son o mesmo debuxo). A app monta o personaxe así: pon as pezas no lenzo tal cal, sen movelas; escálaas cos mesmos factores co que escala o maniquí para cada tipo de corpo e especie (o ancho arredor do eixo central, a altura arredor do chan); e pega a cabeza exactamente na posición que ten no debuxo automático. Por iso a regra é unha soa: **non recentres nin escales a peza: debúxaa onde está o maniquí**. Se a peza depende da postura (brazos, arma, escudo), debúxaa sobre a plantilla desa postura.

## 5. Nomes de ficheiro e carpetas

Todo en minúsculas, sen acentos nin espazos, gardado en carpetas. Este é o esquema que a app vai ler:

```
paquete-<nome-do-paquete>/
  paquete.json                  ← ficha do paquete (ver abaixo)
  cabeza/
    rostro-01.png … rostro-06.png
    orellas-01.png …
    ollos-01.png …
    cellas-01.png …
    nariz-01.png …
    boca-01.png …
    barba-01.png …
    pelo-atras-01.png …
    pelo-diante-01.png …
    especie-escamas.png  especie-focino.png  especie-colmillos.png  especie-marcas.png  especie-halo.png
    cornos-01.png …
    acc-01.png …
  corpo/
    capa-01.png …
    pernas-pe-01.png … pernas-camino-01.png …
    calzado-pe-01.png … calzado-camino-01.png …
    roupa-01.png …
    cinto-01.png …
    brazo-atras-pe-01.png  brazo-atras-garda-01.png  brazo-atras-saudo-01.png  brazo-atras-cruzados-01.png  brazo-atras-conxuro-01.png  brazo-atras-camino-01.png
    brazo-diante-pe-01.png  … (as seis posturas)
    arma-espada-garda.png  arma-espada-pe.png  arma-arco-garda.png …
    escudo-redondo-garda.png  escudo-redondo-pe.png …
    efecto-luz.png …
```

`paquete.json` é un ficheiro de texto pequeno que describe o paquete e pon nome ás pezas para que aparezan bonitos nos botóns:

```json
{
  "nome": "Trazos da Compaña",
  "autores": ["Iria", "Brais"],
  "estilo": "tinta e recheo",
  "pezas": {
    "cabeza/ollos-01.png": "Ollos grandes",
    "cabeza/ollos-02.png": "Ollos pícaros",
    "corpo/roupa-01.png": "Armadura de placas",
    "corpo/arma-espada-garda.png": "Espada longa"
  },
  "recolorear": {
    "cabeza/rostro-*": "pel",
    "cabeza/pelo-*": "pelo",
    "cabeza/cellas-*": "pelo",
    "cabeza/barba-*": "pelo",
    "corpo/roupa-*": "roupa",
    "corpo/capa-*": "capa",
    "corpo/pernas-*": "pernas",
    "corpo/brazo-*": "roupa"
  }
}
```

Se non escribes o `paquete.json`, a app usa o nome do ficheiro como etiqueta («ollos 01») e aplica as regras de cor por defecto (as da táboa anterior). Non é obrigatorio.

---

## 6. Lista de comprobación antes de entregar unha peza

- [ ] O lenzo mide exactamente 800 × 960 (cabeza) ou 1200 × 2080 (corpo).
- [ ] PNG con fondo transparente; sen a plantilla, sen cadrado branco.
- [ ] Só branco, grises e negro. Nada de cor.
- [ ] Recheo branco completo debaixo do trazo (a peza tapa o que ten detrás).
- [ ] O trazo é negro cálido, grosor uniforme (10–12 px cabeza, 12–14 px corpo).
- [ ] A peza está no seu sitio segundo as liñas azuis (ollos na liña dos ollos, pés no chan…).
- [ ] O nome do ficheiro segue o esquema do apartado 5.
- [ ] Para armas, escudos e brazos: o nome leva a postura.

---

## 7. Preguntas que van saír

**Pódese debuxar con outro estilo, máis realista ou con sombreado?** Pódese, pero as pezas dun estilo non casan coas doutro. O mellor é que cada paquete teña un estilo e que se mesturen paquetes distintos coa mesma regra de trazo. Se un grupo quere sombreado, que o faga todo o grupo.

**E se quero que unha peza teña unha cor fixa (unha xoia vermella)?** Píntaa en cor. Só o branco e os grises se recolorean; o que xa teña cor queda como está. Podes mesturar: capa branca (recoloreable) con broche dourado (fixo).

**Fai falta debuxar as seis posturas de todo?** Non. O que depende da postura son só os brazos, as armas, os escudos, e as pernas para camiñar. O resto (roupa, capa, calzado de pé, cabeza enteira) debúxase unha vez.

**Cantas pezas fan falta para empezar?** Con 1 rostro, 1 orellas, 3 ollos, 2 cellas, 2 narices, 3 bocas, 3 pelos de diante, 2 pernas, 2 calzados, 3 roupas e os brazos de `pe` xa se poden facer personaxes. Todo o demais son variantes.

**E os monstros?** Mesma idea, noutro lenzo. Cando isto funcione cos heroes, faise un lenzo para criaturas.

---

## 8. Que fai falta na app (pendente)

Para usar estes paquetes, a app precisa un **importador**: escoller a carpeta ou os ficheiros PNG, gardalos no dispositivo (IndexedDB, coma os mapas e os PDF), e un selector de estilo no creador: *Cómic (debuxado pola app)* ou *Paquete: Trazos da Compaña*. As pezas colócanse en (0,0) a tamaño completo do lenzo e recoloréanse con `multiply`. Esa é a seguinte tarefa do proxecto.
