// お問い合わせページ固有のJavaScript
document.addEventListener('DOMContentLoaded', function() {
  // ページ固有の初期化関数
  function initPageSpecific() {
    // カードボックスの遅延アニメーション
    const cardBoxes = document.querySelectorAll('.card-box');
    cardBoxes.forEach((card, index) => {
      card.style.setProperty('--card-index', index);
      card.style.animationDelay = (index * 0.15) + 's';
    });
    
    // コンタクトボックスのホバーエフェクト強化
    const contactBoxes = document.querySelectorAll('.contact-box');
    contactBoxes.forEach(box => {
      box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = 'var(--shadow-lg)';
      });
      
      box.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
    
    // 問い合わせ例リストのアニメーション
    const exampleItems = document.querySelectorAll('.contact-examples li');
    exampleItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        item.style.transition = 'all 0.5s cubic-bezier(.25, .1, .25, 1.5)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 300 + (index * 100));
    });
    
    // メールリンクのクリックイベント拡張
    const mailLinks = document.querySelectorAll('a[href^="mailto:"]');
    mailLinks.forEach(link => {
      link.addEventListener('click', function() {
        // クリック視覚効果を追加
        this.classList.add('pulse');
        setTimeout(() => this.classList.remove('pulse'), 500);
      });
    });
    
    // アクティブなナビゲーションリンクにクラスを追加
    const currentNav = document.querySelector('nav a[href="contact.html"]');
    if (currentNav) {
      currentNav.classList.add('active');
    }
  }
  
  // ページ固有の初期化関数を実行
  if (typeof window.initPageSpecific === 'undefined') {
    window.initPageSpecific = initPageSpecific;
  }
  initPageSpecific();
});