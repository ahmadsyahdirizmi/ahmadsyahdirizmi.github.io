gsap.registerPlugin(ScrollTrigger);

// ── Page header reveal ──
gsap.to('#page-header', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });

// ── Project cards scroll reveal ──
document.querySelectorAll('.proj-card').forEach((card, i) => {
  gsap.to(card, {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: card, start: 'top 88%' },
    delay: (i % 2) * 0.12
  });
});

// ── Carousel logic ──
document.querySelectorAll('.proj-carousel').forEach(carousel => {
  const slides  = carousel.querySelectorAll('.proj-slide');
  const track   = carousel.querySelector('.proj-slides');
  const dots    = carousel.querySelectorAll('.carousel-dot');
  const btnPrev = carousel.querySelector('.carousel-btn-prev');
  const btnNext = carousel.querySelector('.carousel-btn-next');
  let current = 0;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  btnPrev.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
  btnNext.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
  dots.forEach((dot, i) => dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); }));

  // Auto-play
  let timer = setInterval(() => goTo(current + 1), 4000);
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4000);
  });
});