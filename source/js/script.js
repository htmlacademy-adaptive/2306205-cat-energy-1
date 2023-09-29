let navToggle = document.querySelector('.main-nav__toggle');

navToggle.classList.add('main-nav__toggle--closed');

navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('main-nav__toggle--closed');
});
