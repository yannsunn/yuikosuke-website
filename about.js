// 油井宏介についてページの固有機能
function initPageSpecific() {
  // 強みセクションのホバーエフェクト強化
  const strengthItems = document.querySelectorAll('.strengths li');
  strengthItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'var(--shadow-sm)';
    });
  });

  // セクションごとの遅延アニメーション
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = (index * 0.1) + 's';
  });
  
  // 資格リストのアニメーション
  const qualificationItems = document.querySelectorAll('.qualifications li');
  qualificationItems.forEach((item, index) => {
    item.style.transitionDelay = (index * 0.1) + 's';
  });
  
  // サービス提供リストのホバーエフェクト
  const serviceItems = document.querySelectorAll('.service-summary li');
  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.08)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
  
  // 会社情報テーブルの行ホバーエフェクト
  const tableRows = document.querySelectorAll('.company-info table tr');
  tableRows.forEach(row => {
    row.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'rgba(240, 247, 255, 0.5)';
    });
    
    row.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
    });
  });
} 