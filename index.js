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
});