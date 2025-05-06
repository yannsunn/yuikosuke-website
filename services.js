// DOMの読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
  // LINEボタンのクリック時にアニメーション
  const lineBtns = document.querySelectorAll('.line-btn');
  lineBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // 準備中のボタンの場合はイベントをキャンセル
      if (btn.classList.contains('disabled')) {
        e.preventDefault();
      } else {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 200);
      }
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

  // サービスカードの遅延アニメーション
  const serviceCards = document.querySelectorAll('.service');
  serviceCards.forEach((card, index) => {
    card.style.setProperty('--card-index', index);
    
    // ホバーエフェクト強化
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
      this.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.12)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });

  // サービスカードのクリックでスムーズスクロール（モバイル表示でも使いやすく）
  document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', function(e) {
      // リンクのクリックは処理しない
      if (e.target.tagName === 'A') return;
      
      // CTAセクションまでスクロール
      const ctaSection = document.querySelector('.cta');
      if (ctaSection) {
        window.scrollTo({
          top: ctaSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
    
    // クリック可能なスタイルを追加
    service.style.cursor = 'pointer';
  });

  // ナビゲーションのスムーズスクロール
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (!this.classList.contains('disabled')) {
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
      }
    });
  });
});