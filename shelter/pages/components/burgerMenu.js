const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');
const logo = document.querySelector('.logo');
const doc = document.querySelector('html');
const menuLinks = [...document.querySelectorAll('.nav__list-link')];

function toggleMenu () {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
  logo.classList.toggle('open');
  doc.classList.toggle('open');
}

const burgerSubscribe = () => {
  burger.addEventListener('click', toggleMenu);
  menuLinks.forEach((el) => {
    el.addEventListener('click', toggleMenu)
  });
}

export default burgerSubscribe;



