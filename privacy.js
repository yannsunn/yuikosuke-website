// プライバシーポリシーページ固有の機能
function initPageSpecific() {
  // ポリシーセクションのホバーエフェクトを強化
  const policySections = document.querySelectorAll('.policy-section');
  policySections.forEach(section => {
    section.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
    });
    
    section.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
    });
  });

  // フェードインの時間差を設定
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = (index * 0.1) + 's';
  });
}