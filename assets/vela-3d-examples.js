(() => {
  const shell = document.querySelector('[data-vela-biography-scene]');
  const showcase = document.querySelector('[data-vela-biography-showcase]');
  if (!shell || !showcase) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const templates = {
    nude: {
      name: 'Carlota', label: 'NUDE', caption: 'La historia de una vida plena', style: 'Calida, elegante y atemporal', accent: '#c5a982',
      pages: [['assets/templates/nude_page_01.jpg', 'assets/templates/nude_page_02.jpg'], ['assets/templates/nude_page_03.jpg', 'assets/templates/nude_page_04.jpg'], ['assets/templates/nude_page_05.jpg', 'assets/templates/nude_page_06.jpg'], ['assets/templates/nude_page_07.jpg', 'assets/templates/nude_page_08.jpg']],
      memories: ['assets/templates/nude_page_07.jpg', 'assets/templates/nude_page_05.jpg', 'assets/carmen-hero-1600.webp', 'assets/carmen-family-1200.webp'],
      chapters: ['Origenes', 'Infancia', 'Momentos clave', 'Legado']
    },
    noir: {
      name: 'Juan', label: 'NOIR', caption: 'El companero de camino', style: 'Moderna, sobria y con caracter', accent: '#d7c1a5',
      pages: [['assets/templates/noir_page_01.jpg', 'assets/templates/noir_page_02.jpg'], ['assets/templates/noir_page_03.jpg', 'assets/templates/noir_page_04.jpg'], ['assets/templates/noir_page_05.jpg', 'assets/templates/noir_page_06.jpg'], ['assets/templates/noir_page_04.jpg', 'assets/templates/noir_page_08.jpg']],
      memories: ['assets/templates/noir_page_01.jpg', 'assets/templates/noir_page_04.jpg', 'assets/tecnologia-sensibilidad.webp', 'assets/vela-sobre-qr-1200.webp'],
      chapters: ['Origenes', 'El caracter', 'Una vida plena', 'Lo que permanece']
    },
    letter: {
      name: 'Carmen', label: 'LETTER', caption: 'Una vida hecha de pequenas historias', style: 'Clasica, cercana y llena de memoria', accent: '#8d504b',
      pages: [['assets/templates/letter_page_01.jpg', 'assets/templates/letter_page_02.jpg'], ['assets/templates/letter_page_03.jpg', 'assets/templates/letter_page_04.jpg'], ['assets/templates/letter_page_05.jpg', 'assets/templates/letter_page_07.jpg'], ['assets/templates/letter_page_08.jpg', 'assets/templates/letter_page_09.jpg']],
      memories: ['assets/carmen-family-1200.webp', 'assets/carmen-hero-1600.webp', 'assets/templates/letter_page_04.jpg', 'assets/templates/letter_page_08.jpg'],
      chapters: ['La carta', 'Familia', 'Viajes y hallazgos', 'Para siempre']
    }
  };

  const state = {
    mode: 'gallery',
    template: 'nude',
    chapter: 0,
    quality: window.innerWidth < 700 ? 'mobile' : window.innerWidth < 1000 ? 'tablet' : 'desktop',
    busy: false,
    renderer: null,
    scene: null,
    camera: null,
    baseZ: 1000,
    raf: 0,
    visible: true,
    lastCard: null
  };

  const $ = (selector) => showcase.querySelector(selector);
  const $$ = (selector) => [...showcase.querySelectorAll(selector)];
  const layer = $('[data-vela-gallery-layer]');
  const gallery = $('[data-vela-gallery-scene]');
  const reader = $('[data-vela-gallery-reader]');
  const spread = $('[data-vela-gallery-spread]');
  const cards = $$('[data-vela-gallery-card]');

  function data() { return templates[state.template]; }

  function ensureBottomline() {
    const meta = $('.vela-scene-meta');
    if (!meta || $('.vela-gallery-bottomline')) return;
    meta.insertAdjacentHTML('afterend', '<div class="vela-gallery-bottomline"><p><span data-vela-bottomline-label>Una historia no se archiva: se vuelve a visitar.</span> <em>VELA convierte recuerdos dispersos en una lectura que permanece.</em></p><a href="precios.html">Crear mi biografía <span aria-hidden="true">↗</span></a></div>');
  }

  function updateHtml() {
    ensureBottomline();
    const current = data();
    const hint = $('.vela-3d-hint');
    if (hint) hint.textContent = state.mode === 'gallery'
      ? 'Selecciona una pieza para entrar'
      : 'Rueda para cambiar de capítulo · arrastra o usa las flechas';
    const instruction = $('.vela-archive-instruction');
    if (instruction) instruction.textContent = state.mode === 'gallery'
      ? 'Explora tres ediciones y entra en la historia que quieras conocer.'
      : 'Navega por los capítulos y descubre cómo una vida se convierte en memoria.';
    shell.dataset.template = state.template;
    shell.dataset.velaState = state.mode;
    showcase.dataset.velaState = state.mode;
    shell.setAttribute('aria-label', state.mode === 'reader' ? `Sala de lectura digital de ${current.name}` : 'Galeria digital de historias VELA');
    document.documentElement.style.setProperty('--vela-scene-accent', current.accent);
    const bottomline = $('[data-vela-bottomline-label]');
    if (bottomline) bottomline.textContent = state.mode === 'reader'
      ? `${current.name}: ${current.chapters[state.chapter]}.`
      : 'Una historia no se archiva: se vuelve a visitar.';

    $('[data-vela-reader-kicker]').textContent = `PLANTILLA ${current.label}`;
    $('[data-vela-reader-name]').textContent = current.name;
    $('[data-vela-reader-caption]').textContent = current.caption;
    $('[data-vela-scene-kicker]').textContent = state.mode === 'reader' ? `EDICION ${current.label}` : 'GALERIA DIGITAL';
    $('[data-vela-scene-name]').textContent = state.mode === 'reader' ? current.name : 'Tres formas de conservar una vida';
    $('[data-vela-scene-caption]').textContent = state.mode === 'reader' ? current.caption : 'Selecciona una edicion para entrar en su memoria.';
    $('[data-vela-meta-title]').textContent = current.chapters[state.chapter];
    $('[data-vela-meta-style]').textContent = current.style;
    $('[data-vela-meta-format]').textContent = 'Lectura digital · PDF · QR';
    $('[data-vela-status-text]').textContent = state.mode === 'reader' ? 'Historia abierta · usa las flechas para avanzar' : 'Selecciona una pieza para entrar';
    $('[data-vela-fallback-template]').textContent = current.label;
    $('[data-vela-fallback-cover]').src = current.pages[state.chapter][0];
    $('[data-vela-fallback-cover]').alt = `Biografia digital de ${current.name}`;

    $('[data-vela-gallery-page-left]').src = current.pages[state.chapter][0];
    $('[data-vela-gallery-page-right]').src = current.pages[state.chapter][1];
    $('[data-vela-gallery-memory]').src = current.memories[state.chapter];
    $('[data-vela-gallery-note]').textContent = current.chapters[state.chapter];
    $('[data-vela-gallery-number]').textContent = String(state.chapter + 1).padStart(2, '0');

    $$('[data-vela-gallery-cover]').forEach((image) => {
      const key = image.dataset.velaGalleryCover;
      image.src = templates[key].pages[0][0];
    });
    $$('[data-vela-chapter]').forEach((button) => {
      const active = Number(button.dataset.velaChapter) === state.chapter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
    $$('[data-vela-chapter-label]').forEach((item) => {
      const active = Number(item.dataset.velaChapterLabel) === state.chapter;
      item.textContent = current.chapters[Number(item.dataset.velaChapterLabel)];
      item.parentElement.classList.toggle('is-active', active);
    });
    $$('[data-vela-archive-tab]').forEach((button) => {
      const active = button.dataset.velaArchiveTab === state.template;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
  }

  function setStatus(message) {
    const status = $('[data-vela-status-text]');
    if (status) status.textContent = message;
  }

  function tween(target, values, duration, ease = 'power3.out') {
    if (window.gsap && !prefersReducedMotion) return window.gsap.to(target, { ...values, duration, ease });
    Object.assign(target.style, values.css || {});
    return { then(callback) { window.setTimeout(callback, duration * 1000); } };
  }

  function resetTransforms() {
    if (!window.gsap) return;
    window.gsap.set(cards, { clearProps: 'transform,opacity,filter' });
    window.gsap.set(reader, { clearProps: 'transform,opacity' });
    window.gsap.set(spread, { clearProps: 'transform,opacity' });
  }

  function galleryToReader(template) {
    if (!templates[template] || state.busy) return;
    state.busy = true;
    delete shell.dataset.hoverTemplate;
    state.template = template;
    state.chapter = 0;
    state.mode = 'reader';
    state.lastCard = cards.find((card) => card.dataset.velaGalleryCard === template) || cards[0];
    updateHtml();
    layer.classList.add('is-reader', 'is-transitioning');
    const selected = state.lastCard;
    const others = cards.filter((card) => card !== selected);
    const tl = window.gsap && !prefersReducedMotion ? window.gsap.timeline() : null;
    if (tl) {
      tl.to(others, { opacity: .16, scale: .78, y: 24, duration: .48, stagger: .04, ease: 'power2.inOut' }, 0)
        .to(selected, { scale: 1.08, y: -12, rotation: 0, duration: .7, ease: 'power3.out' }, 0)
        .fromTo(reader, { opacity: 0, scale: .72, y: 34 }, { opacity: 1, scale: 1, y: 0, duration: .88, ease: 'power3.out' }, .16)
        .fromTo($('[data-vela-gallery-memory]'), { opacity: 0, x: 38, rotation: 12 }, { opacity: 1, x: 0, rotation: 7, duration: .55, ease: 'power2.out' }, .52)
        .fromTo($('.vela-gallery-note'), { opacity: 0, x: -28, rotation: -12 }, { opacity: 1, x: 0, rotation: -6, duration: .55, ease: 'power2.out' }, .58)
        .call(() => { layer.classList.remove('is-transitioning'); state.busy = false; }, null, .95);
    } else {
      layer.classList.remove('is-transitioning'); state.busy = false;
    }
    window.dispatchEvent(new CustomEvent('vela-template-select', { detail: { template } }));
    window.dispatchEvent(new CustomEvent('vela-reader-open', { detail: { template, chapter: 0 } }));
  }

  function readerToGallery() {
    if (state.busy) return;
    state.busy = true;
    delete shell.dataset.hoverTemplate;
    layer.classList.add('is-transitioning');
    const tl = window.gsap && !prefersReducedMotion ? window.gsap.timeline() : null;
    if (tl) {
      tl.to(reader, { opacity: 0, scale: .72, y: 30, duration: .62, ease: 'power2.in' }, 0)
        .to(cards, { opacity: 1, scale: 1, y: 0, rotation: 0, duration: .7, stagger: .04, ease: 'power3.out' }, .16)
        .call(() => { layer.classList.remove('is-reader', 'is-transitioning'); resetTransforms(); state.mode = 'gallery'; state.busy = false; updateHtml(); state.lastCard?.focus({ preventScroll: true }); }, null, .76);
    } else {
      layer.classList.remove('is-reader', 'is-transitioning'); state.mode = 'gallery'; state.busy = false; updateHtml();
    }
    window.dispatchEvent(new CustomEvent('vela-reader-close', { detail: { template: state.template } }));
  }

  function changeTemplate(template) {
    if (!templates[template] || state.busy) return;
    if (state.mode === 'gallery') return galleryToReader(template);
    state.busy = true;
    const old = state.template;
    const tl = window.gsap && !prefersReducedMotion ? window.gsap.timeline() : null;
    if (tl) {
      tl.to(reader, { opacity: 0, x: template === 'letter' ? -32 : 32, duration: .28, ease: 'power2.in' })
        .call(() => { state.template = template; state.chapter = 0; updateHtml(); })
        .fromTo(reader, { opacity: 0, x: template === 'letter' ? 32 : -32 }, { opacity: 1, x: 0, duration: .58, ease: 'power3.out' })
        .call(() => { state.busy = false; });
    } else { state.template = template; state.chapter = 0; state.busy = false; updateHtml(); }
    window.dispatchEvent(new CustomEvent('vela-template-select', { detail: { template, previous: old } }));
  }

  function changeChapter(template, chapter, direction = 1) {
    if (!templates[template] || state.mode !== 'reader' || state.busy) return;
    state.busy = true;
    const nextChapter = (chapter + 4) % 4;
    const tl = window.gsap && !prefersReducedMotion ? window.gsap.timeline() : null;
    if (tl) {
      tl.to(spread, { x: direction > 0 ? -34 : 34, opacity: .18, duration: .28, ease: 'power2.in' }, 0)
        .to($('[data-vela-gallery-memory]'), { x: direction > 0 ? 28 : -28, opacity: 0, duration: .26, ease: 'power2.in' }, 0)
        .call(() => { state.template = template; state.chapter = nextChapter; updateHtml(); })
        .set(spread, { x: direction > 0 ? 34 : -34 })
        .set($('[data-vela-gallery-memory]'), { x: direction > 0 ? -28 : 28 })
        .to(spread, { x: 0, opacity: 1, duration: .42, ease: 'power3.out' }, .3)
        .to($('[data-vela-gallery-memory]'), { x: 0, opacity: 1, duration: .42, ease: 'power2.out' }, .32)
        .call(() => { state.busy = false; });
    } else { state.chapter = nextChapter; updateHtml(); state.busy = false; }
    window.dispatchEvent(new CustomEvent('vela-chapter-change', { detail: { template, chapter: nextChapter, direction } }));
  }

  function setPointerTilt(x, y) {
    const cx = Math.max(-1, Math.min(1, x));
    const cy = Math.max(-1, Math.min(1, y));
    if (!prefersReducedMotion) {
      shell.style.setProperty('--vela-pointer-x', `${(50 + cx * 24).toFixed(2)}%`);
      shell.style.setProperty('--vela-pointer-y', `${(38 + cy * 18).toFixed(2)}%`);
    }
    if (!state.camera || prefersReducedMotion) return;
    state.camera.position.x += (cx * 55 - state.camera.position.x) * .08;
    state.camera.position.y += (-cy * 28 - state.camera.position.y) * .08;
    state.camera.lookAt(0, 0, 0);
  }

  function createGalleryScene() {
    import('./vendor/three/three.module.js').then((THREE) => import('./vendor/three/CSS3DRenderer.js').then(({ CSS3DRenderer, CSS3DObject }) => {
      state.scene = new THREE.Scene();
      state.camera = new THREE.PerspectiveCamera(34, 1, 1, 5000);
      state.camera.position.z = state.baseZ;
      state.renderer = new CSS3DRenderer();
      state.renderer.domElement.className = 'vela-gallery-css-renderer';
      state.renderer.domElement.setAttribute('aria-hidden', 'true');
      gallery.appendChild(state.renderer.domElement);
      state.renderer.domElement.appendChild(layer);
      const object = new CSS3DObject(layer);
      state.scene.add(object);
      const resize = () => {
        const width = gallery.clientWidth;
        const height = gallery.clientHeight;
        if (!width || !height) return;
        const fovRad = THREE.MathUtils.degToRad(state.camera.fov * 0.5);
        state.baseZ = (0.5 / Math.tan(fovRad)) * height;
        state.camera.position.z = state.baseZ;
        state.camera.aspect = width / height;
        state.camera.updateProjectionMatrix();
        state.renderer.setSize(width, height);
      };
      const render = () => { if (!state.visible || !state.renderer) return; state.renderer.render(state.scene, state.camera); state.raf = requestAnimationFrame(render); };
      const observer = new ResizeObserver(resize); observer.observe(gallery); resize();
      const visibility = new IntersectionObserver(([entry]) => { state.visible = entry.isIntersecting; if (state.visible && !prefersReducedMotion && !state.raf) state.raf = requestAnimationFrame(render); if (!state.visible && state.raf) { cancelAnimationFrame(state.raf); state.raf = 0; } }, { threshold: .05 });
      visibility.observe(gallery);
      state.dispose = () => { observer.disconnect(); visibility.disconnect(); if (state.raf) cancelAnimationFrame(state.raf); state.renderer?.domElement.remove(); state.renderer = null; };
      if (!prefersReducedMotion) state.raf = requestAnimationFrame(render); else state.renderer.render(state.scene, state.camera);
      showcase.classList.remove('has-scene-error');
      $('[data-vela-scene-loading]')?.classList.add('is-hidden');
      setStatus('Selecciona una pieza para entrar');
      window.dispatchEvent(new CustomEvent('vela-gallery-ready'));
    })).catch(() => { $('[data-vela-scene-loading]')?.classList.add('is-hidden'); showcase.classList.add('is-css3d-fallback'); setStatus('Galeria editorial disponible'); window.dispatchEvent(new CustomEvent('vela-scene-error')); });
  }

  window.VelaArchive3D = {
    createGalleryScene,
    selectTemplate: changeTemplate,
    openReader: galleryToReader,
    closeReader: readerToGallery,
    setChapter: changeChapter,
    setPointerTilt,
    setQualityTier(tier) { if (['desktop', 'tablet', 'mobile'].includes(tier)) state.quality = tier; },
    disposeGalleryScene() { state.dispose?.(); },
    // Compatibilidad con los controles existentes durante la transición de implementación.
    selectEnvelope: galleryToReader,
    closeBiography: readerToGallery,
    setBiography: changeTemplate
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => galleryToReader(card.dataset.velaGalleryCard));
    const setHover = () => {
      if (state.mode === 'gallery') shell.dataset.hoverTemplate = card.dataset.velaGalleryCard;
    };
    const setFocusHover = () => {
      if (state.mode === 'gallery' && card.matches(':focus-visible')) shell.dataset.hoverTemplate = card.dataset.velaGalleryCard;
    };
    const clearHover = () => {
      if (shell.dataset.hoverTemplate === card.dataset.velaGalleryCard) delete shell.dataset.hoverTemplate;
    };
    card.addEventListener('pointerenter', setHover);
    card.addEventListener('pointerleave', clearHover);
    card.addEventListener('focus', setFocusHover);
    card.addEventListener('blur', clearHover);
  });
  $$('[data-vela-archive-tab]').forEach((button) => button.addEventListener('click', () => changeTemplate(button.dataset.velaArchiveTab)));
  $('[data-vela-close]')?.addEventListener('click', readerToGallery);
  $$('[data-vela-chapter]').forEach((button) => button.addEventListener('click', () => changeChapter(state.template, Number(button.dataset.velaChapter), Number(button.dataset.velaChapter) >= state.chapter ? 1 : -1)));
  $('[data-vela-chapter-prev]')?.addEventListener('click', () => changeChapter(state.template, state.chapter - 1, -1));
  $('[data-vela-chapter-next]')?.addEventListener('click', () => changeChapter(state.template, state.chapter + 1, 1));
  shell.addEventListener('pointermove', (event) => { const rect = shell.getBoundingClientRect(); setPointerTilt(((event.clientX - rect.left) / rect.width) * 2 - 1, ((event.clientY - rect.top) / rect.height) * 2 - 1); }, { passive: true });
  shell.addEventListener('pointerleave', () => setPointerTilt(0, 0));
  let pointerStart = 0;
  let wheelLock = false;
  shell.addEventListener('pointerdown', (event) => { pointerStart = event.clientX; });
  shell.addEventListener('pointerup', (event) => { const distance = event.clientX - pointerStart; if (Math.abs(distance) > 55 && state.mode === 'reader') changeChapter(state.template, state.chapter + (distance < 0 ? 1 : -1), distance < 0 ? 1 : -1); });
  shell.addEventListener('wheel', (event) => {
    if (state.mode !== 'reader' || state.busy || Math.abs(event.deltaY) < 18) return;
    event.preventDefault();
    if (wheelLock) return;
    wheelLock = true;
    const direction = event.deltaY > 0 ? 1 : -1;
    changeChapter(state.template, state.chapter + direction, direction);
    window.setTimeout(() => { wheelLock = false; }, prefersReducedMotion ? 180 : 620);
  }, { passive: false });
  shell.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); changeChapter(state.template, state.chapter - 1, -1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); changeChapter(state.template, state.chapter + 1, 1); }
    if (event.key === 'Home') { event.preventDefault(); changeTemplate('nude'); }
    if (event.key === 'End') { event.preventDefault(); changeTemplate('letter'); }
    if (event.key === 'Escape' && state.mode === 'reader') { event.preventDefault(); readerToGallery(); }
  });

  updateHtml();
  createGalleryScene();
})();
