/* ============================================================
   Contact form — client-side validation + submit states.
   Posts to /api/contact (see api/contact/send.js). That endpoint
   is a stub until a real backend is deployed, so on network
   failure this falls back to a pre-filled mailto: link rather
   than pretending the message sent. Swap SUBMIT_ENDPOINT once
   the backend is live — nothing else here needs to change.

   Registered on window.nx so it binds after client-side navigation
   to /contact (see RouteBoot.tsx); the dataset.bound guard keeps a
   second visit from attaching a second submit handler.
   ============================================================ */
(function(){
  var SUBMIT_ENDPOINT = '/api/contact/send';

  function page(){
    var form = document.getElementById('contactForm');
    if(!form || form.dataset.bound) return;
    form.dataset.bound = '1';
    var btn = document.getElementById('submitBtn');
    var msg = document.getElementById('formMsg');

    function field(name){ return form.querySelector('[data-field="'+name+'"]'); }
    function setInvalid(name, on){ field(name).classList.toggle('invalid', on); }

    function validate(data){
      var ok = true;
      setInvalid('name', !data.name.trim()); if(!data.name.trim()) ok = false;
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
      setInvalid('email', !emailOk); if(!emailOk) ok = false;
      setInvalid('message', data.message.trim().length < 5); if(data.message.trim().length < 5) ok = false;
      return ok;
    }

    function showMsg(kind, text){
      msg.className = 'form-msg show ' + kind;
      msg.textContent = text;
    }

    function mailtoFallback(data){
      var subject = encodeURIComponent('Project inquiry — ' + (data.company || data.name));
      var body = encodeURIComponent(
        'Name: ' + data.name + '\n' +
        'Email: ' + data.email + '\n' +
        'Company: ' + (data.company || '—') + '\n' +
        'Interested in: ' + (data.service || '—') + '\n\n' +
        data.message
      );
      return 'mailto:info@nextoralabs.com?subject=' + subject + '&body=' + body;
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();

      var data = {
        name: form.name.value, email: form.email.value, company: form.company.value,
        service: form.service.value, message: form.message.value
      };
      if(!validate(data)){
        showMsg('bad', 'Please fix the highlighted fields before sending.');
        return;
      }

      btn.classList.add('loading'); btn.disabled = true;
      msg.className = 'form-msg';

      fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function(res){
        if(!res.ok) throw new Error('Server responded with an error');
        return res.json().catch(function(){ return {}; });
      })
      .then(function(){
        window.location.href = '/thank-you';
      })
      .catch(function(){
        // Backend isn't wired up yet — offer a working fallback instead
        // of a silent failure or a fake success message.
        btn.classList.remove('loading'); btn.disabled = false;
        showMsg('bad', "We couldn't reach the server just now. Click below to send this by email instead — nothing you wrote is lost.");
        var link = document.createElement('a');
        link.href = mailtoFallback(data);
        link.className = 'btn b2';
        link.style.marginTop = '14px';
        link.style.display = 'inline-flex';
        link.textContent = 'Send by email instead';
        if(!msg.querySelector('a')) msg.appendChild(link);
      });
    });

    // clear invalid state as the person fixes a field
    ['name','email','message'].forEach(function(n){
      var el = form[n];
      if(el) el.addEventListener('input', function(){ setInvalid(n, false); });
    });
  }
  (window.nx=window.nx||[]).push(page);
  page();
})();
