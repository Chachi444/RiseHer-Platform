document.addEventListener('DOMContentLoaded', function () {
  // newsletter form handling (mirrors previous inline behavior)
  var form = document.getElementById('newsletterForm');
  var input = document.getElementById('newsletterEmail');
  var msg = document.getElementById('newsletterMsg');

  if (!form) {
    console.info('newsletterForm not found; index.js loaded');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!input || !msg) return;

    if (!input.checkValidity()) {
      msg.hidden = false;
      msg.className = 'newsletter-msg error';
      msg.textContent = 'Please enter a valid email address.';
      input.focus();
      return;
    }

    msg.hidden = false;
    msg.className = 'newsletter-msg success';
    msg.textContent = 'Thanks — you are subscribed! Check your inbox to confirm.';
    input.value = '';
  });

  // Sign-in form handling (moved from sign-in.html)
  var signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('email');
      var pwd = document.getElementById('password');
      if (!email || !pwd || !email.checkValidity() || !pwd.value) {
        alert('Please enter a valid email and password.');
        return;
      }
      // Replace with real authentication flow
      alert('Signed in (demo) — replace with real auth flow.');
    });
  }

  
  document.querySelectorAll('.pill-icon').forEach(function (img) {
    function makeFallback() {
      
      const alt = (img.alt || '').trim();
      const letter = alt ? alt.charAt(0).toUpperCase() : '?';
      const span = document.createElement('span');
      span.className = 'pill-icon-fallback';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = letter;
      
      img.replaceWith(span);
    }
    
    if (img.complete && img.naturalWidth === 0) {
      makeFallback();
      return;
    }
    
    img.addEventListener('error', makeFallback, { once: true });
  });

  // Mobile nav toggle
  var hamburger = document.querySelector('.hamburger');
  var navBar = document.querySelector('.nav-bar');
  var navLinks = document.getElementById('navLinks');

  if (hamburger && navBar && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navBar.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navBar.classList.contains('open')) {
        navBar.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });

    // optional: close when clicking a nav link (mobile)
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && navBar.classList.contains('open')) {
        navBar.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});