document.addEventListener('DOMContentLoaded', () => {
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = Array.from(document.querySelectorAll('main section'));

  // Scroll to section when clicking buttons
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.target);
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Highlight active section while scrolling
  window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 120;
    let current = sections.find(
      s => s.offsetTop <= fromTop && s.offsetTop + s.offsetHeight > fromTop
    );
    if (!current) current = sections[0];

    navBtns.forEach(b => {
      const t = document.querySelector(b.dataset.target);
      if (t === current) b.classList.add('active');
      else b.classList.remove('active');
    });
  });

  // Keyboard accessibility
  document.querySelectorAll('button.nav-btn').forEach(b => {
    b.addEventListener('keyup', e => {
      if (e.key === 'Enter') b.click();
    });
  });
});
