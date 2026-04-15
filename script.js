/* =====================================================
   JENRI · Always Up — script.js
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll shadow ── */
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── Scroll reveal ── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── Flip cards (tap en móvil) ── */
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  /* ── Modal CV: cerrar con Escape ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const m = document.getElementById('cvModal');
      if (m) m.classList.remove('active');
    }
  });

  /* ── Contact form ── */
  const form = document.getElementById('contactForm');

  /* ── Mascot flip (hero) ── */
  const mascotFlip = document.getElementById('mascotFlip');
  if (mascotFlip) {
    mascotFlip.addEventListener('click', () => {
      mascotFlip.classList.toggle('flipped');
    });
  }

  /* ── Mascot easter egg (nav) ── */
  const messages = [
    '¡ALWAYS UP! 🐻', '¡Nunca me caigo! ☁️', '¡Ideas con chispa! ⚡',
    '¡Disponible 24/7! 🐻', '¡Tu sitio en la nube! ↑', '¡Siempre genial! ✦'
  ];
  let clickCount = 0;
  document.querySelectorAll('.nav-mascot').forEach(m => {
    m.addEventListener('click', () => {
      clickCount++;
      const toast = document.createElement('div');
      toast.textContent = messages[clickCount % messages.length];
      toast.style.cssText = `
        position:fixed; bottom:2rem; right:2rem;
        background:#1A1A18; color:#C8D8CE;
        font-family:'IBM Plex Mono',monospace; font-size:0.72rem;
        letter-spacing:0.1em; padding:0.75rem 1.4rem;
        z-index:9000; border-left:3px solid #C8D8CE;
        animation:fadeInUp 0.3s ease forwards; pointer-events:none;
      `;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2200);
    });
  });

  /* ── Toast keyframe ── */
  if (!document.getElementById('toastStyle')) {
    const s = document.createElement('style');
    s.id = 'toastStyle';
    s.textContent = `@keyframes fadeInUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`;
    document.head.appendChild(s);
  }

});
