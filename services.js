// LINEボタンのクリック時にアニメーション
window.addEventListener('DOMContentLoaded', function() {
  const lineBtns = document.querySelectorAll('.line-btn');
  lineBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      btn.classList.add('clicked');
      setTimeout(() => btn.classList.remove('clicked'), 200);
    });
  });
}); 