(() => {
  const shell = document.querySelector('[data-vela-biography-scene]');
  const showcase = document.querySelector('[data-vela-biography-showcase]');
  if (!shell || !showcase) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const templates = {
    nude: {
      name: 'Carlota', label: 'NUDE', caption: 'La historia de una vida plena', style: 'Cálida, elegante y atemporal', accent: '#c5a982',
      pages: [['/assets/templates/nude_page_01.jpg', '/assets/templates/nude_page_02.jpg'], ['/assets/templates/nude_page_03.jpg', '/assets/templates/nude_page_04.jpg'], ['/assets/templates/nude_page_05.jpg', '/assets/templates/nude_page_06.jpg'], ['/assets/templates/nude_page_07.jpg', '/assets/templates/nude_page_08.jpg']],
      memories: ['/assets/templates/nude_page_07.jpg', '/assets/templates/nude_page_05.jpg', '/assets/carmen-hero-1600.webp', '/assets/carmen-family-1200.webp'],
      chapters: ['Orígenes', 'Infancia', 'Momentos clave', 'Legado']
    },
    noir: {
      name: 'Juan', label: 'NOIR', caption: 'El compañero de camino', style: 'Moderna, sobria y con carácter', accent: '#d7c1a5',
      pages: [['/assets/templates/noir_page_01.jpg', '/assets/templates/noir_page_02.jpg'], ['/assets/templates/noir_page_03.jpg', '/assets/templates/noir_page_04.jpg'], ['/assets/templates/noir_page_05.jpg', '/assets/templates/noir_page_06.jpg'], ['/assets/templates/noir_page_04.jpg', '/assets/templates/noir_page_08.jpg']],
      memories: ['/assets/templates/noir_page_01.jpg', '/assets/templates/noir_page_04.jpg', '/assets/tecnologia-sensibilidad.webp', '/assets/vela-sobre-qr-1200.webp'],
      chapters: ['Orígenes', 'El carácter', 'Una vida plena', 'Lo que permanece']
    },
    letter: {
      name: 'Carmen', label: 'LETTER', caption: 'Una vida hecha de pequeñas historias', style: 'Clásica, cercana y llena de memoria', accent: '#8d504b',
      pages: [['/assets/templates/letter_page_01.jpg', '/assets/templates/letter_page_02.jpg'], ['/assets/templates/letter_page_03.jpg', '/assets/templates/letter_page_04.jpg'], ['/assets/templates/letter_page_05.jpg', '/assets/templates/letter_page_07.jpg'], ['/assets/templates/letter_page_08.jpg', '/assets/templates/letter_page_09.jpg']],
      memories: ['/assets/carmen-family-1200.webp', '/assets/carmen-hero-1600.webp', '/assets/templates/letter_page_04.jpg', '/assets/templates/letter_page_08.jpg'],
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
    lastCard: null,
    // Rendimiento: Render on demand & Lerp damping
    targetCamX: 0,
    targetCamY: 0,
    currentCamX: 0,
    currentCamY: 0,
    isDirty: true,
    activeAnimCount: 0
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
    const prevChap = (currentChapter + 3) % 4;
    const nextChap = (currentChapter + 1) % 4;
    preloadImages([
      ...cur.pages[prevChap],
      ...cur.pages[nextChap],
      cur.memories[prevChap],
      cur.memories[nextChap]
    ]);
  }

  function markDirty() {
    state.isDirty = true;
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

    // Suavizado Lerp 60-120fps de la cámara
    if (state.camera && !prefersReducedMotion) {
      const dx = state.targetCamX - state.currentCamX;
      const dy = state.targetCamY - state.currentCamY;

      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        state.currentCamX += dx * 0.12;
        state.currentCamY += dy * 0.12;
        state.camera.position.x = state.currentCamX;
        state.camera.position.y = state.currentCamY;
        state.camera.lookAt(0, 0, 0);
        needsAnotherPass = true;
      }
    }

    if (state.isDirty || needsAnotherPass || state.activeAnimCount > 0) {
      state.renderer.render(state.scene, state.camera);
      state.isDirty = false;
      state.raf = requestAnimationFrame(renderTick);
    } else {
      // Reposo: se apaga el bucle para 0% consumo en descanso
      state.raf = 0;
    }
  }

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
    const bottomline = $('[data-vela-bottomline-label]');
    if (bottomline) bottomline.textContent = state.mode === 'reader'
      ? `${current.name}: ${current.chapters[state.chapter]}.`
      : 'Una historia no se archiva: se vuelve a visitar.';

    $('[data-vela-reader-kicker]').textContent = `PLANTILLA ${current.label}`;
    $('[data-vela-reader-name]').textContent = current.name;
    $('[data-vela-reader-caption]').textContent = current.caption;
    $('[data-vela-scene-kicker]').textContent = state.mode === 'reader' ? `EDICIÓN ${current.label}` : 'GALERÍA DIGITAL';
    $('[data-vela-scene-name]').textContent = state.mode === 'reader' ? current.name : 'Tres formas de conservar una vida';
    $('[data-vela-scene-caption]').textContent = state.mode === 'reader' ? current.caption : 'Selecciona una edición para entrar en su memoria.';
    $('[data-vela-meta-title]').textContent = current.chapters[state.chapter];
    $('[data-vela-meta-style]').textContent = current.style;
    $('[data-vela-meta-format]').textContent = 'Lectura digital · PDF · QR';
    $('[data-vela-status-text]').textContent = state.mode === 'reader' ? 'Historia abierta · usa las flechas para avanzar' : 'Selecciona una pieza para entrar';
    $('[data-vela-fallback-template]').textContent = current.label;
    $('[data-vela-fallback-cover]').src = current.pages[state.chapter][0];
    $('[data-vela-fallback-cover]').alt = `Biografía digital de ${current.name}`;

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
    
    // Sincronizar etiqueta del sobre interactivo
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
      tl.to(others, { opacity: .12, scale: .75, y: 24, duration: .4, stagger: .02, ease: 'power2.inOut' }, 0)
        .to(selected, { scale: isMobile ? 1.04 : 1.08, y: isMobile ? -10 : -16, rotation: 0, duration: .55, ease: 'power3.out' }, 0)
        .fromTo(reader, { opacity: 0, scale: .76, y: 32 }, { opacity: 1, scale: 1, y: 0, duration: .75, ease: 'power3.out' }, .1);
        
      if (env) {
        tl.fromTo(env, 
          { opacity: 0, scale: 0.65, x: isMobile ? 25 : 50, y: 25, rotationY: -20 }, 
          { opacity: 1, scale: 1, x: 0, y: 0, rotationY: -6, duration: 0.68, ease: 'back.out(1.3)' }, 0.16
        );
      }
      
      tl.fromTo($('[data-vela-gallery-memory]'), { opacity: 0, x: isMobile ? 16 : 32, rotation: 10 }, { opacity: 1, x: 0, rotation: 6, duration: .5, ease: 'power2.out' }, .45)
        .fromTo($('.vela-gallery-note'), { opacity: 0, x: isMobile ? -14 : -24, rotation: -10 }, { opacity: 1, x: 0, rotation: -5, duration: .5, ease: 'power2.out' }, .5);
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
    if (state.busy) return;
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
      tl.to(reader, { opacity: 0, scale: .75, y: 24, duration: .5, ease: 'power2.in' }, 0)
        .to(cards, { opacity: 1, scale: 1, y: 0, rotation: 0, duration: .6, stagger: .03, ease: 'power3.out' }, .12);
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
      tl.to(reader, { opacity: 0, x: template === 'letter' ? -26 : 26, duration: .24, ease: 'power2.in' })
        .call(() => { state.template = template; state.chapter = 0; updateHtml(); })
        .fromTo(reader, { opacity: 0, x: template === 'letter' ? 26 : -26 }, { opacity: 1, x: 0, duration: .5, ease: 'power3.out' });
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
    const nextChapter = (chapter + 4) % 4;
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
        .to(flipper, {
          rotateY: direction > 0 ? -180 : 180,
          duration: 0.58,
          ease: 'power2.inOut'
        }, 0)
        .to(shadowFront, { opacity: 0.32, duration: 0.28, ease: 'power1.in' }, 0)
        .to(shadowFront, { opacity: 0, duration: 0.28, ease: 'power1.out' }, 0.28)
        .to(shadowBack, { opacity: 0.35, duration: 0.28, ease: 'power1.in' }, 0)
        .to(shadowBack, { opacity: 0, duration: 0.28, ease: 'power1.out' }, 0.28)
        .to($('[data-vela-gallery-memory]'), {
          x: direction > 0 ? 18 : -18,
          opacity: 0.35,
          duration: 0.25,
          ease: 'power2.in'
        }, 0)
        .call(() => {
          state.template = template;
          state.chapter = nextChapter;
          updateHtml();
        }, null, 0.3)
        .to($('[data-vela-gallery-memory]'), {
          x: 0,
          opacity: 1,
          duration: 0.34,
          ease: 'power2.out'
        }, 0.3);
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
    if (!prefersReducedMotion) {
      shell.style.setProperty('--vela-pointer-x', `${(50 + cx * 24).toFixed(2)}%`);
      shell.style.setProperty('--vela-pointer-y', `${(38 + cy * 18).toFixed(2)}%`);
      shell.style.setProperty('--vela-glare-x', `${(50 + cx * 35).toFixed(1)}%`);
      shell.style.setProperty('--vela-glare-y', `${(35 + cy * 30).toFixed(1)}%`);
    }
    if (!state.camera || prefersReducedMotion) return;
    
    // Asignar objetivo para interpolación suave (Lerp) en RAF
    state.targetCamX = cx * (state.quality === 'mobile' ? 24 : 52);
    state.targetCamY = -cy * (state.quality === 'mobile' ? 14 : 26);
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
      
      // Precarga inicial de Carlota
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
      window.gsap.to(spread, { rotateY: 0, duration: 0.32, ease: 'power2.out', onUpdate: markDirty });
    } else {
      spread.style.transform = '';
      markDirty();
    }

    if (isHorizontalGesture && Math.abs(distance) > 48 && state.mode === 'reader') {
      changeChapter(state.template, state.chapter + (distance < 0 ? 1 : -1), distance < 0 ? 1 : -1);
    }
  });

  shell.addEventListener('pointercancel', () => {
    isPointerDragging = false;
    isHorizontalGesture = false;
    spread.style.transform = '';
    markDirty();
  });

  shell.addEventListener('wheel', (event) => {
    if (state.mode !== 'reader' || state.busy || Math.abs(event.deltaY) < 18) return;
    event.preventDefault();
    if (wheelLock) return;
    wheelLock = true;
    const direction = event.deltaY > 0 ? 1 : -1;
    changeChapter(state.template, state.chapter + direction, direction);
    window.setTimeout(() => { wheelLock = false; }, prefersReducedMotion ? 180 : 550);
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
