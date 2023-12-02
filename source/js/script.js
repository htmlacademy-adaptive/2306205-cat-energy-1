let mainNav = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--no-js');
navToggle.classList.add('main-nav__toggle--closed');

navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('main-nav__toggle--closed');
});
