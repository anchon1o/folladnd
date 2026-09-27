/* ================= RETRATOS POR CAPAS ================= */
const AV={
 body:[['delgado','Delgado',.85,.8],['atletico','Atlético',1,1],['robusto','Robusto',1.15,1.1],['ancho','Ancho',1.3,1.2],['miudo','Miúdo',.75,.75],['xigante','Xigante',1.45,1.3]],
 shape:[['oval','Ovalada'],['redonda','Redonda'],['cadrada','Cadrada'],['longa','Alongada'],['corazon','Corazón'],['ancha','Ancha']],
 skin:['#f8dcc4','#f0c9a6','#e2b48c','#cf9a6f','#b57b4e','#8f5a35','#6b3f24','#452818','#7fa35a','#b8503c','#7a5595','#8d9296','#6c8fb3','#d9c6a0'],
 eyes:[['grandes','Grandes'],['amendoados','Amendoados'],['pequenos','Pequenos'],['cansos','Cansos'],['pechados','Pechados']],
 eyeColor:['#4a2f1a','#2c5a2e','#2f5b8a','#7a7f85','#b8891f','#8a2a2a','#c9a13a'],
 brows:[['finas','Finas'],['grosas','Grosas'],['arqueadas','Arqueadas'],['fruncidas','Fruncidas']],
 nose:[['pequeno','Pequeno'],['recto','Recto'],['ancho','Ancho'],['bola','De bola'],['aguia','De aguia']],
 mouth:[['sorriso','Sorriso'],['serio','Serio'],['risa','Risa'],['torto','Torto'],['dentes','Dentes']],
 beard:[['ningunha','Sen barba'],['bigote','Bigote'],['perilla','Perilla'],['curta','Curta'],['longa','Longa'],['trenzada','Trenzada']],
 hair:[['curto','Curto'],['melena','Melena'],['longo','Longo'],['rizos','Rizos'],['crista','Crista'],['trenzas','Trenzas'],['mono','Moño'],['coleta','Coleta'],['calvo','Calvo']],
 hairColor:['#1b1512','#4a2c17','#8a5a2b','#c98a3d','#e6c46a','#f2e6c8','#b5b5b5','#a83a2a','#3d6b3a','#3a4c8c','#8a3d8c','#e07aa0'],
 outfit:[['placas','Armadura de placas'],['mallas','Cota de mallas'],['coiro','Coiro'],['tunica','Túnica de mago'],['traxe','Traxe de bardo'],['peles','Peles'],['gi','Roupa de monxe'],['follas','Capa de follas'],['sotana','Vestimenta sacra'],['camisa','Camisa sinxela']],
 outfitColor:['#6b1a17','#2f5b8a','#2c5a2e','#7a5595','#b07a2a','#3a3a3a','#8d9296','#c9a13a','#5a3a22','#d8c7a8'],
 acc:[['ningun','Nada'],['lentes','Lentes'],['pendente','Pendente'],['cicatriz','Cicatriz'],['parche','Parche'],['diadema','Diadema'],['tatuaxe','Tatuaxe']],
 bg:[['pergameo','Pergameo'],['pedra','Pedra'],['bosque','Bosque'],['noite','Noite'],['lume','Lume'],['mar','Mar']],
 pose:[['pe','De pé'],['garda','En garda'],['saudo','Saudando'],['cruzados','Brazos cruzados'],['conxuro','Conxurando'],['camino','Camiñando']],
 weapon:[['ningunha','Sen arma'],['espada','Espada'],['machado','Machado'],['martelo','Martelo'],['daga','Daga'],['lanza','Lanza'],['baston','Bastón'],['arco','Arco'],['libro','Libro'],['laude','Laúde']],
 shield:[['non','Sen escudo'],['redondo','Escudo redondo'],['cometa','Escudo de cometa']],
 cloak:[['non','Sen capa'],['curta','Capa curta'],['longa','Capa longa'],['capucha','Con capucha']],
 cloakColor:['#6b1a17','#2f5b8a','#2c5a2e','#7a5595','#3a3a3a','#b07a2a','#d8c7a8','#111111'],
 legwear:[['pantalons','Pantalóns'],['saia','Saia'],['malla','Grebas de metal'],['curtos','Pantalóns curtos']],
 legColor:['#5a3a22','#2f3a4a','#3a3a3a','#6b1a17','#2c5a2e','#7a5595','#8d9296','#d8c7a8'],
 boots:[['botas','Botas'],['altas','Botas altas'],['sandalias','Sandalias'],['descalzo','Descalzo']]
};
const AVLAB={pose:'Postura',weapon:'Arma',shield:'Escudo',cloak:'Capa',cloakColor:'Cor da capa',legwear:'Pernas',legColor:'Cor das pernas',boots:'Calzado',body:'Corpo',shape:'Rostro',skin:'Pel',eyes:'Ollos',eyeColor:'Cor dos ollos',brows:'Cellas',nose:'Nariz',mouth:'Boca',beard:'Barba',hair:'Pelo',hairColor:'Cor do pelo',outfit:'Roupa',outfitColor:'Cor da roupa',acc:'Accesorio',bg:'Fondo'};
const pick=a=>a[Math.floor(Math.random()*a.length)];
function avRandom(species,cls){
 const A={};for(const k in AV){const v=pick(AV[k]);A[k]=Array.isArray(v)?v[0]:v}
 A.species=species||'Humano';
 const sk={Orco:'#7fa35a',Tiflin:pick(['#b8503c','#7a5595']),Goliat:'#8d9296',Draconato:pick(['#b8503c','#2c5a2e','#2f5b8a','#d9c6a0','#3a3a3a']),Aasimar:'#f8dcc4'}[A.species];if(sk)A.skin=sk;
 if(A.species==='Anano'&&Math.random()<.7)A.beard=pick(['longa','trenzada','curta']);
 if(A.species==='Draconato'){A.hair='calvo';A.beard='ningunha'}
 const wp={'Guerreiro':'espada','Paladín':'martelo','Clérigo':'martelo','Pícaro':'daga','Explorador':'arco','Mago':'baston','Feiticeiro':'ningunha','Bruxo':'libro','Bardo':'laude','Bárbaro':'machado','Monxe':'ningunha','Druida':'baston'}[cls];if(wp)A.weapon=wp;
 A.shield=['Guerreiro','Paladín','Clérigo'].includes(cls)?'cometa':'non';if(['Mago','Bruxo','Feiticeiro','Clérigo','Druida'].includes(cls))A.legwear='saia';
 const oc={'Guerreiro':'placas','Paladín':'placas','Clérigo':'sotana','Pícaro':'coiro','Explorador':'coiro','Mago':'tunica','Feiticeiro':'tunica','Bruxo':'tunica','Bardo':'traxe','Bárbaro':'peles','Monxe':'gi','Druida':'follas'}[cls];if(oc)A.outfit=oc;
 return A;
}
function avatarSVG(A,opts={}){
 const I='#241a12',sw=2.6,skin=A.skin,hair=A.hairColor,dark=c=>shade(c,-.18),light=c=>shade(c,.18);
 const bt=AV.body.find(b=>b[0]===A.body)||AV.body[1],shW=bt[2],nk=bt[3];
 const sp=A.species||'Humano';
 let s='';
 // fondo
 const BG={pergameo:`<rect width="200" height="240" fill="#ecdcb5"/><rect width="200" height="240" fill="url(#vig)"/>`,
  pedra:`<rect width="200" height="240" fill="#9a968f"/>${[0,40,80,120,160,200].map((y,i)=>`<g stroke="#6f6b64" stroke-width="2" fill="none"><path d="M0 ${y}h200"/>${[0,1,2,3].map(j=>`<path d="M${(j*60+(i%2)*30)%220} ${y}v40"/>`).join('')}</g>`).join('')}`,
  bosque:`<rect width="200" height="240" fill="#6e8f5a"/><g fill="#3d5c33">${[10,50,95,140,180].map((x,i)=>`<path d="M${x} 240 L${x-26} 240 L${x-4} ${120+i*7} L${x+18} 240Z"/>`).join('')}</g>`,
  noite:`<rect width="200" height="240" fill="#1d2440"/>${Array.from({length:22},(_,i)=>`<circle cx="${(i*47)%200}" cy="${(i*83)%230}" r="${1+i%2}" fill="#f3e7b8"/>`).join('')}<circle cx="160" cy="40" r="18" fill="#f3e7b8"/>`,
  lume:`<rect width="200" height="240" fill="#3a1408"/><path d="M0 240 C30 150 50 170 70 120 C80 170 110 130 120 100 C130 160 160 150 200 240Z" fill="#c9481f"/><path d="M40 240 C60 190 80 200 100 160 C110 200 140 190 160 240Z" fill="#f0a52a"/>`,
  mar:`<rect width="200" height="240" fill="#7fb2c9"/><rect y="140" width="200" height="100" fill="#2f6b8a"/>${[150,170,190,210].map(y=>`<path d="M0 ${y} q20 -8 40 0 t40 0 t40 0 t40 0 t40 0" stroke="#a9d3e6" stroke-width="3" fill="none"/>`).join('')}`};
 if(!opts.headOnly){s+=`<defs><radialGradient id="vig" cx="50%" cy="40%" r="70%"><stop offset="60%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#5a3a14" stop-opacity=".45"/></radialGradient></defs>`;
 s+=BG[A.bg]||BG.pergameo;}
 if(sp==='Aasimar')s+=`<circle cx="100" cy="100" r="66" fill="none" stroke="#ffe27a" stroke-width="6" opacity=".9"/><circle cx="100" cy="100" r="66" fill="none" stroke="#fff6cc" stroke-width="2"/>`;
 // roupa (ombreiros)
 const oc=A.outfitColor,w=70*shW;
 const torso=`M${100-w} 240 C${100-w} 190 ${100-w*.55} 172 ${100-24*nk} 166 L${100+24*nk} 166 C${100+w*.55} 172 ${100+w} 190 ${100+w} 240Z`;
 const OUT={
  placas:`<path d="${torso}" fill="#9aa1a8" stroke="${I}" stroke-width="${sw}"/><path d="M${100-w} 240 C${100-w} 195 ${100-w*.7} 178 ${100-30*nk} 172 L${100-26*nk} 240Z" fill="#6f767d"/><path d="M${100+w} 240 C${100+w} 195 ${100+w*.7} 178 ${100+30*nk} 172 L${100+26*nk} 240Z" fill="#6f767d"/><path d="M${100-w+4} 200 q${w*.5} -30 ${w-8} 0" fill="none" stroke="${I}" stroke-width="2"/><path d="M${100-28*nk} 172 L100 190 L${100+28*nk} 172" fill="none" stroke="${I}" stroke-width="2"/><rect x="88" y="196" width="24" height="24" rx="4" fill="${oc}" stroke="${I}" stroke-width="2"/>`,
  mallas:`<path d="${torso}" fill="#8a8f96" stroke="${I}" stroke-width="${sw}"/><g stroke="${I}" stroke-width="1" opacity=".5">${Array.from({length:8},(_,i)=>`<path d="M${100-w+6} ${178+i*8} q6 -4 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0"/>`).join('')}</g><path d="M${100-30*nk} 168 L100 192 L${100+30*nk} 168" fill="${oc}" stroke="${I}" stroke-width="2"/>`,
  coiro:`<path d="${torso}" fill="#7a4b2a" stroke="${I}" stroke-width="${sw}"/><path d="M${100-w*.55} 176 L${100-30*nk} 168 L100 200 L${100+30*nk} 168 L${100+w*.55} 176 L${100+w*.55} 240 L${100-w*.55} 240Z" fill="${oc}" stroke="${I}" stroke-width="2"/><path d="M100 200v40M92 210h16M92 222h16" stroke="${I}" stroke-width="2" fill="none"/><path d="M${100-w*.9} 240 L${100-24*nk} 176" stroke="${I}" stroke-width="3" fill="none"/>`,
  tunica:`<path d="${torso}" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${100-36*nk} 166 L100 215 L${100+36*nk} 166" fill="${light(oc)}" stroke="${I}" stroke-width="2"/><path d="M${100-w*.75} 240 C${100-w*.75} 205 ${100-40*nk} 175 ${100-30*nk} 166 M${100+w*.75} 240 C${100+w*.75} 205 ${100+40*nk} 175 ${100+30*nk} 166" fill="none" stroke="${I}" stroke-width="2"/><circle cx="100" cy="222" r="6" fill="#e0b84a" stroke="${I}" stroke-width="2"/>`,
  traxe:`<path d="${torso}" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${100-36*nk} 166 L${100-8} 200 L100 188 L${100+8} 200 L${100+36*nk} 166" fill="#f3e9d2" stroke="${I}" stroke-width="2"/><path d="M${100-w*.6} 240 L${100-w*.6} 190 M${100+w*.6} 240 L${100+w*.6} 190" stroke="${light(oc)}" stroke-width="6"/><circle cx="100" cy="206" r="3" fill="#e0b84a"/><circle cx="100" cy="220" r="3" fill="#e0b84a"/><circle cx="100" cy="234" r="3" fill="#e0b84a"/>`,
  peles:`<path d="${torso}" fill="#7a4b2a" stroke="${I}" stroke-width="${sw}"/><path d="M${100-w-4} 240 C${100-w} 200 ${100-w*.7} 180 ${100-24*nk} 170 l6 12 l6 -10 l6 12 l6 -10 l5 12 M${100+w+4} 240 C${100+w} 200 ${100+w*.7} 180 ${100+24*nk} 170 l-6 12 l-6 -10 l-6 12 l-6 -10 l-5 12" fill="${dark(oc)}" stroke="${I}" stroke-width="2"/><path d="M92 176 L100 236 L108 176" fill="${skin}" stroke="${I}" stroke-width="2"/>`,
  gi:`<path d="${torso}" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${100-34*nk} 166 L${100+18} 240 M${100+34*nk} 166 L${100-18} 240" stroke="${I}" stroke-width="2.4" fill="none"/><path d="M${100-34*nk} 166 L100 215 L${100+34*nk} 166 Z" fill="${skin}" stroke="${I}" stroke-width="2"/><path d="M${100-w} 236 h${2*w}" stroke="#241a12" stroke-width="5"/>`,
  follas:`<path d="${torso}" fill="#4f7a3a" stroke="${I}" stroke-width="${sw}"/>${Array.from({length:14},(_,i)=>`<path d="M${100-w+8+i*(2*w-16)/13} ${172+(i%3)*18} q8 -12 16 0 q-8 12 -16 0" fill="${i%2?oc:'#3b6b2c'}" stroke="${I}" stroke-width="1.6"/>`).join('')}`,
  sotana:`<path d="${torso}" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M90 170 L90 240 M110 170 L110 240" stroke="${light(oc)}" stroke-width="5"/><path d="M100 196v22M91 204h18" stroke="#e0b84a" stroke-width="4" stroke-linecap="round"/>`,
  camisa:`<path d="${torso}" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${100-28*nk} 166 L100 196 L${100+28*nk} 166" fill="${skin}" stroke="${I}" stroke-width="2"/><path d="M100 196v18" stroke="${I}" stroke-width="2"/>`};
 if(!opts.headOnly){s+=OUT[A.outfit]||OUT.camisa;
 s+=`<path d="M${100-14*nk} 138 L${100-15*nk} 172 L${100+15*nk} 172 L${100+14*nk} 138Z" fill="${dark(skin)}" stroke="${I}" stroke-width="${sw}"/>`;}
 // pelo por detrás
 const HB={longo:`<path d="M52 100 C40 150 46 190 60 200 L140 200 C154 190 160 150 148 100 C140 60 60 60 52 100Z" fill="${hair}" stroke="${I}" stroke-width="${sw}"/>`,
  melena:`<path d="M52 100 C42 130 48 165 62 170 L138 170 C152 165 158 130 148 100 C140 60 60 60 52 100Z" fill="${hair}" stroke="${I}" stroke-width="${sw}"/>`,
  trenzas:`<path d="M60 110 C50 150 54 185 62 205 L74 205 C70 180 72 140 78 110Z M140 110 C150 150 146 185 138 205 L126 205 C130 180 128 140 122 110Z" fill="${hair}" stroke="${I}" stroke-width="${sw}"/><path d="M62 130 l10 8 M60 150 l12 8 M62 170 l10 8 M138 130 l-10 8 M140 150 l-12 8 M138 170 l-10 8" stroke="${I}" stroke-width="2"/>`,
  coleta:`<path d="M112 70 C150 60 150 130 130 170 L124 168 C142 130 136 84 108 84Z" fill="${hair}" stroke="${I}" stroke-width="${sw}"/>`,
  rizos:`<g fill="${hair}" stroke="${I}" stroke-width="2">${[[50,110],[46,130],[52,148],[150,110],[154,130],[148,148]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12"/>`).join('')}</g>`};
 s+=HB[A.hair]||'';
 // orellas
 const ear=(x,dir)=>sp==='Elfo'||sp==='Gnomo'||sp==='Tiflin'?`<path d="M${x} 96 L${x+dir*22} 84 L${x+dir*4} 116Z" fill="${skin}" stroke="${I}" stroke-width="${sw}" stroke-linejoin="round"/>`:`<ellipse cx="${x+dir*2}" cy="104" rx="7" ry="11" fill="${skin}" stroke="${I}" stroke-width="${sw}"/>`;
 s+=ear(54,-1)+ear(146,1);
 // rostro
 const SH={oval:`<ellipse cx="100" cy="106" rx="46" ry="56"/>`,redonda:`<ellipse cx="100" cy="106" rx="52" ry="52"/>`,cadrada:`<rect x="54" y="52" width="92" height="108" rx="24"/>`,longa:`<ellipse cx="100" cy="104" rx="42" ry="62"/>`,corazon:`<path d="M100 166 C70 160 52 132 54 96 C56 60 78 48 100 48 C122 48 144 60 146 96 C148 132 130 160 100 166Z"/>`,ancha:`<ellipse cx="100" cy="108" rx="55" ry="50"/>`};
 s+=`<g fill="${skin}" stroke="${I}" stroke-width="${sw}">${SH[A.shape]||SH.oval}</g>`;
 if(sp==='Draconato')s+=`<g fill="${dark(skin)}" opacity=".55">${Array.from({length:18},(_,i)=>`<path d="M${64+(i%6)*13+(Math.floor(i/6)%2)*6} ${70+Math.floor(i/6)*14} q6 8 12 0 q-6 -4 -12 0Z"/>`).join('')}</g><path d="M78 112 C84 128 116 128 122 112 C118 134 82 134 78 112Z" fill="${dark(skin)}" stroke="${I}" stroke-width="2"/>`;
 if(sp==='Goliat')s+=`<g stroke="${dark(skin)}" stroke-width="3" fill="none"><path d="M70 80 l14 10 M126 78 l-12 12 M80 130 l10 6"/></g>`;
 // meixelas
 s+=`<ellipse cx="74" cy="118" rx="9" ry="5" fill="#e07a6a" opacity=".22"/><ellipse cx="126" cy="118" rx="9" ry="5" fill="#e07a6a" opacity=".22"/>`;
 // ollos
 const eye=(x,c)=>{const st=A.eyes;
  if(st==='pechados')return`<path d="M${x-11} 100 q11 8 22 0" fill="none" stroke="${I}" stroke-width="${sw}" stroke-linecap="round"/>`;
  const r=st==='grandes'?11:st==='pequenos'?7:9,ry=st==='amendoados'?6:st==='cansos'?6:r*.85;
  let e=`<ellipse cx="${x}" cy="100" rx="${r}" ry="${ry}" fill="#fff" stroke="${I}" stroke-width="${sw}"/><circle cx="${x}" cy="100" r="${ry*.7}" fill="${c}"/><circle cx="${x}" cy="100" r="${ry*.35}" fill="#111"/><circle cx="${x-2}" cy="97" r="${ry*.22}" fill="#fff"/>`;
  if(st==='cansos')e+=`<path d="M${x-r} 96 q${r} -6 ${2*r} 0" fill="${skin}" stroke="${I}" stroke-width="${sw}"/><path d="M${x-8} 110 q8 3 16 0" fill="none" stroke="${dark(skin)}" stroke-width="1.5"/>`;
  return e};
 s+=eye(78,A.eyeColor)+eye(122,A.eyeColor);
 // cellas
 const BR={finas:`<path d="M66 86 q12 -6 24 -1 M110 85 q12 -5 24 1" stroke="${hair}" stroke-width="3"/>`,grosas:`<path d="M65 87 q13 -8 26 -2 M109 85 q13 -6 26 2" stroke="${hair}" stroke-width="6"/>`,arqueadas:`<path d="M66 90 q12 -14 24 -2 M110 88 q12 -12 24 2" stroke="${hair}" stroke-width="3.5"/>`,fruncidas:`<path d="M66 82 q12 2 24 8 M110 90 q12 -6 24 -8" stroke="${hair}" stroke-width="5"/>`};
 s+=`<g fill="none" stroke-linecap="round">${BR[A.brows]||BR.finas}</g>`;
 // nariz
 const NO={pequeno:`<path d="M96 118 q4 4 8 0"/>`,recto:`<path d="M100 100 L96 122 q4 3 8 0"/>`,ancho:`<path d="M92 122 q8 8 16 0 M96 112 q4 -2 8 0"/>`,bola:`<circle cx="100" cy="120" r="7"/>`,aguia:`<path d="M101 98 C110 108 108 120 100 124 q-4 -2 -6 -4"/>`};
 s+=`<g fill="${A.nose==='bola'?light(skin):'none'}" stroke="${I}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${NO[A.nose]||NO.recto}</g>`;
 // boca
 const MO={sorriso:`<path d="M84 138 q16 14 32 0" fill="none"/>`,serio:`<path d="M86 140 h28" fill="none"/>`,risa:`<path d="M82 136 q18 22 36 0Z" fill="#6b1a17"/><path d="M86 137 q14 6 28 0" fill="#fff" stroke="none"/>`,torto:`<path d="M84 140 q14 6 30 -6" fill="none"/>`,dentes:`<path d="M82 136 q18 16 36 0Z" fill="#fff"/><path d="M90 137v6 M100 139v7 M110 137v6" stroke-width="1.5"/>`};
 s+=`<g stroke="${I}" stroke-width="${sw}" stroke-linecap="round">${MO[A.mouth]||MO.sorriso}</g>`;
 if(sp==='Orco')s+=`<path d="M86 138 l3 -12 l6 12Z M114 138 l-3 -12 l-6 12Z" fill="#f7f1dc" stroke="${I}" stroke-width="2"/>`;
 // barba
 const BE={bigote:`<path d="M78 132 q22 -10 44 0 q-10 6 -22 2 q-12 4 -22 -2Z"/>`,perilla:`<path d="M90 146 q10 20 20 0 L110 164 q-10 10 -20 0Z"/>`,curta:`<path d="M58 120 C62 150 82 166 100 168 C118 166 138 150 142 120 C136 140 120 150 100 150 C80 150 64 140 58 120Z"/>`,longa:`<path d="M58 118 C60 150 66 190 80 215 L100 226 L120 215 C134 190 140 150 142 118 C136 138 120 150 100 150 C80 150 64 138 58 118Z"/>`,trenzada:`<path d="M58 118 C60 150 66 180 88 210 L100 218 L112 210 C134 180 140 150 142 118 C136 138 120 150 100 150 C80 150 64 138 58 118Z"/><path d="M84 168 l32 8 M82 184 l36 8 M86 200 l28 6" stroke="${I}" stroke-width="2"/><circle cx="100" cy="216" r="5" fill="#e0b84a" stroke="${I}" stroke-width="2"/>`};
 if(BE[A.beard])s+=`<g fill="${hair}" stroke="${I}" stroke-width="${sw}" stroke-linejoin="round">${BE[A.beard]}</g>`;
 // cornos e outros por riba do rostro
 if(sp==='Tiflin')s+=`<path d="M64 70 C50 50 52 30 66 22 C60 44 70 56 82 62Z M136 70 C150 50 148 30 134 22 C140 44 130 56 118 62Z" fill="${dark(skin)}" stroke="${I}" stroke-width="${sw}" stroke-linejoin="round"/>`;
 if(sp==='Draconato')s+=`<path d="M70 62 C58 46 60 34 70 30 C68 44 76 52 84 58Z M130 62 C142 46 140 34 130 30 C132 44 124 52 116 58Z" fill="${dark(skin)}" stroke="${I}" stroke-width="${sw}"/>`;
 // pelo por diante
 const HF={curto:`<path d="M52 98 C50 60 70 44 100 44 C130 44 150 60 148 98 C140 70 120 64 100 66 C80 64 60 70 52 98Z"/>`,
  melena:`<path d="M52 104 C48 60 70 42 100 42 C130 42 152 60 148 104 C146 78 130 62 100 62 C70 62 54 78 52 104Z"/><path d="M96 62 C80 62 66 74 62 96" fill="none"/>`,
  longo:`<path d="M52 104 C48 60 70 42 100 42 C130 42 152 60 148 104 C146 78 130 62 100 62 C70 62 54 78 52 104Z"/>`,
  rizos:`<g>${[[62,74],[76,58],[100,50],[124,58],[138,74],[56,96],[144,96],[86,52],[114,52]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="14"/>`).join('')}</g>`,
  crista:`<path d="M86 60 C86 30 100 10 100 10 C100 10 114 30 114 60 C108 52 92 52 86 60Z"/><path d="M60 92 C62 76 76 66 100 64 C124 66 138 76 140 92 C130 80 110 78 100 78 C90 78 70 80 60 92Z"/>`,
  trenzas:`<path d="M52 104 C48 60 70 42 100 42 C130 42 152 60 148 104 C146 78 130 62 100 62 C70 62 54 78 52 104Z"/><path d="M66 60 l68 0 M62 74 l76 0" fill="none"/>`,
  mono:`<circle cx="100" cy="36" r="16"/><path d="M52 98 C50 60 70 46 100 46 C130 46 150 60 148 98 C140 70 120 64 100 66 C80 64 60 70 52 98Z"/>`,
  coleta:`<path d="M52 98 C50 60 70 46 100 46 C130 46 150 60 148 98 C140 70 120 64 100 66 C80 64 60 70 52 98Z"/>`,
  calvo:``};
 if(HF[A.hair])s+=`<g fill="${hair}" stroke="${I}" stroke-width="${sw}" stroke-linejoin="round">${HF[A.hair]}</g>`;
 // accesorios
 const AC={lentes:`<g fill="none" stroke="${I}" stroke-width="2.4"><circle cx="78" cy="100" r="14"/><circle cx="122" cy="100" r="14"/><path d="M92 100h16 M64 98 L54 94 M136 98 L146 94"/></g>`,
  pendente:`<circle cx="148" cy="118" r="5" fill="#e0b84a" stroke="${I}" stroke-width="2"/>`,
  cicatriz:`<path d="M112 84 L126 126 M114 96 l6 -2 M118 108 l6 -2" stroke="#8a3a2a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
  parche:`<path d="M60 84 L150 70" stroke="${I}" stroke-width="3"/><ellipse cx="122" cy="100" rx="14" ry="12" fill="#241a12"/>`,
  diadema:`<path d="M56 78 C70 66 130 66 144 78" fill="none" stroke="#e0b84a" stroke-width="5"/><circle cx="100" cy="66" r="5" fill="#b8503c" stroke="#e0b84a" stroke-width="2"/>`,
  tatuaxe:`<path d="M64 108 q8 -14 6 -28 M70 116 q10 -6 8 -20" stroke="#2f5b8a" stroke-width="2.5" fill="none"/>`};
 s+=AC[A.acc]||'';
 if(opts.headOnly)return s;
 const vb=opts.square?'0 0 200 200':'0 0 200 240';
 return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${opts.w||200}" height="${opts.h||(opts.square?200:240)}">${s}</svg>`;
}
function shade(hex,k){const n=parseInt(hex.slice(1),16),r=n>>16,g=(n>>8)&255,b=n&255,f=v=>Math.max(0,Math.min(255,Math.round(k>0?v+(255-v)*k:v*(1+k))));return'#'+[f(r),f(g),f(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
const svgURL=s=>'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s);
function tokenSVG(A,color='#a47a2a',w=120){
 const head=A.headImg?`<rect width="200" height="200" fill="#eddcb3"/><image href="${A.headImg}" x="10" y="-16" width="180" height="216"/>`:avatarSVG(A).replace(/^<svg[^>]*>|<\/svg>$/g,'');
 return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="${w}" height="${w}"><defs><clipPath id="c"><circle cx="100" cy="100" r="88"/></clipPath></defs><g clip-path="url(#c)"><g transform="translate(0,-10) scale(1)">${head}</g></g><circle cx="100" cy="100" r="88" fill="none" stroke="#241a12" stroke-width="3"/><circle cx="100" cy="100" r="93" fill="none" stroke="${color}" stroke-width="7"/><circle cx="100" cy="100" r="97" fill="none" stroke="#241a12" stroke-width="2"/></svg>`;
}
function svgToPNG(svg,w,h){return new Promise(res=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(im,0,0,w,h);res(c.toDataURL('image/png'))};im.src=svgURL(svg)})}

/* ---------- interface ---------- */
let AVS=null,avView='full';
document.addEventListener('click',e=>{const b=e.target.closest('[data-avview]');if(b){avView=b.dataset.avview;renderAvatar()}});
function openAvatar(){
 AVS=S.avatar?Object.assign({},S.avatar):avRandom(S.race,S.cls);
 if(S.race&&AVS.species!==S.race)AVS.species=S.race;
 renderAvatar();openModal('avModal');renderPackBlock();
}
function renderAvatar(){
 if(AVS.headImg&&avView!=='full')$('#avPreview').innerHTML=`<img src="${AVS.headImg}" alt="" style="width:100%;border:3px double var(--gilt);border-radius:8px;background:#fff8e6">`;
 else $('#avPreview').innerHTML=avView==='full'?figureSVG(AVS,{w:260,h:450}):avatarSVG(AVS,{w:260,h:312});
 $$('[data-avview]').forEach(b=>b.classList.toggle('on',b.dataset.avview===avView));
 const ORDER=['body','pose','weapon','shield','cloak','cloakColor','outfit','outfitColor','legwear','legColor','boots','shape','skin','eyes','eyeColor','brows','nose','mouth','beard','hair','hairColor','acc','bg'];
 $('#avOpts').innerHTML=ORDER.map(k=>{const arr=AV[k],isCol=typeof arr[0]==='string';
  return`<div class="avcat"><div class="sechead">${AVLAB[k]}</div><div class="avchips">${arr.map(v=>{const val=isCol?v:v[0],lab=isCol?'':v[1];
   return isCol?`<button class="avcol ${AVS[k]===val?'on':''}" data-av="${k}" data-v="${val}" style="background:${val}" aria-label="${val}"></button>`:`<button class="cond ${AVS[k]===val?'on':''}" data-av="${k}" data-v="${val}">${lab}</button>`}).join('')}</div></div>`}).join('');
}
$('#avOpts').addEventListener('click',e=>{const b=e.target.closest('[data-av]');if(!b)return;const k=b.dataset.av;AVS[k]=b.dataset.v;renderAvatar();
 if(AVS.headPack&&(k==='skin'||k==='hairColor'))recomposeHead();
 else if(AVS.bodyPack){if(k==='pose')renderAvBodyPieces();else recomposeBody()}});
$('#avRandom').addEventListener('click',()=>{const keep=['headPack','headPieces','headImg','bodyPack','bodyPieces','bodyImg'].map(k=>[k,AVS[k]]);AVS=avRandom(S.race,S.cls);keep.forEach(([k,v])=>AVS[k]=v);renderAvatar();if(AVS.headPack)recomposeHead();else if(AVS.bodyPack)recomposeBody()});
$('#avApply').addEventListener('click',async()=>{S.avatar=AVS;S.portrait=AVS.headImg||await svgToPNG(avatarSVG(AVS),400,480);renderPortrait();save();$('#avModal').classList.remove('open');toast('Retrato gardado')});
$('#avFull').addEventListener('click',async()=>{const png=await svgToPNG(figureSVG(AVS),600,1040),l=document.createElement('a');l.href=png;l.download=(S.name||'heroe')+'-figura.png';document.body.appendChild(l);l.click();l.remove();toast('Figura descargada')});
$('#avToken').addEventListener('click',async()=>{const png=await svgToPNG(tokenSVG(AVS),400),l=document.createElement('a');l.href=png;l.download=(S.name||'heroe')+'-ficha.png';document.body.appendChild(l);l.click();l.remove();toast('Ficha redonda descargada')});
