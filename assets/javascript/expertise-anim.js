const expertiseItems = document.querySelectorAll('.expertise-item');
let currentIndex = 0;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && currentIndex < expertiseItems.length) {
      expertiseItems[currentIndex].classList.add('item-active');
      currentIndex++;

      if (entry.isIntersecting) {
        observer.observe(expertiseItems[currentIndex]);
      }
      observer.unobserve(entry.target);
    }
  });
});
observer.observe(expertiseItems[currentIndex]);