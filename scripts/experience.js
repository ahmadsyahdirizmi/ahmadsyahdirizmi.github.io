gsap.registerPlugin(ScrollTrigger);

// ── Page header reveal ──
gsap.to('#page-header', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });

// ── Experience cards scroll reveal ──
document.querySelectorAll('.exp-card').forEach((card, i) => {
  gsap.to(card, {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: card, start: 'top 88%' },
    delay: (i % 2) * 0.12
  });
});