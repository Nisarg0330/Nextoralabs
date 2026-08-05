/* Homepage-only interactivity — the architecture diagram lives
   only on the homepage, so this stays out of the shared main.js.

   Registered on window.nx so the diagram re-boots when you navigate
   back to / client-side (see RouteBoot.tsx); the dataset.bound guard
   on #arch keeps a second visit from double-binding the rows. */
(function(){
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;

var GLY='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#@%&';
function decode(el,delay){
  var final=el.dataset.t; if(!final) return;
  if(RM){el.textContent=final;return;}
  el.textContent='';
  setTimeout(function(){
    var i=0, ticks=0;
    var id=setInterval(function(){
      ticks++;
      var out='';
      for(var k=0;k<final.length;k++){
        if(k<i) out+=final[k];
        else if(final[k]===' ') out+=' ';
        else out+=GLY[(Math.random()*GLY.length)|0];
      }
      el.textContent=out;
      if(ticks%2===0) i++;
      if(i>final.length){clearInterval(id);el.textContent=final;}
    },28);
  },delay);
}

var MAP=[
 {n:['n-br','n-gw','n-core','n-db'],e:['e-br-gw','e-gw-core','e-core-db'],
  note:'// tracing: browser → gateway → core services → postgres',
  c:['React','Next.js','TypeScript','Node.js']},
 {n:['n-br','n-gw','n-auth','n-core'],e:['e-br-gw','e-gw-auth','e-gw-core'],
  note:'// tracing: mobile client → gateway → identity → core services',
  c:['React Native','Swift','Kotlin']},
 {n:['n-gw','n-ai','n-db'],e:['e-gw-ai','e-ai-db'],
  note:'// tracing: gateway → model runtime → postgres',
  c:['LLM integration','Retrieval','Applied ML']},
 {n:['n-br'],e:[],
  note:'// tracing: the client surface — everything a person actually touches',
  c:['Research','Prototyping','Design systems']},
 {n:['n-br','n-gw','n-core','n-auth','n-db'],e:['e-br-gw','e-gw-core','e-gw-auth','e-core-db','e-auth-db'],
  note:'// tracing: the whole first slice, end to end',
  c:['Architecture','Scoping','Rapid delivery']}
];

function page(){
  var arch=document.getElementById('arch');
  if(!arch || arch.dataset.bound) return;
  arch.dataset.bound='1';

  var items=document.querySelectorAll('.ri'),
      note=document.getElementById('note'), chips=document.getElementById('chips');
  function trace(i){
    var m=MAP[i];
    document.querySelectorAll('#arch .nd').forEach(function(n){n.classList.remove('lit');});
    document.querySelectorAll('#arch .ed').forEach(function(n){n.classList.remove('lit');});
    m.n.forEach(function(id){var e=document.getElementById(id); if(e)e.classList.add('lit');});
    m.e.forEach(function(id){var e=document.getElementById(id); if(e)e.classList.add('lit');});
    if(note) note.textContent=m.note;
    if(chips) chips.innerHTML=m.c.map(function(x){return '<span class="chip">'+x+'</span>';}).join('');
    items.forEach(function(el,k){el.classList.toggle('on',k===i);});
  }
  items.forEach(function(el){
    el.addEventListener('mouseenter',function(){trace(+el.dataset.i);});
    el.addEventListener('focus',function(){trace(+el.dataset.i);});
    el.addEventListener('click',function(){trace(+el.dataset.i);});
  });

  requestAnimationFrame(function(){
    var eds=document.querySelectorAll('#arch .ed'), nds=document.querySelectorAll('#arch .nd');
    var t0=RM?0:940;
    nds.forEach(function(e,i){e.style.setProperty('--d',(t0+i*90)+'ms');e.classList.add('in');});
    eds.forEach(function(e,i){e.style.setProperty('--d',(t0+140+i*80)+'ms');e.classList.add('in');});
    document.querySelectorAll('#arch .dec').forEach(function(e,i){decode(e,t0+120+i*90);});
    setTimeout(function(){trace(0);},RM?0:1750);
  });
}
(window.nx=window.nx||[]).push(page);
page();
})();
