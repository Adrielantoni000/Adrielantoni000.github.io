// Theme toggle (remembers choice)
const root = document.documentElement;
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const dark = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
});

// Typed command in the terminal
const typed = document.querySelector('.typed');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typed) {
  const text = typed.dataset.text;
  if (reduce) typed.textContent = text;
  else {
    let i = 0;
    const tick = () => { typed.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(tick, 55); };
    setTimeout(tick, 700);
  }
}

// Reveal sections on scroll
const items = document.querySelectorAll('.card, .timeline > li, .cred');
if ('IntersectionObserver' in window && !reduce) {
  items.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

document.getElementById('year').textContent = new Date().getFullYear();
