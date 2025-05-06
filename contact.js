// お問い合わせページ固有の機能
function initPageSpecific() {
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
  }