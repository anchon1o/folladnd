/* ================= FIGURA DE CORPO ENTEIRO ================= */
function figureFactors(A){
 const bt=AV.body.find(b=>b[0]===A.body)||AV.body[1];let W=bt[2],H=1;
 const sp=A.species||'Humano';if(sp==='Anano'){W*=1.15;H*=.82}if(sp==='Mediano'||sp==='Gnomo'){W*=.85;H*=.72}if(sp==='Goliat')H*=1.12;if(A.body==='xigante')H*=1.08;if(A.body==='miudo')H*=.9;
 const neckY=476-320*H,k=(sp==='Mediano'||sp==='Gnomo'?.62:sp==='Anano'?.66:.6)*Math.max(.85,Math.min(1.15,(W+1)/2));
 return{W,H,k,nk:bt[3],head:{x:150-100*k,y:neckY-150*k,w:200*k,h:240*k}};
}
function figureSVG(A,opts={}){
 if(A.bodyImg&&!opts.noBodyImg)return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 520" width="${opts.w||300}" height="${opts.h||520}"><image href="${A.bodyImg}" x="0" y="0" width="300" height="520"/></svg>`;
 const I='#241a12',sw=3,skin=A.skin,oc=A.outfitColor,dk=c=>shade(c,-.2),lt=c=>shade(c,.18);
 const FF=figureFactors(A),W=FF.W,H=FF.H,sp=A.species||'Humano';
 const cx=150,ground=490,legL=170*H,torsoL=150*H,hipY=ground-legL,shY=hipY-torsoL,neckY=shY-14,hw=44*W,ww=30*W,armW=24*W;
 const pose=A.pose||'pe',walk=pose==='camino';
 let s='';
 // fondo
 const BG={pergameo:`<rect width="300" height="520" fill="#ecdcb5"/><rect width="300" height="520" fill="url(#vig2)"/>`,pedra:`<rect width="300" height="520" fill="#9a968f"/>${[0,52,104,156,208,260,312,364,416,468].map((y,i)=>`<g stroke="#6f6b64" stroke-width="2" fill="none"><path d="M0 ${y}h300"/>${[0,1,2,3].map(j=>`<path d="M${(j*80+(i%2)*40)%320} ${y}v52"/>`).join('')}</g>`).join('')}`,
  bosque:`<rect width="300" height="520" fill="#6e8f5a"/><g fill="#3d5c33">${[20,90,160,230,290].map((x,i)=>`<path d="M${x} 520 L${x-36} 520 L${x-6} ${260+i*15} L${x+26} 520Z"/>`).join('')}</g><rect y="470" width="300" height="50" fill="#4f6b3a"/>`,
  noite:`<rect width="300" height="520" fill="#1d2440"/>${Array.from({length:30},(_,i)=>`<circle cx="${(i*67)%300}" cy="${(i*97)%480}" r="${1+i%2}" fill="#f3e7b8"/>`).join('')}<circle cx="240" cy="70" r="24" fill="#f3e7b8"/><rect y="475" width="300" height="45" fill="#11162a"/>`,
  lume:`<rect width="300" height="520" fill="#3a1408"/><path d="M0 520 C40 380 70 420 100 300 C120 400 170 340 190 260 C210 400 250 380 300 520Z" fill="#c9481f"/><path d="M60 520 C90 440 120 460 150 380 C170 460 210 440 240 520Z" fill="#f0a52a"/>`,
  mar:`<rect width="300" height="520" fill="#7fb2c9"/><rect y="330" width="300" height="190" fill="#2f6b8a"/>${[350,380,410,440].map(y=>`<path d="M0 ${y} q25 -10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0" stroke="#a9d3e6" stroke-width="3" fill="none"/>`).join('')}<rect y="470" width="300" height="50" fill="#d9c69a"/>`};
 s+=`<defs><radialGradient id="vig2" cx="50%" cy="40%" r="70%"><stop offset="55%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#5a3a14" stop-opacity=".45"/></radialGradient></defs>${BG[A.bg]||BG.pergameo}`;
 s+=`<ellipse cx="${cx}" cy="${ground+6}" rx="${hw+30}" ry="10" fill="rgba(0,0,0,.25)"/>`;
 // capa (detrás)
 const cc=A.cloakColor||'#6b1a17';
 if(A.cloak&&A.cloak!=='non'){const L=A.cloak==='curta'?hipY+20:ground-12;s+=`<path d="M${cx-hw-6} ${shY+6} C${cx-hw-30} ${(shY+L)/2} ${cx-hw-34} ${L-10} ${cx-hw-20} ${L} Q${cx} ${L+12} ${cx+hw+20} ${L} C${cx+hw+34} ${L-10} ${cx+hw+30} ${(shY+L)/2} ${cx+hw+6} ${shY+6}Z" fill="${cc}" stroke="${I}" stroke-width="${sw}"/><path d="M${cx-hw+10} ${shY+30} C${cx-hw-6} ${(shY+L)/2} ${cx-hw-6} ${L-40} ${cx-hw+6} ${L-8}" fill="none" stroke="${dk(cc)}" stroke-width="3"/>`}
 // brazo esquerdo (detrás) segundo pose
 const armL=(pts,color,hand)=>`<path d="M${pts.map(p=>p.join(' ')).join(' L')}" fill="none" stroke="${I}" stroke-width="${armW+sw*2}" stroke-linecap="round" stroke-linejoin="round"/><path d="M${pts.map(p=>p.join(' ')).join(' L')}" fill="none" stroke="${color}" stroke-width="${armW}" stroke-linecap="round" stroke-linejoin="round"/>${hand?`<circle cx="${hand[0]}" cy="${hand[1]}" r="${armW*.62}" fill="${skin}" stroke="${I}" stroke-width="${sw}"/>`:''}`;
 const sleeve=['gi','camisa','peles'].includes(A.outfit)?skin:['tunica','sotana','follas','traxe'].includes(A.outfit)?oc:A.outfit==='placas'||A.outfit==='mallas'?'#8a8f96':dk(oc);
 const sL=[cx-hw+6,shY+10],sR=[cx+hw-6,shY+10];
 const POSES={
  pe:{L:[sL,[cx-hw-8,shY+80],[cx-hw-4,shY+150]],R:[sR,[cx+hw+8,shY+80],[cx+hw+4,shY+150]],wrot:-8},
  garda:{L:[sL,[cx-hw-30,shY+60],[cx-hw-10,shY+40]],R:[sR,[cx+hw+34,shY+40],[cx+hw+22,shY-30]],wrot:-40},
  saudo:{L:[sL,[cx-hw-8,shY+80],[cx-hw-4,shY+150]],R:[sR,[cx+hw+30,shY-10],[cx+hw+18,shY-70]],wrot:0},
  cruzados:{L:[sL,[cx-hw-6,shY+70],[cx+20,shY+60]],R:[sR,[cx+hw+6,shY+70],[cx-20,shY+60]],wrot:0,noWeapon:true},
  conxuro:{L:[sL,[cx-hw-26,shY+60],[cx-hw-40,shY+40]],R:[sR,[cx+hw+26,shY+60],[cx+hw+40,shY+40]],wrot:20,glow:true},
  camino:{L:[sL,[cx-hw-20,shY+70],[cx-hw-2,shY+130]],R:[sR,[cx+hw+2,shY+70],[cx+hw+20,shY+40]],wrot:-15}
 };const P=POSES[pose]||POSES.pe;
 s+=armL(P.L,sleeve,P.L[2]);
 // pernas
 const lc=A.legColor||'#5a3a22',legW=ww*.95,lx=cx-ww*.55,rx=cx+ww*.55,spread=walk?18:0;
 const leg=(x,dx)=>`<path d="M${x} ${hipY} L${x+dx} ${ground-14}" stroke="${I}" stroke-width="${legW+sw*2}" stroke-linecap="round"/><path d="M${x} ${hipY} L${x+dx} ${ground-14}" stroke="${A.legwear==='malla'?'#8a8f96':A.legwear==='curtos'?skin:lc}" stroke-width="${legW}" stroke-linecap="round"/>`;
 s+=leg(lx,-spread)+leg(rx,spread);
 if(A.legwear==='curtos')s+=`<path d="M${lx-legW/2} ${hipY} h${rx-lx+legW} v${legL*.45} h-${rx-lx+legW}Z" fill="${lc}" stroke="${I}" stroke-width="${sw}"/>`;
 if(A.legwear==='malla')s+=`<g stroke="${I}" stroke-width="2" fill="none">${[.3,.5,.7].map(t=>`<path d="M${lx-legW/2-spread*t} ${hipY+legL*t} h${legW} M${rx-legW/2+spread*t} ${hipY+legL*t} h${legW}"/>`).join('')}</g>`;
 if(A.legwear==='saia')s+=`<path d="M${cx-ww-4} ${hipY-10} L${cx-ww-24} ${ground-30} Q${cx} ${ground-14} ${cx+ww+24} ${ground-30} L${cx+ww+4} ${hipY-10}Z" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${cx} ${hipY} V${ground-22}" stroke="${dk(oc)}" stroke-width="3"/>`;
 // calzado
 const foot=(x)=>{const b=A.boots||'botas';if(b==='descalzo')return`<ellipse cx="${x+4}" cy="${ground-4}" rx="${legW*.7}" ry="9" fill="${skin}" stroke="${I}" stroke-width="${sw}"/>`;
  if(b==='sandalias')return`<ellipse cx="${x+4}" cy="${ground-4}" rx="${legW*.7}" ry="9" fill="${skin}" stroke="${I}" stroke-width="${sw}"/><path d="M${x-8} ${ground-6} l12 -8 l12 8" fill="none" stroke="#5a3a22" stroke-width="3"/>`;
  const h=b==='altas'?54:26;return`<path d="M${x-legW/2} ${ground-h} h${legW} v${h-12} q0 10 12 10 h-${legW+14} q-8 0 -8 -8Z" fill="#3a2a1a" stroke="${I}" stroke-width="${sw}" stroke-linejoin="round"/>`};
 s+=foot(lx-spread)+foot(rx+spread);
 // torso
 const torso=`M${cx-hw} ${shY} Q${cx} ${shY-12} ${cx+hw} ${shY} L${cx+ww+8} ${hipY+8} L${cx-ww-8} ${hipY+8}Z`;
 const OUT={
  placas:`<path d="${torso}" fill="#9aa1a8" stroke="${I}" stroke-width="${sw}"/><path d="M${cx-hw+6} ${shY+30} Q${cx} ${shY+60} ${cx+hw-6} ${shY+30} M${cx-ww} ${shY+80} Q${cx} ${shY+100} ${cx+ww} ${shY+80}" fill="none" stroke="${I}" stroke-width="2.5"/><ellipse cx="${cx-hw+2}" cy="${shY+8}" rx="${hw*.42}" ry="18" fill="#6f767d" stroke="${I}" stroke-width="${sw}"/><ellipse cx="${cx+hw-2}" cy="${shY+8}" rx="${hw*.42}" ry="18" fill="#6f767d" stroke="${I}" stroke-width="${sw}"/><rect x="${cx-16}" y="${shY+50}" width="32" height="32" rx="5" fill="${oc}" stroke="${I}" stroke-width="2.5"/>`,
  mallas:`<path d="${torso}" fill="#8a8f96" stroke="${I}" stroke-width="${sw}"/><g stroke="${I}" stroke-width="1.2" opacity=".5">${Array.from({length:10},(_,i)=>`<path d="M${cx-hw+8} ${shY+14+i*13} q7 -5 14 0 t14 0 t14 0 t14 0 t14 0 t14 0"/>`).join('')}</g><path d="M${cx-30} ${shY} L${cx} ${shY+40} L${cx+30} ${shY}Z" fill="${oc}" stroke="${I}" stroke-width="2.5"/>`,
  coiro:`<path d="${torso}" fill="#7a4b2a" stroke="${I}" stroke-width="${sw}"/><path d="M${cx-hw*.7} ${shY+12} L${cx-26} ${shY} L${cx} ${shY+46} L${cx+26} ${shY} L${cx+hw*.7} ${shY+12} L${cx+ww+2} ${hipY+8} L${cx-ww-2} ${hipY+8}Z" fill="${oc}" stroke="${I}" stroke-width="2.5"/><path d="M${cx} ${shY+46} V${hipY} M${cx-10} ${shY+70} h20 M${cx-10} ${shY+95} h20" stroke="${I}" stroke-width="2.5" fill="none"/>`,
  tunica:`<path d="M${cx-hw} ${shY} Q${cx} ${shY-12} ${cx+hw} ${shY} L${cx+ww+30} ${ground-16} Q${cx} ${ground} ${cx-ww-30} ${ground-16}Z" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${cx-30} ${shY} L${cx} ${shY+60} L${cx+30} ${shY}" fill="${lt(oc)}" stroke="${I}" stroke-width="2.5"/><path d="M${cx-hw*.75} ${ground-20} C${cx-hw*.7} ${hipY} ${cx-34} ${shY+40} ${cx-26} ${shY} M${cx+hw*.75} ${ground-20} C${cx+hw*.7} ${hipY} ${cx+34} ${shY+40} ${cx+26} ${shY}" fill="none" stroke="${I}" stroke-width="2.5"/><circle cx="${cx}" cy="${shY+72}" r="7" fill="#e0b84a" stroke="${I}" stroke-width="2.5"/>`,
  traxe:`<path d="${torso}" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${cx-30} ${shY} L${cx-8} ${shY+40} L${cx} ${shY+28} L${cx+8} ${shY+40} L${cx+30} ${shY}" fill="#f3e9d2" stroke="${I}" stroke-width="2.5"/><path d="M${cx-hw*.6} ${shY+10} V${hipY} M${cx+hw*.6} ${shY+10} V${hipY}" stroke="${lt(oc)}" stroke-width="7"/>${[50,75,100].map(y=>`<circle cx="${cx}" cy="${shY+y}" r="4" fill="#e0b84a"/>`).join('')}<path d="M${cx-ww-8} ${hipY} h${2*ww+16}" stroke="#241a12" stroke-width="8"/>`,
  peles:`<path d="${torso}" fill="${skin}" stroke="${I}" stroke-width="${sw}"/><path d="M${cx-hw-8} ${shY-4} q${hw*.5} 30 ${hw+8} 34 v-40 l-10 12 l-10 -12 l-10 12 l-10 -12 l-10 12Z M${cx+hw+8} ${shY-4} q-${hw*.5} 30 -${hw+8} 34 v-40 l10 12 l10 -12 l10 12 l10 -12 l10 12Z" fill="${dk(oc)}" stroke="${I}" stroke-width="2.5"/><path d="M${cx-24} ${shY+10} L${cx+18} ${hipY}" stroke="#5a3a22" stroke-width="10"/><path d="M${cx-ww-8} ${hipY} h${2*ww+16}" stroke="#5a3a22" stroke-width="10"/>`,
  gi:`<path d="${torso}" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${cx-36} ${shY} L${cx+20} ${hipY+8} M${cx+36} ${shY} L${cx-20} ${hipY+8}" stroke="${I}" stroke-width="3" fill="none"/><path d="M${cx-36} ${shY} L${cx} ${shY+56} L${cx+36} ${shY}Z" fill="${skin}" stroke="${I}" stroke-width="2.5"/><path d="M${cx-ww-10} ${hipY-4} h${2*ww+20}" stroke="#241a12" stroke-width="10"/><path d="M${cx+4} ${hipY} l8 40 M${cx-4} ${hipY} l-8 40" stroke="#241a12" stroke-width="6"/>`,
  follas:`<path d="${torso}" fill="#4f7a3a" stroke="${I}" stroke-width="${sw}"/>${Array.from({length:24},(_,i)=>`<path d="M${cx-hw+10+(i%6)*(2*hw-20)/5} ${shY+14+Math.floor(i/6)*32} q10 -14 20 0 q-10 14 -20 0Z" fill="${i%2?oc:'#3b6b2c'}" stroke="${I}" stroke-width="1.8"/>`).join('')}`,
  sotana:`<path d="M${cx-hw} ${shY} Q${cx} ${shY-12} ${cx+hw} ${shY} L${cx+ww+26} ${ground-16} Q${cx} ${ground} ${cx-ww-26} ${ground-16}Z" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${cx-14} ${shY+6} V${ground-30} M${cx+14} ${shY+6} V${ground-30}" stroke="${lt(oc)}" stroke-width="7"/><path d="M${cx} ${shY+40} v30 M${cx-12} ${shY+52} h24" stroke="#e0b84a" stroke-width="5" stroke-linecap="round"/><path d="M${cx-ww-8} ${hipY-10} h${2*ww+16}" stroke="#e0b84a" stroke-width="5"/>`,
  camisa:`<path d="${torso}" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><path d="M${cx-30} ${shY} L${cx} ${shY+40} L${cx+30} ${shY}" fill="${skin}" stroke="${I}" stroke-width="2.5"/><path d="M${cx} ${shY+40} v24" stroke="${I}" stroke-width="2.5"/><path d="M${cx-ww-8} ${hipY} h${2*ww+16}" stroke="#5a3a22" stroke-width="9"/><circle cx="${cx}" cy="${hipY}" r="5" fill="#e0b84a" stroke="${I}" stroke-width="2"/>`};
 s+=OUT[A.outfit]||OUT.camisa;
 // pescozo e cabeza
 const nk=FF.nk;s+=`<path d="M${cx-14*nk} ${neckY-18} L${cx-15*nk} ${shY+6} L${cx+15*nk} ${shY+6} L${cx+14*nk} ${neckY-18}Z" fill="${dk(skin)}" stroke="${I}" stroke-width="${sw}"/>`;
 const k=FF.k;
 if(!opts.noHead)s+=A.headImg?`<image href="${A.headImg}" x="${cx-100*k}" y="${neckY-150*k}" width="${200*k}" height="${240*k}" preserveAspectRatio="none"/>`:`<g transform="translate(${cx-100*k},${neckY-150*k}) scale(${k})">${avatarSVG(A,{headOnly:true})}</g>`;
 // brazo dereito (diante) e arma
 s+=armL(P.R,sleeve,P.R[2]);
 const hand=P.R[2];
 if(P.glow)s+=`<circle cx="${P.L[2][0]-10}" cy="${P.L[2][1]-10}" r="22" fill="#7fd6ff" opacity=".55"/><circle cx="${hand[0]+10}" cy="${hand[1]-10}" r="22" fill="#7fd6ff" opacity=".55"/><circle cx="${hand[0]+10}" cy="${hand[1]-10}" r="8" fill="#fff"/><circle cx="${P.L[2][0]-10}" cy="${P.L[2][1]-10}" r="8" fill="#fff"/>`;
 const wp=A.weapon||'ningunha';
 if(wp!=='ningunha'&&!P.noWeapon){const WP={
   espada:`<path d="M0 0 L0 -120 l6 -14 l6 14 V0Z" fill="#c9ced3" stroke="${I}" stroke-width="2.5"/><path d="M6 0 v-110" stroke="#8a8f96" stroke-width="2"/><rect x="-16" y="-2" width="44" height="8" rx="3" fill="#e0b84a" stroke="${I}" stroke-width="2.5"/><rect x="1" y="6" width="10" height="30" fill="#5a3a22" stroke="${I}" stroke-width="2.5"/>`,
   machado:`<rect x="2" y="-120" width="10" height="150" fill="#5a3a22" stroke="${I}" stroke-width="2.5"/><path d="M12 -110 C50 -120 60 -70 40 -50 C50 -75 30 -95 12 -80Z M2 -110 C-36 -120 -46 -70 -26 -50 C-36 -75 -16 -95 2 -80Z" fill="#c9ced3" stroke="${I}" stroke-width="2.5"/>`,
   martelo:`<rect x="2" y="-120" width="10" height="150" fill="#5a3a22" stroke="${I}" stroke-width="2.5"/><rect x="-22" y="-124" width="58" height="34" rx="4" fill="#8a8f96" stroke="${I}" stroke-width="2.5"/>`,
   daga:`<path d="M0 0 L0 -50 l6 -12 l6 12 V0Z" fill="#c9ced3" stroke="${I}" stroke-width="2.5"/><rect x="-8" y="-2" width="28" height="7" rx="3" fill="#e0b84a" stroke="${I}" stroke-width="2.5"/><rect x="1" y="5" width="10" height="22" fill="#5a3a22" stroke="${I}" stroke-width="2.5"/>`,
   lanza:`<rect x="2" y="-200" width="8" height="260" fill="#5a3a22" stroke="${I}" stroke-width="2.5"/><path d="M6 -240 l14 40 h-28Z" fill="#c9ced3" stroke="${I}" stroke-width="2.5"/>`,
   baston:`<path d="M6 60 V-150 q0 -20 16 -22 q16 0 10 20" fill="none" stroke="${I}" stroke-width="13" stroke-linecap="round"/><path d="M6 60 V-150 q0 -20 16 -22 q16 0 10 20" fill="none" stroke="#7a4b2a" stroke-width="8" stroke-linecap="round"/><circle cx="30" cy="-160" r="10" fill="#7fd6ff" stroke="${I}" stroke-width="2.5"/>`,
   arco:`<path d="M6 -110 Q60 0 6 110" fill="none" stroke="${I}" stroke-width="12" stroke-linecap="round"/><path d="M6 -110 Q60 0 6 110" fill="none" stroke="#7a4b2a" stroke-width="7" stroke-linecap="round"/><path d="M6 -110 L6 110" stroke="#f3e9d2" stroke-width="2"/>`,
   libro:`<rect x="-24" y="-30" width="54" height="42" rx="3" fill="${oc}" stroke="${I}" stroke-width="2.5"/><rect x="-18" y="-24" width="42" height="30" fill="#f3e9d2" stroke="${I}" stroke-width="1.5"/><path d="M-10 -14 h26 M-10 -6 h26 M-10 2 h18" stroke="${I}" stroke-width="1.5"/>`,
   laude:`<ellipse cx="0" cy="10" rx="26" ry="32" fill="#b07a2a" stroke="${I}" stroke-width="2.5"/><circle cx="0" cy="14" r="8" fill="#5a3a22"/><rect x="-5" y="-90" width="10" height="72" fill="#5a3a22" stroke="${I}" stroke-width="2.5"/><path d="M-12 -18 V30 M-4 -22 V36 M4 -22 V36 M12 -18 V30" stroke="#f3e9d2" stroke-width="1.2"/>`};
  s+=`<g transform="translate(${hand[0]-6},${hand[1]}) rotate(${P.wrot})">${WP[wp]}</g>`}
 // escudo no brazo esquerdo
 if(A.shield&&A.shield!=='non'&&!P.noWeapon){const h=P.L[2];s+=A.shield==='redondo'?`<g transform="translate(${h[0]-10},${h[1]-6})"><circle r="40" fill="${oc}" stroke="${I}" stroke-width="${sw}"/><circle r="30" fill="none" stroke="#e0b84a" stroke-width="4"/><circle r="9" fill="#8a8f96" stroke="${I}" stroke-width="2.5"/></g>`
  :`<g transform="translate(${h[0]-10},${h[1]-16})"><path d="M-36 -34 h72 v40 q0 40 -36 56 q-36 -16 -36 -56Z" fill="${oc}" stroke="${I}" stroke-width="${sw}" stroke-linejoin="round"/><path d="M0 -34 V62 M-36 6 H36" stroke="#e0b84a" stroke-width="5"/></g>`}
 return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 520" width="${opts.w||300}" height="${opts.h||520}">${s}</svg>`;
}
