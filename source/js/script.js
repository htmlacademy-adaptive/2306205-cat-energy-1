let headerWrap = document.querySelector('.header__wrap');
let navToggle = document.querySelector('.header__toggle');

headerWrap.classList.remove('header__wrap--no-js');
navToggle.classList.add('header__toggle--closed');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('header__toggle--closed')) {
    navToggle.classList.remove('header__toggle--closed');
    navToggle.classList.add('header__toggle--opened');
  } else {
    navToggle.classList.add('header__toggle--closed');
    navToggle.classList.remove('header__toggle--opened');
  }
});
