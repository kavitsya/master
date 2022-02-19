const btnHamburger = document.querySelector('.menu-header__icon');
const menuHeader = document.querySelector('.menu-header');


btnHamburger.addEventListener('click', () => {
    menuHeader.classList.toggle('_active-menu')
    document.body.classList.toggle('lock')
})