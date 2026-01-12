document.addEventListener('"'"'DOMContentLoaded'"'"', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  const closeNav = () => {
    if (navLinks) {
      navLinks.classList.remove('open');
    }
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  };

  navToggle?.addEventListener('click', () => {
    if (!navLinks) return;
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks?.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', closeNav)
  );

  const accordions = document.querySelectorAll('[data-accordion]');
  accordions.forEach((btn) => {
    const contentId = btn.getAttribute('aria-controls');
    if (!contentId) return;
    const content = document.getElementById(contentId);
    if (!content) return;
    content.hidden = btn.getAttribute('aria-expanded') !== 'true';

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!isExpanded).toString());
      content.hidden = isExpanded;
    });
  });

  document.querySelectorAll('a[href^="\#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href')?.slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        target.setAttribute('tabindex', '-1');
        target.scrollIntoView({ behavior: 'smooth' });
        target.focus({ preventScroll: true });
      }
    });
  });
});
