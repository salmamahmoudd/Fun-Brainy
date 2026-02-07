const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

burger.onclick = () => {
  burger.classList.toggle('toggle');
  navLinks.classList.toggle('active');
};
