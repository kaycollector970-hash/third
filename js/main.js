(function () {
  var AFFILIATE_URL = 'https://enterthefun.com/mWzpBj';

  document.querySelectorAll('[data-affiliate]').forEach(function (el) {
    el.addEventListener('click', function () {
      window.location.href = AFFILIATE_URL;
    });
  });

  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      var open = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', open);
      menuBtn.setAttribute('aria-expanded', String(!open));
      var iconOpen = menuBtn.querySelector('[data-icon="menu"]');
      var iconClose = menuBtn.querySelector('[data-icon="close"]');
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden', !open);
        iconClose.classList.toggle('hidden', open);
      }
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        var iconOpen = menuBtn.querySelector('[data-icon="menu"]');
        var iconClose = menuBtn.querySelector('[data-icon="close"]');
        if (iconOpen && iconClose) {
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      });
    });
  }

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = AFFILIATE_URL;
    });
  }

  var heroBanner = document.getElementById('hero-banner');
  if (heroBanner) {
    heroBanner.addEventListener('click', function () {
      window.location.href = AFFILIATE_URL;
    });
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
})();
