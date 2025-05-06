// お問い合わせページ固有の機能
function initPageSpecific() {
    // カードボックスの遅延アニメーション
    const cardBoxes = document.querySelectorAll('.card-box');
    cardBoxes.forEach((card, index) => {
      card.style.setProperty('--card-index', index);
      card.style.animationDelay = (index * 0.15) + 's';
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
    
    // コンタクトボックスのホバーエフェクト
    const contactBoxes = document.querySelectorAll('.contact-box');
    contactBoxes.forEach(box => {
      box.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = 'var(--shadow-lg)';
      });
      
      box.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'var(--shadow-md)';
      });
    });
    
    // アクティブなナビゲーションリンクにクラスを追加
    const currentNav = document.querySelector('nav a[href="contact.html"]');
    if (currentNav) {
      currentNav.classList.add('active');
    }
  }