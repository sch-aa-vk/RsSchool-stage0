console.log('Смена изображений в секции portfolio +25');
console.log('Перевод страницы на два языка +2.5');
console.log('Переключение светлой и тёмной темы +25');
console.log('Дополнительный функционал +7.5');
console.log('60/75');

// hamburger start
//open function srtart
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__list');
const body = document.querySelector('body');

function toggleMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  body.classList.toggle('fixed-page');
}

hamburger.addEventListener('click', toggleMenu);
// open function end

// close function start
const navLinks = document.querySelectorAll('.header__link');

function closeMenu() {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
    body.classList.remove('fixed-page');
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

// close function end
// hamburger end

// portfolio start

const portfolioImages = document.querySelectorAll('.portfolio__image');

const portfolioBtnWinter = document.querySelector('.button__winter');
portfolioBtnWinter.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpeg`);
    portfolioBtnAutumn.classList.remove('active');
    portfolioBtnSpring.classList.remove('active');
    portfolioBtnSummer.classList.remove('active');
    portfolioBtnWinter.classList.add('active');
    localStorage.setItem('winter', 'true');
    localStorage.setItem('spring', 'false');
    localStorage.setItem('summer', 'false');
    localStorage.setItem('autumn', 'false');
});

const portfolioBtnSpring = document.querySelector('.button__spring');
portfolioBtnSpring.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpeg`);
    portfolioBtnAutumn.classList.remove('active');
    portfolioBtnSpring.classList.add('active');
    portfolioBtnSummer.classList.remove('active');
    portfolioBtnWinter.classList.remove('active');
    localStorage.setItem('winter', 'false');
    localStorage.setItem('spring', 'true');
    localStorage.setItem('summer', 'false');
    localStorage.setItem('autumn', 'false');
});

const portfolioBtnSummer = document.querySelector('.button__summer');
portfolioBtnSummer.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpeg`);
    portfolioBtnAutumn.classList.remove('active');
    portfolioBtnSpring.classList.remove('active');
    portfolioBtnSummer.classList.add('active');
    portfolioBtnWinter.classList.remove('active');
    localStorage.setItem('winter', 'false');
    localStorage.setItem('spring', 'false');
    localStorage.setItem('summer', 'true');
    localStorage.setItem('autumn', 'false');
});

const portfolioBtnAutumn = document.querySelector('.button__autumn');
portfolioBtnAutumn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpeg`);
    portfolioBtnAutumn.classList.add('active');
    portfolioBtnSpring.classList.remove('active');
    portfolioBtnSummer.classList.remove('active');
    portfolioBtnWinter.classList.remove('active');
    localStorage.setItem('winter', 'false');
    localStorage.setItem('spring', 'false');
    localStorage.setItem('summer', 'false');
    localStorage.setItem('autumn', 'true');
});

if(localStorage.getItem('winter') == 'true') {
    portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpeg`);
    portfolioBtnAutumn.classList.remove('active');
    portfolioBtnSpring.classList.remove('active');
    portfolioBtnSummer.classList.remove('active');
    portfolioBtnWinter.classList.add('active');
}

if(localStorage.getItem('spring') == 'true') {
    portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpeg`);
    portfolioBtnAutumn.classList.remove('active');
    portfolioBtnSpring.classList.add('active');
    portfolioBtnSummer.classList.remove('active');
    portfolioBtnWinter.classList.remove('active');
}

if(localStorage.getItem('summer') == 'true') {
    portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpeg`);
    portfolioBtnAutumn.classList.remove('active');
    portfolioBtnSpring.classList.remove('active');
    portfolioBtnSummer.classList.add('active');
    portfolioBtnWinter.classList.remove('active');
}

if(localStorage.getItem('autumn') == 'true') {
    portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpeg`);
    portfolioBtnAutumn.classList.add('active');
    portfolioBtnSpring.classList.remove('active');
    portfolioBtnSummer.classList.remove('active');
    portfolioBtnWinter.classList.remove('active');
}

// portfolio end

// theme style start

const moon = document.querySelector('.header__moon');
const sun = document.querySelector('.header__sun')
const title = document.querySelectorAll('.section__title');
const header = document.querySelectorAll('.header__link');
const line1 = document.querySelector('.line1');
const line3 = document.querySelector('.line3');
const adMenu = document.querySelector('.header__list');
const itemTitile = document.querySelectorAll('.skills__item__title');
const itemDscp = document.querySelectorAll('.skills__item__dscp');

moon.addEventListener('click', () => {
    moon.classList.toggle('ligth-theme');
    sun.classList.toggle('ligth-theme');
    title.forEach((el) => el.classList.toggle('ligth-theme'));
    body.classList.toggle('ligth-theme');
    header.forEach((el) => el.classList.toggle('ligth-theme'));
    line1.classList.toggle('ligth-theme');
    line3.classList.toggle('ligth-theme');
    adMenu.classList.toggle('ligth-theme');
    itemTitile.forEach((el) => el.classList.toggle('ligth-theme'));
    itemDscp.forEach((el) => el.classList.toggle('ligth-theme'));
    portfolioBtnAutumn.classList.toggle('ligth-theme');
    portfolioBtnWinter.classList.toggle('ligth-theme');
    portfolioBtnSpring.classList.toggle('ligth-theme');
    portfolioBtnSummer.classList.toggle('ligth-theme');
    localStorage.setItem('ligth-theme', 'true');
    localStorage.setItem('dark-theme', 'false');
});

sun.addEventListener('click', () => {
    moon.classList.toggle('ligth-theme');
    sun.classList.toggle('ligth-theme');
    title.forEach((el) => el.classList.toggle('ligth-theme'));
    body.classList.toggle('ligth-theme');
    header.forEach((el) => el.classList.toggle('ligth-theme'));
    line1.classList.toggle('ligth-theme');
    line3.classList.toggle('ligth-theme');
    adMenu.classList.toggle('ligth-theme');
    itemTitile.forEach((el) => el.classList.toggle('ligth-theme'));
    itemDscp.forEach((el) => el.classList.toggle('ligth-theme'));
    portfolioBtnAutumn.classList.toggle('ligth-theme');
    portfolioBtnWinter.classList.toggle('ligth-theme');
    portfolioBtnSpring.classList.toggle('ligth-theme');
    portfolioBtnSummer.classList.toggle('ligth-theme');
    localStorage.setItem('dark-theme', 'true');
    localStorage.setItem('ligth-theme', 'false');
});

if(localStorage.getItem('ligth-theme') == 'true') {
    moon.classList.add('ligth-theme');
    sun.classList.add('ligth-theme');
    title.forEach((el) => el.classList.add('ligth-theme'));
    body.classList.add('ligth-theme');
    header.forEach((el) => el.classList.add('ligth-theme'));
    line1.classList.add('ligth-theme');
    line3.classList.add('ligth-theme');
    adMenu.classList.add('ligth-theme');
    itemTitile.forEach((el) => el.classList.add('ligth-theme'));
    itemDscp.forEach((el) => el.classList.add('ligth-theme'));
    portfolioBtnAutumn.classList.add('ligth-theme');
    portfolioBtnWinter.classList.add('ligth-theme');
    portfolioBtnSpring.classList.add('ligth-theme');
    portfolioBtnSummer.classList.add('ligth-theme');
}

if(localStorage.getItem('dark-theme') == 'true') {
    moon.classList.remove('ligth-theme');
    sun.classList.remove('ligth-theme');
    title.forEach((el) => el.classList.remove('ligth-theme'));
    body.classList.remove('ligth-theme');
    header.forEach((el) => el.classList.remove('ligth-theme'));
    line1.classList.remove('ligth-theme');
    line3.classList.remove('ligth-theme');
    adMenu.classList.remove('ligth-theme');
    itemTitile.forEach((el) => el.classList.remove('ligth-theme'));
    itemDscp.forEach((el) => el.classList.remove('ligth-theme'));
    portfolioBtnAutumn.classList.remove('ligth-theme');
    portfolioBtnWinter.classList.remove('ligth-theme');
    portfolioBtnSpring.classList.remove('ligth-theme');
    portfolioBtnSummer.classList.remove('ligth-theme');
}

//theme style end

// translate function start 

const en = document.querySelector('.header__link-en');
const ru = document.querySelector('.header__link-ru');

en.addEventListener('click', () => {
    en.classList.add('active');
    ru.classList.remove('active');
    localStorage.setItem('en', 'true');
    localStorage.setItem('ru', 'false');
})

ru.addEventListener('click', () => {
    en.classList.remove('active');
    ru.classList.add('active');
    localStorage.setItem('en', 'false');
    localStorage.setItem('ru', 'true');
})

if (localStorage.getItem('en') == 'true') {
    en.classList.add('active');
    ru.classList.remove('active');
}

if(localStorage.getItem('ru') == 'true') {
    en.classList.remove('active');
    ru.classList.add('active');
}

// translate function end
