gsap.registerPlugin(ScrollTrigger);

// ── Page header & profile photo reveal ──
gsap.to('#page-header',   { opacity: 1, y: 0, duration: 1,   ease: 'power3.out', delay: 0.2 });
gsap.to('#profile-photo', { opacity: 1, y: 0, duration: 1,   ease: 'power3.out', delay: 0.4 });

// ── Section cards scroll reveal ──
['#card-edu', '#card-skill', '#card-passion'].forEach((id, i) => {
  gsap.to(id, {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: id, start: 'top 87%' },
    delay: i * 0.08
  });
});