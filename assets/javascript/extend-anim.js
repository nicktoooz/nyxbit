document.querySelector('.hero a').addEventListener('click', function () {
  const img = this.querySelector('img');
  img.classList.add('original');
  setTimeout((e) => {
    location.href = `${location.origin}#expertise`;
  }, 100);

  setTimeout(function () {
    img.classList.remove('original');
  }, 1000);
});
