let navToggle = document.querySelector('.main-nav__toggle');

navToggle.classList.remove('main-nav__toggle--no-js');
navToggle.classList.add('main-nav__toggle--closed');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-nav__toggle--closed')) {
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
  }
});
