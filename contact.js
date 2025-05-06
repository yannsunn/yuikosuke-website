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
  
    // カードボックスの遅延アニメーション
    const cardBoxes = document.querySelectorAll('.card-box');
    cardBoxes.forEach((card, index) => {
      card.style.setProperty('--card-index', index);
    });
  
    // 問い合わせ例の項目にホバーエフェクト
    const exampleItems = document.querySelectorAll('.contact-examples li');
    exampleItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.08)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
      });
    });
  
    // メールアドレスのコピー機能
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // メールアプリを開くデフォルト動作は維持するため、
        // e.preventDefault()はコメントアウト
        
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
  
    // ボタンのクリック効果強化
    const allButtons = document.querySelectorAll('.line-btn, .mail-btn');
    allButtons.forEach(button => {
      if (!button.classList.contains('disabled')) {
        button.addEventListener('click', function() {
          this.classList.add('clicked');
          setTimeout(() => this.classList.remove('clicked'), 300);
        });
      }
    });
  });