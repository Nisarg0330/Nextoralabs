/* ============================================================
   NEXTORA LABS — shared site chrome & motion system.
   Loaded on every page. Homepage-only interactivity (the
   architecture trace / label-decode) lives in a small inline
   script on index.html instead, since those elements only
   exist there — everything here is safe when absent.

   Next keeps the document alive across client-side navigation,
   so anything that touches per-page elements goes in page() and
   is registered on window.nx — RouteBoot re-runs it on every
   route change. Listeners on persistent chrome (header, body)
   stay at IIFE level so they bind exactly once.
   ============================================================ */
(function(){
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- per-page: re-runs on every route change ---- */
  function page(){
    /* path lengths for any [data-r-draw] element on the page */
    document.querySelectorAll('[data-r-draw]').forEach(function(p){
      var L=300; try{L=Math.ceil(p.getTotalLength());}catch(e){}
      p.style.setProperty('--L',L);
    });

    /* reveal observer */
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{threshold:.14,rootMargin:'0px 0px -70px 0px'});
    document.querySelectorAll('[data-r-fade]:not(.h-el),[data-r-slide],[data-r-rise]:not(.h-el),.msk:not(.hl),[data-por],#track,#steps')
      .forEach(function(el){io.observe(el);});

    /* clip-path elements report a zero intersection rect at threshold>0 */
    var ioW=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ioW.unobserve(e.target);}});
    },{threshold:0,rootMargin:'0px 0px -90px 0px'});
    document.querySelectorAll('[data-r-wipe]').forEach(function(el){ioW.observe(el);});

    /* entrance boot: nav fade-in + any hero mask-line reveal */
    requestAnimationFrame(function(){
      document.body.classList.add('up');
      document.querySelectorAll('.h-el').forEach(function(e){e.classList.add('in');});
      document.querySelectorAll('.msk.hl').forEach(function(e){e.classList.add('in');});
    });
  }
  (window.nx=window.nx||[]).push(page);
  page();

  /* ---- persistent chrome: binds once for the whole session ---- */

  /* nav scroll state */
  var hd=document.getElementById('hd');
  if(hd){ addEventListener('scroll',function(){hd.classList.toggle('stuck',scrollY>40);},{passive:true}); }

  /* scroll-linked ambient light */
  var lw=document.getElementById('lightwash');
  if(lw){
    addEventListener('scroll',function(){
      if(RM) return;
      var p=scrollY/(document.body.scrollHeight-innerHeight||1);
      lw.style.setProperty('--ly',(p*innerHeight*0.9)+'px');
    },{passive:true});
  }

  /* magnetic primary CTA */
  var mg=document.getElementById('magnet');
  if(mg&&!RM){
    mg.addEventListener('mousemove',function(e){
      var r=mg.getBoundingClientRect();
      var x=(e.clientX-(r.left+r.width/2))*.22, y=(e.clientY-(r.top+r.height/2))*.32;
      mg.style.transform='translate('+x+'px,'+y+'px)';
    });
    mg.addEventListener('mouseleave',function(){mg.style.transform='';});
  }

  /* mobile menu */
  var mb=document.getElementById('menuBtn');
  if(mb){
    mb.addEventListener('click',function(){
      document.body.classList.toggle('nav-open');
    });
    addEventListener('keydown',function(e){
      if(e.key==='Escape') document.body.classList.remove('nav-open');
    });
  }
})();
