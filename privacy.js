// DOMの読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
  // LINEボタンのクリック時にアニメーション
  const lineBtns = document.querySelectorAll('.line-btn');
  lineBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 200);
    });
  });

  // スクロールで.fadein-sectionにアニメーション
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

  // ヘッダーのスクロール効果
  const header = document.querySelector('header');
  const handleHeaderScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  // ポリシーセクションのホバーエフェクトを強化
  const policySections = document.querySelectorAll('.policy-section');
  policySections.forEach(section => {
    section.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
    });
    
    section.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
    });
  });

  // ナビゲーションのスムーズスクロール
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // ヘッダーの高さを考慮
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // フェードインの時間差を設定
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = (index * 0.1) + 's';
  });
});