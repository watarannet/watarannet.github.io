const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const dialog = document.querySelector('.reserve-dialog');

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.js-reserve').forEach((button) => {
  button.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    dialog.showModal();
  });
});

document.querySelectorAll('.close-dialog').forEach((button) => button.addEventListener('click', () => dialog.close()));
