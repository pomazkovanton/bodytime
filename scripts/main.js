const buttonMenu = document.querySelector('.header__nav-btn');
const iconOpenMenu = buttonMenu.querySelector('.header__nav-ico-menu');
const iconCloseMenu = buttonMenu.querySelector('.header__nav-ico-cross');
const menu = document.querySelector('.header__nav-list');

buttonMenu.addEventListener('click', () => {
  iconOpenMenu.classList.toggle('header__nav-ico-menu_show');
  iconCloseMenu.classList.toggle('header__nav-ico-cross_show');
  menu.classList.toggle('header__nav-list_opened');
});
