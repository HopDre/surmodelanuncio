window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.box');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].style.opacity = '1';
      reveals[i].style.transform = 'translateY(0)';
    }
  }
}