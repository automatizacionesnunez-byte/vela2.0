(function () {
  const body = document.body;
  const header = document.querySelector('header');
  if (!header) return;

  header.classList.add('vela-site-header');
  const isHome = /(?:^|\/)(?:index|inicio)\.html$/.test(window.location.pathname) || window.location.pathname.endsWith('/');
  if (isHome) body.classList.add('vela-home');
  const pageName = window.location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  body.classList.add(`vela-page-${pageName === 'inicio' ? 'index' : pageName}`);

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
})();
