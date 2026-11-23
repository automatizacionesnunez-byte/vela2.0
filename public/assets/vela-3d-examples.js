(() => {
  const shell = document.querySelector('[data-vela-biography-scene]');
  const showcase = document.querySelector('[data-vela-biography-showcase]');
  if (!shell || !showcase) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const templates = {
    nude: {
      name: 'Carlota', label: 'NUDE', caption: 'La historia de una vida plena', style: 'Cálida, elegante y atemporal', accent: '#c5a982',
      pages: [
        ['/assets/templates/nude_page_01.jpg', '/assets/templates/nude_page_02.jpg'],
        ['/assets/templates/nude_page_03.jpg', '/assets/templates/nude_page_04.jpg'],
        ['/assets/templates/nude_page_05.jpg', '/assets/templates/nude_page_06.jpg'],
        ['/assets/templates/nude_page_07.jpg', '/assets/templates/nude_page_08.jpg'],
        ['/assets/templates/nude_page_09.jpg', '/assets/templates/nude_page_10.jpg'],
        ['/assets/templates/nude_page_11.jpg', '/assets/templates/nude_page_12.jpg'],
        ['/assets/templates/nude_page_13.jpg', '/assets/templates/nude_page_14.jpg'],
        ['/assets/templates/nude_page_15.jpg', '/assets/templates/nude_page_16.jpg'],
        ['/assets/templates/nude_page_17.jpg', '/assets/templates/nude_page_18.jpg'],
        ['/assets/templates/nude_page_19.jpg', '/assets/templates/nude_page_20.jpg']
      ],
      memories: [
        '/assets/templates/nude_page_07.jpg',
        '/assets/templates/nude_page_05.jpg',
        '/assets/carmen-hero-1600.webp',
        '/assets/carmen-family-1200.webp',
        '/assets/templates/nude_page_09.jpg',
        '/assets/templates/nude_page_11.jpg',
        '/assets/templates/nude_page_13.jpg',
        '/assets/templates/nude_page_15.jpg',
        '/assets/templates/nude_page_17.jpg',
        '/assets/templates/nude_page_19.jpg'
      ],
      chapters: [
        'Portada y Ex Libris',
        'Índice y Prólogo',
        'Línea de vida',
        '01. Orígenes',
        'Raíces familiares',
        '02. Infancia en Russafa',
        'Juegos y recuerdos',
        'Primeras aficiones',
        'Juventud y vocación',
        'Momentos y Legado'
      ]
    },
    noir: {
      name: 'Juan', label: 'NOIR', caption: 'El compañero de camino', style: 'Moderna, sobria y con carácter', accent: '#d7c1a5',
      pages: [
        ['/assets/templates/noir_page_01.jpg', '/assets/templates/noir_page_02.jpg'],
        ['/assets/templates/noir_page_03.jpg', '/assets/templates/noir_page_04.jpg'],
        ['/assets/templates/noir_page_05.jpg', '/assets/templates/noir_page_06.jpg'],
        ['/assets/templates/noir_page_07.jpg', '/assets/templates/noir_page_08.jpg'],
        ['/assets/templates/noir_page_09.jpg', '/assets/templates/noir_page_10.jpg'],
        ['/assets/templates/noir_page_11.jpg', '/assets/templates/noir_page_12.jpg'],
        ['/assets/templates/noir_page_13.jpg', '/assets/templates/noir_page_14.jpg'],
        ['/assets/templates/noir_page_15.jpg', '/assets/templates/noir_page_16.jpg'],
        ['/assets/templates/noir_page_17.jpg', '/assets/templates/noir_page_18.jpg'],
        ['/assets/templates/noir_page_19.jpg', '/assets/templates/noir_page_20.jpg']
      ],
      memories: [
        '/assets/templates/noir_page_01.jpg',
        '/assets/templates/noir_page_04.jpg',
        '/assets/tecnologia-sensibilidad.webp',
        '/assets/vela-sobre-qr-1200.webp',
        '/assets/templates/noir_page_09.jpg',
        '/assets/templates/noir_page_11.jpg',
        '/assets/templates/noir_page_13.jpg',
        '/assets/templates/noir_page_15.jpg',
        '/assets/templates/noir_page_17.jpg',
        '/assets/templates/noir_page_19.jpg'
      ],
      chapters: [
        'Portada y Dedicatoria',
        'Índice y Prólogo',
        'Línea de vida',
        '01. Orígenes gaditanos',
        'La estirpe y la mar',
        '02. Infancia en La Viña',
        'El fútbol y la calle',
        '03. Crecer y responsabilidades',
        'Juventud y trabajo',
        'Una vida que permanece'
      ]
    },
    letter: {
      name: 'Carmen', label: 'LETTER', caption: 'Una vida hecha de pequeñas historias', style: 'Clásica, cercana y llena de memoria', accent: '#8d504b',
      pages: [
        ['/assets/templates/letter_page_01.jpg', '/assets/templates/letter_page_02.jpg'],
        ['/assets/templates/letter_page_03.jpg', '/assets/templates/letter_page_04.jpg'],
        ['/assets/templates/letter_page_05.jpg', '/assets/templates/letter_page_06.jpg'],
        ['/assets/templates/letter_page_07.jpg', '/assets/templates/letter_page_08.jpg'],
        ['/assets/templates/letter_page_09.jpg', '/assets/templates/letter_page_10.jpg'],
        ['/assets/templates/letter_page_11.jpg', '/assets/templates/letter_page_12.jpg'],
        ['/assets/templates/letter_page_13.jpg', '/assets/templates/letter_page_14.jpg'],
        ['/assets/templates/letter_page_15.jpg', '/assets/templates/letter_page_16.jpg'],
        ['/assets/templates/letter_page_17.jpg', '/assets/templates/letter_page_18.jpg'],
        ['/assets/templates/letter_page_19.jpg', '/assets/templates/letter_page_20.jpg']
      ],
      memories: [
        '/assets/carmen-family-1200.webp',
        '/assets/carmen-hero-1600.webp',
        '/assets/templates/letter_page_04.jpg',
        '/assets/templates/letter_page_08.jpg',
        '/assets/templates/letter_page_09.jpg',
        '/assets/templates/letter_page_11.jpg',
        '/assets/templates/letter_page_13.jpg',
        '/assets/templates/letter_page_15.jpg',
        '/assets/templates/letter_page_17.jpg',
        '/assets/templates/letter_page_19.jpg'
      ],
      chapters: [
        'Portada y Año 1975',
        'Ex Libris y Prólogo',
        'Línea de vida',
        'Parte 1 - Orígenes',
        'Parte 2 - Crecer',
        'Parte 3 - Construir una vida',
        'Parte 4 - Momentos',
        'Parte 5 - Personas',
        'Vidas entrelazadas',
        'El legado compartido'
      ]
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
    lastCard: null,
    // Rendimiento: Render on demand & Lerp damping
    targetCamX: 0,
    targetCamY: 0,
    currentCamX: 0,
    currentCamY: 0,
    // Puntero desacoplado sincronizado a 60-120fps en RAF
    targetPointerX: 0,
    targetPointerY: 0,
    currentPointerX: 0,
    currentPointerY: 0,
    isDirty: true,
    activeAnimCount: 0,
    restFrames: 0
  };

  const $ = (selector) => showcase.querySelector(selector);
  const $$ = (selector) => [...showcase.querySelectorAll(selector)];
  const layer = $('[data-vela-gallery-layer]');
  const gallery = $('[data-vela-gallery-scene]');
  const reader = $('[data-vela-gallery-reader]');
  const spread = $('[data-vela-gallery-spread]');
  const cards = $$('[data-vela-gallery-card]');

  // Precargar imágenes adyacentes para evitar parpadeos
  const preloadedImages = new Set();
  function preloadImages(srcList) {
    srcList.forEach((src) => {
      if (!src || preloadedImages.has(src)) return;
      const img = new Image();
      img.src = src;
      preloadedImages.add(src);
    });
  }

  function preloadAdjacentChapters(template, currentChapter) {
    const cur = templates[template];
    if (!cur) return;
    const total = cur.pages.length;
    const prevChap = (currentChapter - 1 + total) % total;
    const nextChap = (currentChapter + 1) % total;
    preloadImages([
      ...cur.pages[prevChap],
      ...cur.pages[nextChap],
      cur.memories[prevChap],
      cur.memories[nextChap]
    ]);
  }

  function markDirty() {
    state.isDirty = true;
    state.restFrames = 0;
    startRenderLoop();
  }

  function startRenderLoop() {
    if (!state.visible || !state.renderer || state.raf) return;
    state.raf = requestAnimationFrame(renderTick);
  }

  function renderTick() {
    if (!state.visible || !state.renderer) {
      state.raf = 0;
      return;
    }

    let needsAnotherPass = false;

    // 1. Suavizado Lerp de puntero y cristal (Specular Glare) sincronizado en el frame exacto
    if (!prefersReducedMotion) {
      const dpx = state.targetPointerX - state.currentPointerX;
      const dpy = state.targetPointerY - state.currentPointerY;
      if (Math.abs(dpx) > 0.002 || Math.abs(dpy) > 0.002) {
        state.currentPointerX += dpx * 0.16;
        state.currentPointerY += dpy * 0.16;
        const cx = state.currentPointerX;
        const cy = state.currentPointerY;
        shell.style.setProperty('--vela-pointer-x', `${(50 + cx * 24).toFixed(1)}%`);
        shell.style.setProperty('--vela-pointer-y', `${(38 + cy * 18).toFixed(1)}%`);
        shell.style.setProperty('--vela-glare-x', `${(50 + cx * 35).toFixed(1)}%`);
        shell.style.setProperty('--vela-glare-y', `${(35 + cy * 30).toFixed(1)}%`);
        needsAnotherPass = true;
      }
    }

    // 2. Suavizado Lerp 60-120fps de la cámara 3D
    if (state.camera && !prefersReducedMotion) {
      const dx = state.targetCamX - state.currentCamX;
      const dy = state.targetCamY - state.currentCamY;

      if (Math.abs(dx) > 0.03 || Math.abs(dy) > 0.03) {
        state.currentCamX += dx * 0.16;
        state.currentCamY += dy * 0.16;
        state.camera.position.x = state.currentCamX;
        state.camera.position.y = state.currentCamY;
        state.camera.lookAt(0, 0, 0);
        needsAnotherPass = true;
      }
    }

    if (state.isDirty || needsAnotherPass || state.activeAnimCount > 0) {
      state.renderer.render(state.scene, state.camera);
      state.isDirty = false;
      state.restFrames = 0;
      state.raf = requestAnimationFrame(renderTick);
    } else {
      // Dejar estabilizar 5 frames adicionales antes de reposo completo
      state.restFrames++;
      if (state.restFrames < 5) {
        state.renderer.render(state.scene, state.camera);
        state.raf = requestAnimationFrame(renderTick);
      } else {
        state.raf = 0;
      }
    }
  }

  function data() { return templates[state.template]; }

  function ensureBottomline() {
    const meta = $('.vela-scene-meta');
    if (!meta || $('.vela-gallery-bottomline')) return;
    meta.insertAdjacentHTML('afterend', '<div class="vela-gallery-bottomline"><p><span data-vela-bottomline-label>Una historia no se archiva: se vuelve a visitar.</span> <em>VELA convierte recuerdos dispersos en una lectura que permanece.</em></p><a href="precios.html">Crear mi biografía <span aria-hidden="true">↗</span></a></div>');
  }

  function updateHtml() {
    const setText = (sel, val) => { const el = $(sel); if (el) el.textContent = val; };
    const setAttr = (sel, attr, val) => { const el = $(sel); if (el) el[attr] = val; };
    const current = data();
    const hint = $('.vela-3d-hint');
    if (hint) hint.textContent = state.mode === 'gallery'
      ? 'Selecciona una pieza para entrar'
      : 'Desliza o usa las flechas para explorar';
    const instruction = $('.vela-archive-instruction');
    if (instruction) instruction.textContent = state.mode === 'gallery'
      ? 'Explora tres ediciones y entra en la historia que quieras conocer.'
      : 'Navega por los capítulos y descubre cómo una vida se convierte en memoria.';
    shell.dataset.template = state.template;
    shell.dataset.velaState = state.mode;
    showcase.dataset.velaState = state.mode;
    shell.setAttribute('aria-label', state.mode === 'reader' ? `Sala de lectura digital de ${current.name}` : 'Galería digital de historias VELA');
    document.documentElement.style.setProperty('--vela-scene-accent', current.accent);

    setText('[data-vela-reader-kicker]', `PLANTILLA ${current.label}`);
    setText('[data-vela-reader-name]', current.name);
    setText('[data-vela-reader-caption]', current.caption);
    setText('[data-vela-scene-kicker]', state.mode === 'reader' ? `EDICIÓN ${current.label}` : 'GALERÍA DIGITAL');
    setText('[data-vela-scene-name]', state.mode === 'reader' ? current.name : 'Tres formas de conservar una vida');
    setText('[data-vela-scene-caption]', state.mode === 'reader' ? current.caption : 'Selecciona una edición para entrar en su memoria.');
    setText('[data-vela-meta-title]', current.chapters[state.chapter]);
    setText('[data-vela-meta-style]', current.style);
    setText('[data-vela-meta-format]', 'Lectura digital · PDF · QR');
    setText('[data-vela-status-text]', state.mode === 'reader' ? 'Historia abierta · usa las flechas para avanzar' : 'Selecciona una pieza para entrar');
    setText('[data-vela-fallback-template]', current.label);
    setAttr('[data-vela-fallback-cover]', 'src', current.pages[state.chapter][0]);
    setAttr('[data-vela-fallback-cover]', 'alt', `Biografía digital de ${current.name}`);

    setAttr('[data-vela-gallery-page-left]', 'src', current.pages[state.chapter][0]);
    setAttr('[data-vela-gallery-page-right]', 'src', current.pages[state.chapter][1]);
    setAttr('[data-vela-gallery-memory]', 'src', current.memories[state.chapter]);
    setText('[data-vela-gallery-note]', current.chapters[state.chapter]);
    setText('[data-vela-gallery-number]', String(state.chapter + 1).padStart(2, '0'));

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

    preloadAdjacentChapters(state.template, state.chapter);
    markDirty();
  }

  function setStatus(message) {
    const status = $('[data-vela-status-text]');
    if (status) status.textContent = message;
  }

  function resetTransforms() {
    if (!window.gsap) return;
    window.gsap.set(cards, { clearProps: 'transform,opacity,filter' });
    window.gsap.set(reader, { clearProps: 'transform,opacity' });
    window.gsap.set(spread, { clearProps: 'transform,opacity' });
    markDirty();
  }

  function galleryToReader(template) {
    if (!templates[template] || state.busy) return;
    state.busy = true;
    state.activeAnimCount++;
    delete shell.dataset.hoverTemplate;
    state.template = template;
    state.chapter = 0;
    state.mode = 'reader';
    state.lastCard = cards.find((card) => card.dataset.velaGalleryCard === template) || cards[0];
    updateHtml();
    
    const cardOwner = $('[data-vela-card-owner]');
    if (cardOwner) cardOwner.textContent = templates[template].name;

    layer.classList.add('is-reader', 'is-transitioning');
    const selected = state.lastCard;
    const others = cards.filter((card) => card !== selected);
    const env = $('[data-vela-envelope-unboxing]');
    
    const isMobile = window.innerWidth < 700;
    const tl = window.gsap && !prefersReducedMotion ? window.gsap.timeline({
      onUpdate: markDirty,
      onComplete: () => {
        layer.classList.remove('is-transitioning');
        state.busy = false;
        state.activeAnimCount--;
        markDirty();
      }
    }) : null;

    if (tl) {
      tl.to(others, { opacity: .12, scale: .75, y: 22, duration: .35, stagger: isMobile ? 0 : .015, ease: 'power2.inOut' }, 0)
        .to(selected, { scale: isMobile ? 1.04 : 1.08, y: isMobile ? -8 : -14, rotation: 0, duration: .48, ease: 'power2.out' }, 0)
        .fromTo(reader, { opacity: 0, scale: .78, y: 26 }, { opacity: 1, scale: 1, y: 0, duration: .62, ease: 'power2.out' }, .08);
        
      if (env) {
        tl.fromTo(env, 
          { opacity: 0, scale: 0.7, x: isMobile ? 20 : 45, y: 20, rotationY: -16 }, 
          { opacity: 1, scale: 1, x: 0, y: 0, rotationY: -6, duration: 0.58, ease: 'power2.out' }, 0.12
        );
      }
      
      const memEl = $('[data-vela-gallery-memory]');
      const noteEl = $('.vela-gallery-note');
      if (memEl) {
        tl.fromTo(memEl, { opacity: 0, x: isMobile ? 14 : 26, rotation: 8 }, { opacity: 1, x: 0, rotation: 6, duration: .44, ease: 'power2.out' }, .36);
      }
      if (noteEl) {
        tl.fromTo(noteEl, { opacity: 0, x: isMobile ? -12 : -20, rotation: -8 }, { opacity: 1, x: 0, rotation: -5, duration: .44, ease: 'power2.out' }, .4);
      }
    } else {
      layer.classList.remove('is-transitioning');
      state.busy = false;
      state.activeAnimCount--;
      markDirty();
    }
    window.dispatchEvent(new CustomEvent('vela-template-select', { detail: { template } }));
    window.dispatchEvent(new CustomEvent('vela-reader-open', { detail: { template, chapter: 0 } }));
  }

  function readerToGallery() {
    if (state.mode !== 'reader') return;
    if (window.gsap) {
      window.gsap.killTweensOf([reader, cards, $('[data-vela-page-flipper]')]);
    }
    state.busy = true;
    state.activeAnimCount++;
    delete shell.dataset.hoverTemplate;
    layer.classList.add('is-transitioning');
    
    const tl = window.gsap && !prefersReducedMotion ? window.gsap.timeline({
      onUpdate: markDirty,
      onComplete: () => {
        layer.classList.remove('is-reader', 'is-transitioning');
        resetTransforms();
        state.mode = 'gallery';
        state.busy = false;
        state.activeAnimCount--;
        updateHtml();
        state.lastCard?.focus({ preventScroll: true });
        markDirty();
      }
    }) : null;

    if (tl) {
      tl.to(reader, { opacity: 0, scale: .76, y: 20, duration: .42, ease: 'power2.in' }, 0)
        .to(cards, { opacity: 1, scale: 1, y: 0, rotation: 0, duration: .5, stagger: .02, ease: 'power2.out' }, .1);
    } else {
      layer.classList.remove('is-reader', 'is-transitioning');
      state.mode = 'gallery';
      state.busy = false;
      state.activeAnimCount--;
      updateHtml();
      markDirty();
    }
    window.dispatchEvent(new CustomEvent('vela-reader-close', { detail: { template: state.template } }));
  }

  function changeTemplate(template) {
    if (!templates[template] || state.busy) return;
    if (state.mode === 'reader' && state.template === template) return;
    if (state.mode === 'gallery') return galleryToReader(template);
    state.busy = true;
    state.activeAnimCount++;
    const old = state.template;
    const tl = window.gsap && !prefersReducedMotion ? window.gsap.timeline({
      onUpdate: markDirty,
      onComplete: () => {
        state.busy = false;
        state.activeAnimCount--;
        markDirty();
      }
    }) : null;

    if (tl) {
      tl.to(reader, { opacity: 0, x: template === 'letter' ? -22 : 22, duration: .2, ease: 'power2.in' })
        .call(() => { state.template = template; state.chapter = 0; updateHtml(); })
        .fromTo(reader, { opacity: 0, x: template === 'letter' ? 22 : -22 }, { opacity: 1, x: 0, duration: .42, ease: 'power2.out' });
    } else {
      state.template = template;
      state.chapter = 0;
      state.busy = false;
      state.activeAnimCount--;
      updateHtml();
      markDirty();
    }
    window.dispatchEvent(new CustomEvent('vela-template-select', { detail: { template, previous: old } }));
  }

  function changeChapter(template, chapter, direction = 1) {
    if (!templates[template] || state.mode !== 'reader' || state.busy) return;
    state.busy = true;
    state.activeAnimCount++;
    const total = templates[template].pages.length;
    const nextChapter = (chapter + total) % total;
    const curPages = templates[template].pages[state.chapter];
    const nxtPages = templates[template].pages[nextChapter];

    const flipper = $('[data-vela-page-flipper]');
    const flipperFront = $('[data-flipper-front]');
    const flipperBack = $('[data-flipper-back]');
    const shadowFront = $('.vela-flipper-shadow');
    const shadowBack = $('.vela-flipper-shadow--back');

    if (flipper && flipperFront && flipperBack && window.gsap && !prefersReducedMotion) {
      if (direction > 0) {
        flipper.style.right = '0';
        flipper.style.left = 'auto';
        flipper.style.transformOrigin = 'left center';
        flipperFront.src = curPages[1];
        flipperBack.src = nxtPages[0];
      } else {
        flipper.style.left = '0';
        flipper.style.right = 'auto';
        flipper.style.transformOrigin = 'right center';
        flipperFront.src = curPages[0];
        flipperBack.src = nxtPages[1];
      }

      flipper.classList.add('is-flipping');
      
      const tl = window.gsap.timeline({
        onUpdate: markDirty,
        onComplete: () => {
          flipper.classList.remove('is-flipping');
          window.gsap.set(flipper, { clearProps: 'all' });
          state.busy = false;
          state.activeAnimCount--;
          markDirty();
        }
      });

      tl.set(flipper, { rotateY: 0 })
        .set([shadowFront, shadowBack], { opacity: 0 })
        // Giro ágil y responsivo a 0.44s con curva suave
        .to(flipper, {
          rotateY: direction > 0 ? -180 : 180,
          duration: 0.44,
          ease: 'power2.inOut'
        }, 0)
        .to(shadowFront, { opacity: 0.28, duration: 0.22, ease: 'power1.in' }, 0)
        .to(shadowFront, { opacity: 0, duration: 0.22, ease: 'power1.out' }, 0.22)
        .to(shadowBack, { opacity: 0.3, duration: 0.22, ease: 'power1.in' }, 0)
        .to(shadowBack, { opacity: 0, duration: 0.22, ease: 'power1.out' }, 0.22)
        .to($('[data-vela-gallery-memory]'), {
          x: direction > 0 ? 14 : -14,
          opacity: 0.45,
          duration: 0.2,
          ease: 'power1.in'
        }, 0)
        .call(() => {
          state.template = template;
          state.chapter = nextChapter;
          updateHtml();
        }, null, 0.22)
        .to($('[data-vela-gallery-memory]'), {
          x: 0,
          opacity: 1,
          duration: 0.26,
          ease: 'power1.out'
        }, 0.22);
    } else {
      state.chapter = nextChapter;
      updateHtml();
      state.busy = false;
      state.activeAnimCount--;
      markDirty();
    }

    window.dispatchEvent(new CustomEvent('vela-chapter-change', { detail: { template, chapter: nextChapter, direction } }));
  }

  function setPointerTilt(x, y) {
    const cx = Math.max(-1, Math.min(1, x));
    const cy = Math.max(-1, Math.min(1, y));
    
    // Almacenar coordenadas para ser aplicadas exclusivamente en renderTick()
    state.targetPointerX = cx;
    state.targetPointerY = cy;

    if (!state.camera || prefersReducedMotion) {
      markDirty();
      return;
    }
    
    // Asignar objetivo para interpolación suave (Lerp) de cámara
    state.targetCamX = cx * (state.quality === 'mobile' ? 20 : 45);
    state.targetCamY = -cy * (state.quality === 'mobile' ? 12 : 22);
    markDirty();
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
        state.quality = width < 700 ? 'mobile' : width < 1000 ? 'tablet' : 'desktop';
        const fovRad = THREE.MathUtils.degToRad(state.camera.fov * 0.5);
        state.baseZ = (0.5 / Math.tan(fovRad)) * height;
        state.camera.position.z = state.baseZ;
        state.camera.aspect = width / height;
        state.camera.updateProjectionMatrix();
        state.renderer.setSize(width, height);
        markDirty();
      };

      const observer = new ResizeObserver(resize);
      observer.observe(gallery);
      resize();

      const visibility = new IntersectionObserver(([entry]) => {
        state.visible = entry.isIntersecting;
        if (state.visible) {
          markDirty();
        } else if (state.raf) {
          cancelAnimationFrame(state.raf);
          state.raf = 0;
        }
      }, { threshold: .05 });
      visibility.observe(gallery);

      state.dispose = () => {
        observer.disconnect();
        visibility.disconnect();
        if (state.raf) cancelAnimationFrame(state.raf);
        state.renderer?.domElement.remove();
        state.renderer = null;
      };

      state.renderer.render(state.scene, state.camera);
      showcase.classList.remove('has-scene-error');
      $('[data-vela-scene-loading]')?.classList.add('is-hidden');
      setStatus('Selecciona una pieza para entrar');
      window.dispatchEvent(new CustomEvent('vela-gallery-ready'));
      
      preloadAdjacentChapters('nude', 0);
    })).catch(() => {
      $('[data-vela-scene-loading]')?.classList.add('is-hidden');
      showcase.classList.add('is-css3d-fallback');
      setStatus('Galería editorial disponible');
      window.dispatchEvent(new CustomEvent('vela-scene-error'));
    });
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
    selectEnvelope: galleryToReader,
    closeBiography: readerToGallery,
    setBiography: changeTemplate
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      if (state.mode !== 'gallery') return;
      galleryToReader(card.dataset.velaGalleryCard);
    });
  });

  $$('[data-vela-archive-tab]').forEach((button) => button.addEventListener('click', () => changeTemplate(button.dataset.velaArchiveTab)));
  $$('[data-vela-close]').forEach((button) => button.addEventListener('click', readerToGallery));
  $$('[data-vela-chapter]').forEach((button) => button.addEventListener('click', () => changeChapter(state.template, Number(button.dataset.velaChapter), Number(button.dataset.velaChapter) >= state.chapter ? 1 : -1)));
  $$('[data-vela-chapter-prev]').forEach((button) => button.addEventListener('click', () => changeChapter(state.template, state.chapter - 1, -1)));
  $$('[data-vela-chapter-next]').forEach((button) => button.addEventListener('click', () => changeChapter(state.template, state.chapter + 1, 1)));
  
  shell.addEventListener('pointermove', (event) => {
    const rect = shell.getBoundingClientRect();
    setPointerTilt(((event.clientX - rect.left) / rect.width) * 2 - 1, ((event.clientY - rect.top) / rect.height) * 2 - 1);
  }, { passive: true });
  
  shell.addEventListener('pointerleave', () => setPointerTilt(0, 0));

  let pointerStartX = 0;
  let pointerStartY = 0;
  let isPointerDragging = false;
  let isHorizontalGesture = false;
  let wheelLock = false;

  shell.addEventListener('pointerdown', (event) => {
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
    isPointerDragging = true;
    isHorizontalGesture = false;
  }, { passive: true });

  shell.addEventListener('pointermove', (event) => {
    if (!isPointerDragging || state.mode !== 'reader' || state.busy) return;
    const diffX = event.clientX - pointerStartX;
    const diffY = event.clientY - pointerStartY;

    if (!isHorizontalGesture && (Math.abs(diffX) > 8 || Math.abs(diffY) > 8)) {
      if (Math.abs(diffX) > Math.abs(diffY)) {
        isHorizontalGesture = true;
      } else {
        isPointerDragging = false;
        return;
      }
    }

    if (isHorizontalGesture && !prefersReducedMotion) {
      const tiltAngle = Math.max(-10, Math.min(10, diffX * 0.08));
      spread.style.transform = `perspective(1200px) rotateY(${tiltAngle}deg)`;
      markDirty();
    }
  }, { passive: true });

  shell.addEventListener('pointerup', (event) => {
    if (!isPointerDragging) return;
    isPointerDragging = false;
    const distance = event.clientX - pointerStartX;
    
    if (!prefersReducedMotion && window.gsap) {
      window.gsap.to(spread, { rotateY: 0, duration: 0.28, ease: 'power2.out', onUpdate: markDirty });
    } else {
      spread.style.transform = '';
      markDirty();
    }

    if (isHorizontalGesture && Math.abs(distance) > 45 && state.mode === 'reader') {
      changeChapter(state.template, state.chapter + (distance < 0 ? 1 : -1), distance < 0 ? 1 : -1);
    }
  });

  shell.addEventListener('pointercancel', () => {
    isPointerDragging = false;
    isHorizontalGesture = false;
    spread.style.transform = '';
    markDirty();
  });

  shell.addEventListener('keydown', (event) => {
    if (state.mode === 'reader' && event.key === 'ArrowLeft') { event.preventDefault(); changeChapter(state.template, state.chapter - 1, -1); }
    if (state.mode === 'reader' && event.key === 'ArrowRight') { event.preventDefault(); changeChapter(state.template, state.chapter + 1, 1); }
    if (event.key === 'Escape' && state.mode === 'reader') { event.preventDefault(); readerToGallery(); }
  });

  updateHtml();
  createGalleryScene();
})();
