// サービスページ固有の機能
function initPageSpecific() {
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
}