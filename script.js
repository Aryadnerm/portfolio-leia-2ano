// Apenas o menu no celular precisa de JavaScript. Todo o conteúdo funciona sem ele.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const mobile = window.matchMedia('(max-width: 800px)');
function setOpen(open) {
  menu.hidden = mobile.matches && !open;
  menuButton.setAttribute('aria-expanded', String(!menu.hidden));
  menuButton.textContent = menu.hidden ? 'Menu' : 'Fechar menu';
}
function syncMenu() {
  menuButton.hidden = !mobile.matches;
  setOpen(!mobile.matches);
}
menuButton.addEventListener('click', () => setOpen(menu.hidden));
menu.addEventListener('click', event => {
  if (event.target.closest('a') && mobile.matches) setOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && !menu.hidden) {
    setOpen(false);
    menuButton.focus();
  }
});
mobile.addEventListener('change', syncMenu);
syncMenu();
