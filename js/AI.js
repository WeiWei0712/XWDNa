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
