# Pedir a ChatGPT as pezas de corpo do Libro de Heroes

O corpo é máis esixente ca a cabeza: as pezas teñen que casar cun maniquí e, no caso dos brazos, coa postura. A app monta todo sobre o **maniquí atlético humano** e escala o conxunto para as outras especies e corpos, así que ChatGPT só ten que debuxar para un corpo: o do maniquí.

## Que lle adxuntas a ChatGPT
Na carpeta `maniquis/`:
- `maniqui-zonas.png`: o maniquí de pé coas zonas de cada peza e as liñas do pescozo e do chan. **Adxúntao sempre.**
- `maniqui-pe.png`, `maniqui-garda.png`, `maniqui-saudo.png`, `maniqui-cruzados.png`, `maniqui-conxuro.png`, `maniqui-camino.png`: as seis posturas. Adxunta o da postura que pidas cando sexan brazos, armas ou escudos.
- `maniquis-6-posturas.png`: as seis xuntas, por se quere velas de vez.

## Regras (pídeas literalmente)
1. **Fondo transparente** (PNG con alfa). Se non pode, branco puro. Nada de dameros nin caixas.
2. **O maniquí é só referencia: non aparece no resultado.** Só a peza.
3. **Sen números nin textos** dentro da imaxe.
4. **Grella de 4 × 2**, unha peza por cela, todas coa **mesma escala** que o maniquí de referencia e **na mesma posición dentro da cela** (o maniquí ocupa o 94 % da altura da cela, centrado). Isto é o máis importante: se cambia a escala entre pezas, non casan.
5. **Vista de fronte**, luz de arriba á esquerda, sen sombra no chan.
6. **Sen cabeza nin pescozo** (a app pon a cabeza). O torso empeza xusto baixo a liña do pescozo.
7. **Estilo**: cómic europeo de liña clara, trazo negro limpo e uniforme, cores planas cunha soa sombra e unha luz, sen degradados nin texturas. O mesmo texto en todos os pedidos.
8. Se queres que a app poida **cambiar a cor** dunha roupa: en **branco e grises** (a app tíngue). Se queres cores fixas (dourados, coiro, metal): a cor.

## Que pedir, por orde de utilidade
| Orde | Categoría | Postura | Que é a peza | Nome do ficheiro |
|---|---|---|---|---|
| 1 | Roupa (torso) | de pé | Do ombreiro á cadeira, **sen brazos** (van á parte), sen cabeza. Túnicas longas poden chegar ao chan. | `roupa-01.png` … |
| 2 | Pernas | de pé e camiñando | Da cadeira ao nocello, as dúas pernas, con pantalón, saia, grebas ou nu. | `pernas-pe-01.png`, `pernas-camino-01.png` |
| 3 | Calzado | de pé e camiñando | Só os pés, apoiados na liña do chan. | `calzado-pe-01.png`, `calzado-camino-01.png` |
| 4 | Brazo de diante | as seis | O brazo **dereito do personaxe** (á **dereita** do lenzo), coa man, na postura do maniquí adxunto. Con manga (a cor da roupa se é en grises) ou nu. | `brazo-diante-pe-01.png`, `brazo-diante-garda-01.png` … |
| 5 | Brazo de atrás | as seis | O brazo esquerdo do personaxe (á esquerda do lenzo), coa man. | `brazo-atras-pe-01.png` … |
| 6 | Capa | de pé | Detrás do corpo, dos ombreiros ao chan; a capucha, se a hai, sobe detrás da cabeza. | `capa-01.png` … |
| 7 | Arma | de pé e en garda | Agarrada pola man de diante do maniquí desa postura. Nome da arma no ficheiro. | `arma-espada-pe.png`, `arma-espada-garda.png`, `arma-arco-garda.png` … |
| 8 | Escudo | de pé e en garda | No brazo de atrás do maniquí desa postura. | `escudo-redondo-pe.png`, `escudo-cometa-garda.png` … |
| 9 | Cinto e bolsas | de pé | Sobre a roupa, na cintura. | `cinto-01.png` … |
| 10 | Efectos | de pé, conxurando | Luz nas mans, fume, lapas. | `efecto-01.png` … |

Con roupa, pernas, calzado e os dous brazos «de pé» xa se pode montar un corpo enteiro. O resto son variantes.

## Prompts modelo

**Roupa (torso):**
> Adxunto un maniquí de referencia. Folla de pezas para un creador de personaxes: grella de 4 × 2, fondo transparente PNG, sen números nin texto. Cada peza é **só o torso vestido** dun personaxe, visto de fronte, **sen cabeza, sen pescozo e sen brazos**, do ombreiro á cadeira, exactamente na posición e escala do maniquí adxunto (o maniquí non aparece). Oito variantes: armadura de placas, cota de mallas, coiro de explorador, túnica de mago longa ata o chan, traxe de bardo, peles de bárbaro, roupa de monxe, vestimenta sacra. Estilo: cómic europeo de liña clara, trazo negro limpo e uniforme, cores planas cunha soa sombra e unha luz, sen degradados nin texturas. Luz de arriba á esquerda.

**Brazos (unha postura por folla):**
> Adxunto o maniquí na postura «en garda». Folla 4 × 2, fondo transparente, sen texto. Cada peza é **só o brazo dereito do personaxe** (o que queda á dereita da imaxe, o que ergue a arma), coa man, exactamente na posición e escala do brazo do maniquí adxunto, sen o resto do corpo. Oito variantes de manga: armadura de placas, mallas, coiro, túnica ampla, camisa, peles, brazo nu, manga de bardo. Estilo: [o mesmo]. A man queda **aberta**, coma no maniquí, para poder poñerlle unha arma despois.

**Pernas:**
> Adxunto o maniquí de pé. Folla 4 × 2, fondo transparente, sen texto. Cada peza son **só as dúas pernas**, da cadeira ao nocello, sen pés, sen torso, na posición e escala do maniquí. Oito variantes: pantalón de tea, pantalón de coiro, grebas de metal, saia longa, faldón de armadura, pernas nuas, calzas con vendas, pantalón curto. Estilo: [o mesmo].

**Armas:**
> Adxunto o maniquí «en garda». Folla 4 × 2, fondo transparente, sen texto. Cada peza é **só unha arma**, colocada como se a agarrase a man dereita do maniquí (a que está erguida), sen debuxar a man nin o corpo. Oito armas: espada longa, machado, martelo de guerra, daga, lanza, bastón de mago, arco (coa frecha), laúde. Estilo: [o mesmo]. Metal en gris con brillos, madeira en marrón.

Para pernas e calzado «camiñando», e para brazos noutras posturas, cambia o maniquí adxunto e a palabra da postura.

## Como mo pasas e que fago eu
Pásame as follas tal como as garde ChatGPT (non fai falta recortalas) e dime a categoría e a postura de cada unha. Eu recórtoas, quítolles o fondo, alíñoas ao maniquí polas marcas (ombreiros, cadeira, chan, man) e engádoas ao paquete co nome correcto. Despois, no editor do retrato, o bloque «Corpo debuxado a man» xa as amosa por categoría e postura.

## Comprobación rápida antes de mandarmas
- As oito pezas dunha folla teñen a mesma escala? (o torso non debe medrar dunha cela a outra)
- O fondo é transparente (se o abres nun visor, non hai cadro branco)?
- Non aparece o maniquí nin ningún número?
- Nos brazos: é o brazo correcto (diante = dereita da imaxe) e na postura pedida?
