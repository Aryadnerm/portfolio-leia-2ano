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

// Ampliação progressiva: sem suporte a dialog, os links abrem a imagem normalmente.
if (typeof HTMLDialogElement !== 'undefined' && HTMLDialogElement.prototype.showModal) {
  const dialog = document.createElement('dialog');
  dialog.className = 'poster-dialog';
  dialog.setAttribute('aria-labelledby', 'poster-dialog-title');
  dialog.innerHTML = '<header><h2 id="poster-dialog-title">Nosso olhar sobre o Brasil</h2><button type="button" autofocus>Fechar ✕</button></header><img alt=""><p></p><a class="full-image" target="_blank" rel="noopener">Abrir imagem em tamanho original ↗</a>';
  document.body.append(dialog);
  const fullImage = dialog.querySelector('img');
  let opener;
  document.querySelectorAll('.poster-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      const thumb = link.querySelector('img');
      fullImage.src = link.href;
      fullImage.alt = thumb.alt;
      dialog.querySelector('p').textContent = thumb.alt;
      dialog.querySelector('.full-image').href = link.href;
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (opener) opener.focus();
  });
}
