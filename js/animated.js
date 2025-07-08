
// 選取所有動畫元素
const animatedElements = document.querySelectorAll('.animate');

// 滾動觸發動畫
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // 只執行一次
    }
  });
}, {
  threshold: 0.1
});

animatedElements.forEach(el => observer.observe(el));
