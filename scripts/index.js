gsap.registerPlugin(ScrollTrigger);

// ── Back to top ──
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Giant text parallax ──
const giantText  = document.getElementById('giant-text');
const footerClip = document.querySelector('.footer-clip-wrapper');

gsap.fromTo(giantText,
  { y: '10vh', scale: 0.8, opacity: 0 },
  {
    y: '0vh', scale: 1, opacity: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: footerClip,
      start: 'top 80%',
      end: 'bottom bottom',
      scrub: 1
    }
  }
);

// ── Staggered footer content reveal ──
gsap.fromTo(
  ['.footer-name', '.footer-desc', '.footer-links'],
  { y: 50, opacity: 0 },
  {
    y: 0, opacity: 1,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: footerClip,
      start: 'top 40%',
      end: 'bottom bottom',
      scrub: 1
    }
  }
);

// ── Magnetic effect (CTA pills) ──
document.querySelectorAll('[data-magnetic]').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width  / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    gsap.to(el, { x: x * 0.4, y: y * 0.4, rotationX: -y * 0.15, rotationY: x * 0.15, scale: 1.05, ease: 'power2.out', duration: 0.4 });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1, ease: 'elastic.out(1,0.3)', duration: 1.2 });
  });
});

// ── Per-frame photo slideshow ──
document.querySelectorAll('.photo-frame').forEach((frame, frameIndex) => {
  const slides = frame.querySelectorAll('.photo-slide');
  if (slides.length <= 1) return;
  let current = 0;
  setTimeout(() => {
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 3500);
  }, frameIndex * 900);
});

// ── Photo frame parallax ──
gsap.utils.toArray('.photo-frame').forEach((frame, i) => {
  gsap.to(frame, {
    yPercent: i % 2 === 0 ? 10 : -10,
    ease: 'none',
    scrollTrigger: {
      trigger: '.footer-clip-wrapper',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
});

// ── Photo frame 3D hover ──
document.querySelectorAll('.photo-frame').forEach(frame => {
  frame.addEventListener('mousemove', e => {
    const rect = frame.getBoundingClientRect();
    const x = e.clientX - rect.left  - rect.width  / 2;
    const y = e.clientY - rect.top   - rect.height / 2;
    gsap.to(frame, { rotationY: x * 0.06, rotationX: -y * 0.06, scale: 1.04, duration: 0.4, ease: 'power2.out' });
  });
  frame.addEventListener('mouseleave', () => {
    gsap.to(frame, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.8, ease: 'elastic.out(1,0.4)' });
  });
});

// ── Footer cinematic reveal ──
gsap.from('footer', {
  scale: 0.96, opacity: 0, duration: 1.4, ease: 'power3.out',
  scrollTrigger: { trigger: '.footer-clip-wrapper', start: 'top 85%' }
});