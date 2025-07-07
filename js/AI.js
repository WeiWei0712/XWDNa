/***************** 1. Reveal Animation *****************/
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/***************** 2. Smooth Scroll *****************/
document.querySelectorAll('.toc a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
            .scrollIntoView({behavior:'smooth',block:'start'});
  });
});

/***************** 3. ScrollSpy *****************/
const sections = document.querySelectorAll('article section[id]');
const tocLinks = document.querySelectorAll('.toc a');
const spyObs = new IntersectionObserver(
  entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const id=e.target.id;
        tocLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')===`#${id}`));
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach(sec=>spyObs.observe(sec));

/***************** 4. Back-to-Top Button *****************/
const topBtn = document.getElementById('backToTop');

// 滾動超過 300px 就顯示
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

// 平滑捲回最上端
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
