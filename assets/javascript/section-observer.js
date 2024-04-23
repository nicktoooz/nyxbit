const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        history.pushState(null, '', `${location.origin}#${entry.target.id !== 'home' ? entry.target.id : ''}`);
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
