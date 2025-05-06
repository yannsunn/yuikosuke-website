// LINEボタンのクリック時にアニメーション
window.addEventListener('DOMContentLoaded', function() {
  const lineBtns = document.querySelectorAll('.line-btn');
  lineBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 200);
    });
  });
});

// スクロールで.fadein-sectionにアニメーション
window.addEventListener('DOMContentLoaded', function() {
  const fadeSections = document.querySelectorAll('.fadein-section');
  const fadeInOnScroll = () => {
    fadeSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        section.style.opacity = 1;
        section.style.transform = 'none';
        section.style.transition = 'opacity 0.8s cubic-bezier(.77,0,.18,1), transform 0.8s cubic-bezier(.77,0,.18,1)';
      }
    });
  };
  fadeSections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
  });
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();
}); 