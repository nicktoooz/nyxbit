const span = document.querySelectorAll('.hero-bg span');
span.forEach((e, i) => {
  try {
    e.addEventListener('mouseover', () => {
      span.forEach((e) => {
        e.removeAttribute('class');
      });
      if ((i + 1) % 10 !== 0) {
        span[i + 1].classList.add('activeright');
      }
      if ((i + 1) % 10 != 1) {
        span[i - 1].classList.add('activeleft');
      }
      span[i].classList.add('active');
      span[i + 10].classList.add('activebottom');
      span[i - 10].classList.add('activetop');
    });
  } catch (error) {}
});
