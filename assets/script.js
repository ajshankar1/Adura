document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if(toggle && links){
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Animated skill/progress bars
  const bars = document.querySelectorAll('.skill-fill');
  if(bars.length){
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const el = entry.target;
          el.style.width = el.dataset.pct + '%';
          obs.unobserve(el);
        }
      });
    }, {threshold:0.4});
    bars.forEach(b => obs.observe(b));
  }
});
