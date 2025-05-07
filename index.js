// 既存の機能を維持しながら改良
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

  // セクションにアニメーション遅延を設定
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.setProperty('--section-index', index);
  });

  // お客様の声スライダーの実装
  const initTestimonialSlider = () => {
    const slider = document.querySelector('.testimonials-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!slider || !prevBtn || !nextBtn || !dotsContainer) return;
    
    const testimonials = slider.querySelectorAll('.testimonial');
    let currentSlide = 0;
    let autoSlideInterval;
    
    // ドットの生成
    testimonials.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.dot');
    
    // スライド移動関数
    const goToSlide = (index) => {
      if (index < 0) index = testimonials.length - 1;
      if (index >= testimonials.length) index = 0;
      
      slider.style.transform = `translateX(-${index * 100}%)`;
      currentSlide = index;
      
      // アクティブドットの更新
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      
      // 自動スライドのリセット
      resetAutoSlide();
    };
    
    // 前のスライドへ
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
    });
    
    // 次のスライドへ
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
    });
    
    // 自動スライド機能
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 5000); // 5秒ごとに切り替え
    };
    
    // 自動スライドのリセット
    const resetAutoSlide = () => {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    };
    
    // 最初のスライダー設定
    goToSlide(0);
    startAutoSlide();
    
    // タッチスワイプ対応
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, false);
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // 左スワイプ → 次へ
        goToSlide(currentSlide + 1);
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // 右スワイプ → 前へ
        goToSlide(currentSlide - 1);
      }
    };
  };
  
  // スライダーの初期化
  initTestimonialSlider();
});