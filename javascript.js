function configurarMenuMobile() {
  const botaoMenu = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  if (!botaoMenu || !navbar) return;

  botaoMenu.setAttribute('aria-expanded', 'false');

  botaoMenu.addEventListener('click', () => {
    const aberto = navbar.classList.toggle('ativo');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
  });

  navbar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('ativo');
      botaoMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

configurarMenuMobile();