document.getElementById('mobile-menu').addEventListener('click', function () {
  var nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
});


var homeLink = document.querySelector('.navmar a');
homeLink.addEventListener('click', function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});