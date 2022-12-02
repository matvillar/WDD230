const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

// Burger Menu
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.querySelectorAll('.menu li').forEach((n) =>
  n.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
  })
);
