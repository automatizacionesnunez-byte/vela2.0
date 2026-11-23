(function () {
  const body = document.body;
  const header = document.querySelector('header');
  if (!header) return;

  header.classList.add('vela-site-header');
  const normalizedPath = window.location.pathname.replace(/\/+$/, '');
  const isHome = normalizedPath === '' || /(?:^|\/)(?:index|inicio)(?:\.html)?$/.test(normalizedPath);
  if (isHome) body.classList.add('vela-home');
  const segments = normalizedPath.split('/').filter(Boolean);
  const lastSeg = segments.length > 0 ? segments[segments.length - 1].replace(/\.html$/, '') : 'index';
  const pageName = lastSeg === 'inicio' ? 'index' : lastSeg;
  body.classList.add(`vela-page-${pageName}`);

  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
      menuBtn.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    });
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Abrir menú');
    }));
  }

  // --- Selector de Idiomas Dropdown (Desktop) y Selector en Móvil ---
  const currentLangLabel = document.getElementById('current-lang-label');
  const langMenu = document.getElementById('vela-lang-menu');
  const langTrigger = document.getElementById('vela-lang-trigger');
  const chevron = document.getElementById('vela-lang-chevron');

  // El toggle de apertura y cierre lo gestiona de forma centralizada window.toggleVelaLangMenu en Navbar.astro

  const setLanguage = (code) => {
    if (currentLangLabel) currentLangLabel.textContent = code;
    document.querySelectorAll('.vela-lang-item').forEach((item) => {
      const active = item.getAttribute('data-lang') === code;
      item.classList.toggle('is-active', active);
      const span = item.querySelector('span:first-child');
      if (span) {
        if (active) {
          span.className = 'font-medium text-[#682D35]';
        } else {
          span.className = '';
        }
      }
    });

    if (langMenu) {
      langMenu.style.display = 'none';
      langMenu.classList.add('hidden');
    }
    if (langTrigger) langTrigger.setAttribute('aria-expanded', 'false');
    if (chevron) chevron.style.transform = 'rotate(0deg)';

    if (window.VelaI18n && typeof window.VelaI18n.setLanguage === 'function') {
      window.VelaI18n.setLanguage(code);
      return;
    }
    document.querySelectorAll('.vela-lang-btn').forEach((btn) => {
      const active = btn.getAttribute('data-lang') === code;
      btn.classList.toggle('is-selected', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-mobile-lang]').forEach((btn) => {
      const active = btn.getAttribute('data-mobile-lang') === code;
      btn.className = active
        ? 'px-2.5 py-1 text-xs font-semibold rounded-sm bg-vela-chocolate text-white'
        : 'px-2.5 py-1 text-xs font-semibold rounded-sm text-vela-chocolate/75 hover:bg-vela-crema';
    });
    document.documentElement.setAttribute('data-lang', code.toLowerCase());
  };

  document.querySelectorAll('.vela-lang-item').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const code = item.getAttribute('data-lang');
      if (code) setLanguage(code);
    });
  });

  document.querySelectorAll('.vela-lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-lang');
      if (code) setLanguage(code);
    });
  });

  document.querySelectorAll('[data-mobile-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-mobile-lang');
      if (code) setLanguage(code);
    });
  });
})();
