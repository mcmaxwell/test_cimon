//toogleMenu
const toogleMenu = document.querySelector('.toggle-menu');
 toogleMenu.onclick = (e) => {
  toogleMenu.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
  e.preventDefault();
};
