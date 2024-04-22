document.addEventListener('DOMContentLoaded', function () {
  var moveDiv = document.getElementById('moveDiv');
  var mouseX = 0;
  var mouseY = 0;

  function updateMouseCoordinates(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    moveDiv.style.left = mouseX + scrollLeft - moveDiv.offsetWidth / 2 + 'px';
    moveDiv.style.top = mouseY + scrollTop - moveDiv.offsetHeight / 2 + 'px';
  }

  function updateMoveDivPosition() {
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    moveDiv.style.left = mouseX + scrollLeft - moveDiv.offsetWidth / 2 + 'px';
    moveDiv.style.top = mouseY + scrollTop - moveDiv.offsetHeight / 2 + 'px';
  }

  document.addEventListener('mousemove', updateMouseCoordinates);
  window.addEventListener('scroll', updateMoveDivPosition);
});
