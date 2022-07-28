console.log("1. Верстка валидная 10/10\n2. Верстка семантическая 20/20\n3. Верстка соответствует макету 48/48\n4. Требования к css соблюдены 12/12\n5. Есть интерактивность 20/20");

const hamburger = document.querySelector('.hamburger');
const line = document.querySelector('.line');
const menu = document.querySelector('.hamburger_list');
const body = document.querySelector('body');

function openMenu() {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
    line.classList.toggle('open');
    body.classList.toggle('fixed-page');
}

hamburger.addEventListener('click', openMenu);

const navLinks = document.querySelectorAll('.header__link');

function closeMenu() {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
    line.classList.remove('open');
    body.classList.remove('fixed-page');
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));