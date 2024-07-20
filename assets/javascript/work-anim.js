const worksItems = document.querySelectorAll('.work-flex__item');
let currentWorkIndex = 0;

const worksObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && currentWorkIndex < worksItems.length) {
      worksItems[currentWorkIndex].classList.add('active');
      currentWorkIndex++;

      if (entry.isIntersecting) {
        worksObserver.observe(worksItems[currentWorkIndex]);
      }
      worksObserver.unobserve(entry.target);
    }
  });
});
worksObserver.observe(worksItems[currentWorkIndex]);
