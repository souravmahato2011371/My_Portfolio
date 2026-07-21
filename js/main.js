/* ==========================================================
   CGX30 — interaction layer
   Handcrafted vanilla JS: reveals, cursor, magnetic elements,
   rotating role, ambient dust. No dependencies.
   ========================================================== */
'use strict';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;

/* ---------- Scroll reveals ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }),
  { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
);
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

/* ---------- Rotating role in the hero ---------- */
const ROLES = ['Student', 'Future Developer', 'Future Game Creator', 'Future AI Engineer', 'Always Learning'];
const roleEl = document.getElementById('role');
let roleIdx = 0;
if (!reduced) {
  setInterval(() => {
    roleEl.classList.add('out');
    setTimeout(() => {
      roleIdx = (roleIdx + 1) % ROLES.length;
      roleEl.textContent = ROLES[roleIdx];
      roleEl.classList.remove('out');
    }, 500);
  }, 3200);
}

/* ---------- Custom cursor (fine pointers only) ---------- */
if (finePointer && !reduced) {
  const ring = document.querySelector('.cursor');
  const dot = document.querySelector('.cursor-dot');
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;

  addEventListener('pointermove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  (function follow() {
    /* the ring trails the dot for a calm, weighted feel */
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(follow);
  })();

  document.querySelectorAll('a, button, .card, .case').forEach((el) => {
    el.addEventListener('pointerenter', () => ring.classList.add('is-hover'));
    el.addEventListener('pointerleave', () => ring.classList.remove('is-hover'));
  });
}

/* ---------- Magnetic elements ---------- */
if (finePointer && !reduced) {
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transition = 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
      el.style.transform = '';
      setTimeout(() => (el.style.transition = ''), 700);
    });
  });
}

/* ---------- Ambient dust: barely visible drifting particles ---------- */
const cv = document.getElementById('dust');
if (cv && !reduced) {
  const cx = cv.getContext('2d');
  const DPR = Math.min(devicePixelRatio || 1, 2);
  let W, H, dots = [];

  function resize() {
    W = innerWidth; H = innerHeight;
    cv.width = W * DPR; cv.height = H * DPR;
    cx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  addEventListener('resize', resize);
  resize();

  const COUNT = Math.min(46, Math.floor(W / 30));
  for (let i = 0; i < COUNT; i++) {
    dots.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.4 + Math.random() * 1.1,
      vy: -(0.04 + Math.random() * 0.12),   /* slow upward drift */
      vx: (Math.random() - 0.5) * 0.06,
      a: 0.03 + Math.random() * 0.09,
      p: Math.random() * Math.PI * 2,       /* twinkle phase */
    });
  }

  (function draw(t) {
    cx.clearRect(0, 0, W, H);
    for (const d of dots) {
      d.x += d.vx; d.y += d.vy;
      if (d.y < -4) { d.y = H + 4; d.x = Math.random() * W; }
      if (d.x < -4) d.x = W + 4;
      if (d.x > W + 4) d.x = -4;
      const alpha = d.a * (0.6 + 0.4 * Math.sin(t * 0.0008 + d.p));
      cx.fillStyle = `rgba(255,255,255,${alpha})`;
      cx.beginPath();
      cx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      cx.fill();
    }
    requestAnimationFrame(draw);
  })(0);
}
