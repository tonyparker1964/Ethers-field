const fs=require('fs'),vm=require('vm'),assert=require('assert');const els=new Map();const vals={cmSpeed:'0.5',cmDwell:'22'};function el(id){return {value:vals[id]??'',checked:true,textContent:'',innerHTML:'',setAttribute(k,v){this[k]=v}}}const document={getElementById:id=>{if(!els.has(id))els.set(id,el(id));return els.get(id)}};const window={};const rendered=[];const ctx={document,window,Math,Map,recordPattern:(id,center,x,y,size,alpha)=>rendered.push({id,center,x,y,size,alpha})};vm.createContext(ctx);vm.runInContext(fs.readFileSync('constellation-meditation.js','utf8').replace('function motif(pattern,x,y,size,rotation,alpha,labels=false){','function motif(pattern,x,y,size,rotation,alpha,labels=false){recordPattern(pattern.id,labels,x,y,size,alpha);'),ctx);const app=window.EFConstellationMeditation.mount();assert.equal(app.count,88);assert(els.get('cmPick').innerHTML.includes('88 · Vulpecula'));assert(els.get('cmPick').innerHTML.includes('Virgo'));app.enter();assert.equal(app.state().index,0);const observed=[];for(let i=0;i<88;i++){observed.push(app.state().index);app.update(.1);for(let j=1;j<220;j++)app.update(.1);if(app.state().index===i)app.update(.001);}assert.deepEqual(observed,Array.from({length:88},(_,i)=>i));assert.equal(app.state().index,0);app.choose(87);els.get('cmNext').onclick();assert.equal(app.state().index,0);els.get('cmPrev').onclick();assert.equal(app.state().index,87);els.get('cmPause').onclick();const before=app.state();for(let i=0;i<100;i++)app.update(.1);assert.equal(app.state().elapsed,before.elapsed);assert.notEqual(app.state().angle,before.angle);els.get('cmSpeed').value='0';els.get('cmSpeed').oninput();const a=app.state().angle;app.update(.1);assert.equal(app.state().angle,a);app.enter();assert.equal(app.state().index,0);assert.equal(app.state().loop,true);const g=new Proxy({createRadialGradient(){return{addColorStop(){}}},measureText(s){return{width:s.length*6}}},{get(o,k){return k in o?o[k]:()=>{}}});for(let i=0;i<88;i++){app.choose(i);app.draw(g,1280,800,i*17,{v:.5},2);app.draw(g,390,844,i*17+1,{v:0},1);}console.log('PASS: all 88 patterns render desktop/mobile; 1–88 wrap; previous/next; sequence pause; rotation slider; reentry reset.');
app.enter();els.get('cmSpeed').value='1';els.get('cmDir').value='in';for(let i=0;i<60;i++)app.update(1/60,{p:.25},{});assert(app.state().phase>0);els.get('cmDir').value='out';for(let i=0;i<300;i++)app.update(1/60,{p:.25},{});assert(app.state().direction<-.9);els.get('cmDir').value='breathe';for(let i=0;i<60;i++)app.update(1/60,{p:.25},{});assert(app.state().direction<-.9);for(let i=0;i<60;i++)app.update(1/60,{p:.75},{});assert(app.state().direction>.9);els.get('cmSpeed').value='0';const phase=app.state().phase;app.update(.1,{p:.25},{bass:1,rms:1});assert.equal(app.state().phase,phase);app.draw(g,1280,800,90000,{v:.5,p:.25},2,{bass:.5,mid:.4,rms:.3},{h:[42]},{n:1});app.draw(g,390,844,90017,{v:.5,p:.75},1,{bass:.7,mid:.8,rms:.6},{h:[220]},{n:2});console.log('PASS: inward/outward/breathing flow, 0x motion stop, beat-reactive vortex drawing.');

rendered.length=0;app.draw(g,1280,800,91000,{p:.25,v:.5},2);assert.equal(new Set(rendered.filter(x=>!x.center).map(x=>x.id)).size,88);assert.equal(rendered.filter(x=>!x.center).length,88);assert.equal(rendered.filter(x=>x.center).length,1);for(const sec of [1,2,3]){app.enter();els.get('cmTempo').value=String(sec);els.get('cmTempo').onchange();assert.equal(els.get('cmDwell').value,String(sec));for(let i=0;i<sec*100+1;i++)app.update(.01);assert.equal(app.state().index,1);}console.log('PASS: all 88 distinct surrounding patterns, exactly one center, and 1/2/3-second presets.');
for(const seconds of [1,2,3]){app.enter();els.get('cmSpeed').value='1';els.get('cmPeriod').value=String(seconds);els.get('cmDir').value='out';for(let i=0;i<25;i++)app.update(.01,{p:0},{});assert(Math.abs(app.state().phase-(1-.25/seconds))<1e-8);}console.log('PASS: 1/2/3-second spiral travel periods at 1x without audio modulation.');
const filters=[],alphas=[],ops=[];let darken=0,brighten=0;const lightContext=new Proxy(g,{get(o,k){if(k==='canvas')return {};if(k==='fillRect')return ()=>{if(o.fillStyle==='#000')darken++};if(k==='drawImage')return ()=>{if(o.globalCompositeOperation==='lighter')brighten++};return k in o?o[k]:()=>{}},set(o,k,v){if(k==='filter')filters.push(v);if(k==='globalAlpha')alphas.push(v);if(k==='globalCompositeOperation')ops.push(v);o[k]=v;return true}});for(const level of [.25,1,2.5]){els.get('cmBrightness').value=String(level);els.get('cmBrightness').oninput();assert.equal(els.get('cmBrightnessValue').value,Math.round(level*100)+'%');app.draw(lightContext,1280,800,93000+level,{p:.25,v:.5},2);assert(!filters.some(f=>/brightness/.test(f)),'no per-draw canvas filter');assert.equal(filters.at(-1),'none');if(level<1){assert(darken>0);assert(alphas.some(a=>Math.abs(a-(1-level))<1e-9));}if(level>1){assert(brighten>=2);}darken=0;brighten=0;assert.equal(ops.at(-1),'source-over');}console.log('PASS: brightness slider 25–250%, accessible output, and single full-frame light pass, and readable captions.');
const texts=[];const namedContext=new Proxy(g,{get(o,k){if(k==='fillText')return s=>texts.push(s);return o[k]}});app.enter();els.get('cmNames').checked=false;app.draw(namedContext,1280,800,94000,{p:.25,v:.5},2);const unnamed=texts.length;texts.length=0;els.get('cmNames').checked=true;app.draw(namedContext,1280,800,94016,{p:.25,v:.5},2);assert(texts.length>unnamed);console.log('PASS: individual star labels hide/show while constellation field and captions remain.');
app.enter();app.update(.1,{p:.25},{bass:.3});els.get('cmTransport').onclick();assert.equal(els.get('cmTransport').textContent,'Play');const stopped=JSON.stringify(app.state());for(let i=0;i<100;i++)app.update(.1,{p:.75},{bass:1});assert.equal(JSON.stringify(app.state()),stopped);app.draw(g,1280,800,100000,{p:.75,v:1},2,{bass:1});assert.equal(JSON.stringify(app.state()),stopped);els.get('cmTransport').onclick();assert.equal(els.get('cmTransport').textContent,'Stop');app.update(.1,{p:.25},{bass:.3});assert(app.state().elapsed>JSON.parse(stopped).elapsed);console.log('PASS: Stop freezes all animation/sequence state and Play resumes from the same point.');

for(const [width,height] of [[1280,800],[390,844],[844,390],[320,568]]){
  app.enter();els.get('cmDir').value='out';els.get('cmSpeed').value='1';
  for(let frame=0;frame<160;frame++){
    rendered.length=0;app.draw(g,width,height,110000+frame*50,{p:.25,v:.5},2);
    const field=rendered.filter(p=>!p.center),center=rendered.find(p=>p.center);
    assert.equal(field.length,88);assert.equal(new Set(field.map(p=>p.id)).size,88);
    const radii=[];
    for(let ring=0;ring<8;ring++){
      const points=field.slice(ring*11,(ring+1)*11);
      const radiiInRing=points.map(p=>Math.hypot(p.x-center.x,p.y-center.y));
      assert(Math.max(...radiiInRing)-Math.min(...radiiInRing)<1e-8,'rings stay circular');
      radii.push(radiiInRing[0]);
    }
    radii.sort((a,b)=>a-b);
    for(let i=1;i<8;i++)assert(radii[i]-radii[i-1]>Math.min(width,height)*.015,'rings stay separated');
    for(const p of field){
      // like Symbols, the vortex runs to the screen edges; anything that would sit behind the captions is fully faded
      const capHalf=Math.min(width*.46,270),overCaption=Math.abs(p.x-width/2)<capHalf+p.size&&p.y+p.size+12>height*.78-16&&p.y-p.size<height*.78+78;
      if(overCaption)assert(p.alpha<=1e-9,'patterns behind the captions are faded out');
      assert(Math.hypot(p.x-center.x,p.y-center.y)-p.size>center.size,'rings clear center');
    }
  }
}
console.log('PASS: 88 unique patterns in eight separated circular rings filling the screen like Symbols; center clearance and faded-out caption zone at desktop, portrait, landscape and 320px widths across moving phases.');
app.enter();els.get('cmSpeed').value='0';app.draw(g,1280,800,130000,{p:.25},1);
const stillTime=app.state().visualTime;
app.draw(g,1280,800,130050,{p:.25},1);assert.equal(app.state().visualTime,stillTime);
console.log('PASS: 0x motion also freezes the ripple pulse clock.');

{const arcs=[];const ringCtx=new Proxy(g,{get(o,k){if(k==='arc')return (x,y,r)=>arcs.push(r);return o[k]}});app.enter();
els.get('cmRings').checked=true;arcs.length=0;app.draw(ringCtx,1280,800,120000,{p:.25,v:.5},2);const withRings=arcs.filter(r=>r>100).length;
els.get('cmRings').checked=false;arcs.length=0;rendered.length=0;app.draw(ringCtx,1280,800,120016,{p:.25,v:.5},2);const without=arcs.filter(r=>r>100).length;
assert(withRings>=24,'rings drawn when on');assert.equal(without,0,'no large circles when rings are off');assert.equal(rendered.filter(p=>!p.center).length,88);els.get('cmRings').checked=true;
console.log('PASS: Rings toggle removes every circle ring while all 88 patterns keep moving.');}

{// sky orientation: north up, east on the left, as seen looking up (Orion, Big Dipper, Cassiopeia)
const src=fs.readFileSync('constellation-meditation.js','utf8');const i0=src.indexOf('const DATA=')+11;let d=0,j=i0;for(;j<src.length;j++){const ch=src[j];if(ch==='{'||ch==='[')d++;else if(ch==='}'||ch===']'){d--;if(!d)break;}}const D=JSON.parse(src.slice(i0,j+1));
function where(name){const con=D.constellations.findIndex(c=>c.name===name);const dots=[];const dc=new Proxy(g,{get(o,k){if(k==='arc')return (x,y,r)=>{if(r===2.1)dots.push([x,y])};return o[k]}});app.choose(con);app.draw(dc,1600,1000,5000,{p:.25,v:.5},1);const m=new Map();D.constellations[con].stars.forEach((s,k)=>m.set(s.name,dots[k]));return m}
const ori=where('Orion'),uma=where('Ursa Major'),cas=where('Cassiopeia');
assert(ori.get('Betelgeuse')[0]<ori.get('Rigel')[0]&&ori.get('Betelgeuse')[1]<ori.get('Rigel')[1],'Betelgeuse upper left of Rigel');
assert(ori.get('Alnitak')[0]<ori.get('Mintaka')[0],'Orion belt runs east (left) to west (right)');
assert(uma.get('Alkaid')[0]<uma.get('Dubhe')[0],'Big Dipper handle to the east (left) of the bowl');
assert(cas.get('Segin')[0]<cas.get('Caph')[0],'Cassiopeia W: Caph on the west (right)');
console.log('PASS: constellations face the way they look in the sky (Orion, Big Dipper, Cassiopeia).');}

{// how many constellations pulse out at once: 1 to 88
els.get('cmDir').value='out';els.get('cmSpeed').value='1';
for(const n of [1,5,12,40,88]){for(const [w,h] of [[1280,800],[390,844]]){els.get('cmCount').value=String(n);els.get('cmCount').oninput();assert.equal(els.get('cmCountValue').value,String(n));app.enter();
  for(let f=0;f<60;f++){rendered.length=0;app.draw(g,w,h,130000+f*50,{p:.25,v:.5},2);const field=rendered.filter(p=>!p.center);assert.equal(field.length,n,`${n} at once`);assert.equal(new Set(field.map(p=>p.id)).size,n,'no repeats on screen');const center=rendered.find(p=>p.center);for(const p of field)assert(Math.hypot(p.x-center.x,p.y-center.y)-p.size>center.size,'clear of centre');}}}
// with one at a time, each new constellation that emerges from the centre is the next in 1-88 order
els.get('cmCount').value='1';els.get('cmCount').oninput();els.get('cmPeriod').value='1';app.enter();const seen=[];let t=140000;
for(let f=0;f<1200&&seen.length<6;f++){rendered.length=0;app.draw(g,1280,800,t+=50,{p:.25,v:.5},2);const id=rendered.find(p=>!p.center).id;if(seen.at(-1)!==id)seen.push(id);}
const order=D2=>D2;const allIds=[...els.get('cmPick').innerHTML.matchAll(/value="(\d+)"/g)].length;assert(seen.length>=4,'several constellations pulsed out in turn');
const srcIds=JSON.parse((()=>{const s=fs.readFileSync('constellation-meditation.js','utf8');const i=s.indexOf('const DATA=')+11;let d=0,j=i;for(;j<s.length;j++){const c=s[j];if(c==='{'||c==='[')d++;else if(c==='}'||c===']'){d--;if(!d)break;}}return s.slice(i,j+1)})()).constellations.map(c=>c.id);
for(let k=1;k<seen.length;k++)assert.equal(srcIds.indexOf(seen[k]),(srcIds.indexOf(seen[k-1])+1)%88,'next in 1-88 order');
els.get('cmCount').value='88';els.get('cmCount').oninput();els.get('cmPeriod').value='';
console.log('PASS: 1 to 88 constellations pulse out at once (1, 5, 12, 40, 88 at desktop and phone sizes); one-at-a-time follows 1-88 order.');}
