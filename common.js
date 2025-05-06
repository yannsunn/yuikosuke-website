// 共通機能をまとめたスクリプト
// 全ページで読み込んで利用可能

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

  // セクションにアニメーション遅延を設定
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.setProperty('--section-index', index);
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

  // ボタンのクリック効果強化
  const allButtons = document.querySelectorAll('.line-btn, .mail-btn, .more-btn');
  allButtons.forEach(button => {
    if (!button.classList.contains('disabled')) {
      button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
      });
    }
  });

  // メールアドレスのコピー機能
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function() {
      // メールアドレスをクリップボードにコピー
      const email = this.href.replace('mailto:', '');
      try {
        navigator.clipboard.writeText(email).then(() => {
          // コピー成功時のフィードバック
          const originalText = this.textContent;
          this.textContent = 'メールアドレスをコピーしました！';
          setTimeout(() => {
            this.textContent = originalText;
          }, 2000);
        });
      } catch (err) {
        // クリップボードAPIが利用できない場合は何もしない
        console.log('クリップボードの操作ができませんでした:', err);
      }
    });
  });

  // ページ固有の初期化関数を呼び出す
  if (typeof initPageSpecific === 'function') {
    initPageSpecific();
  }
}); 