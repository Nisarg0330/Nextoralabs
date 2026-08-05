/* Registered on window.nx so the chips re-bind after client-side
   navigation back to /blog — see RouteBoot.tsx. */
(function(){
  function page(){
    document.querySelectorAll('#filterRow .chip').forEach(function(btn){
      if(btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', function(){
        document.querySelectorAll('#filterRow .chip').forEach(function(b){b.classList.remove('on');});
        btn.classList.add('on');
        var f = btn.dataset.f;
        var any = false;
        document.querySelectorAll('.feat[data-cat], #blogList .wr[data-cat]').forEach(function(row){
          var show = (f === 'all' || row.dataset.cat === f);
          row.closest('a').style.display = show ? '' : 'none';
          if(show) any = true;
        });
        document.getElementById('emptyState').style.display = any ? 'none' : 'block';
      });
    });
  }
  (window.nx=window.nx||[]).push(page);
  page();
})();
