const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function initParallax() {
  if (reducedMotion) return;

  const layers = Array.from(
    document.querySelectorAll<HTMLElement>("[data-parallax]"),
  );
  if (!layers.length) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const vh = window.innerHeight || 1;
    const scrollY = window.scrollY;

    for (const el of layers) {
      const speed = Number(el.dataset.parallax ?? "0.28");
      const mode = el.dataset.parallaxMode ?? "viewport";

      if (mode === "hero") {
        const y = Math.min(scrollY * speed, 280);
        const scale = 1.08 + Math.min(scrollY / 2200, 0.08);
        el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
      } else {
        const rect = el.getBoundingClientRect();
        const centerOffset = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
        const y = centerOffset * speed * -200;
        el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(1.16)`;
      }
    }
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

function initHeroStage3D() {
  if (reducedMotion) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const stage = document.querySelector<HTMLElement>("[data-hero-stage]");
  const scene = document.querySelector<HTMLElement>("[data-hero-scene]");
  if (!stage || !scene) return;

  const depthItems = Array.from(
    stage.querySelectorAll<HTMLElement>("[data-depth]"),
  );
  const glares = Array.from(
    stage.querySelectorAll<HTMLElement>(".book3d-glare"),
  );

  let rafId = 0;
  let tx = 0;
  let ty = 0;
  let cx = 0;
  let cy = 0;

  const tick = () => {
    cx += (tx - cx) * 0.1;
    cy += (ty - cy) * 0.1;

    scene.style.transform = `rotateX(${(-cy * 10).toFixed(2)}deg) rotateY(${(cx * 14).toFixed(2)}deg)`;

    for (const item of depthItems) {
      const depth = Number(item.dataset.depth ?? "16");
      item.style.setProperty("--mx", `${(cx * depth).toFixed(1)}px`);
      item.style.setProperty("--my", `${(cy * depth * 0.7).toFixed(1)}px`);
    }

    if (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002) {
      rafId = window.requestAnimationFrame(tick);
    } else {
      rafId = 0;
    }
  };

  const kick = () => {
    if (!rafId) rafId = window.requestAnimationFrame(tick);
  };

  const hero = stage.closest<HTMLElement>(".hero") ?? stage;

  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    const gx = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const gy = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
    for (const glare of glares) {
      glare.style.setProperty("--gx", `${gx}%`);
      glare.style.setProperty("--gy", `${gy}%`);
      glare.style.opacity = "1";
    }
    kick();
  });

  hero.addEventListener("pointerleave", () => {
    tx = 0;
    ty = 0;
    for (const glare of glares) glare.style.opacity = "0";
    kick();
  });
}

function initBooks3D() {
  const stages = Array.from(
    document.querySelectorAll<HTMLElement>("[data-book3d]"),
  );
  if (!stages.length || reducedMotion) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  for (const stage of stages) {
    const book = stage.querySelector<HTMLElement>(".book3d");
    const glare = stage.querySelector<HTMLElement>(".book3d-glare");
    if (!book) continue;

    let rafId = 0;
    let targetRx = 6;
    let targetRy = -26;
    let curRx = 6;
    let curRy = -26;

    const animate = () => {
      curRx += (targetRx - curRx) * 0.14;
      curRy += (targetRy - curRy) * 0.14;
      book.style.setProperty("--rx", `${curRx.toFixed(2)}deg`);
      book.style.setProperty("--ry", `${curRy.toFixed(2)}deg`);

      if (
        Math.abs(targetRx - curRx) > 0.05 ||
        Math.abs(targetRy - curRy) > 0.05
      ) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    const kick = () => {
      if (!rafId) rafId = window.requestAnimationFrame(animate);
    };

    stage.addEventListener("pointermove", (event) => {
      const rect = stage.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = (event.clientY - rect.top) / rect.height;

      targetRy = -34 + nx * 42;
      targetRx = 14 - ny * 22;

      if (glare) {
        glare.style.setProperty("--gx", `${(nx * 100).toFixed(1)}%`);
        glare.style.setProperty("--gy", `${(ny * 100).toFixed(1)}%`);
        glare.style.opacity = "1";
      }
      kick();
    });

    stage.addEventListener("pointerleave", () => {
      targetRx = 6;
      targetRy = -26;
      if (glare) glare.style.opacity = "0";
      kick();
    });
  }
}

function initTiltCards() {
  if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));

  for (const card of cards) {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-ny * 8).toFixed(2)}deg) rotateY(${(nx * 10).toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  }
}

function initRevealsAndBoard() {
  const reveals = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  );
  const boards = Array.from(
    document.querySelectorAll<HTMLElement>("[data-board]"),
  );

  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    boards.forEach((el) => el.classList.add("is-flipped"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
  );

  reveals.forEach((el) => revealObserver.observe(el));

  const boardObserver = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-flipped");
        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.18 },
  );

  boards.forEach((el) => boardObserver.observe(el));
}

function boot() {
  initParallax();
  initHeroStage3D();
  initBooks3D();
  initTiltCards();
  initRevealsAndBoard();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
