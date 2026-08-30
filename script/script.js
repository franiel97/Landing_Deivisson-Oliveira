// ===== Menu mobile =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
  const icon = navToggle.querySelector('i');
  const isOpen = nav.classList.contains('is-open');
  icon.classList.toggle('fa-bars', !isOpen);
  icon.classList.toggle('fa-xmark', isOpen);
});

// Fecha o menu ao clicar em um link (mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    const icon = navToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

// ===== Link ativo conforme a seção visível =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle(
          'nav__link--active',
          link.getAttribute('href') === `#${id}`
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

function WhatsApp(idBotao) {
  const numero = "5511979898680";
  let mensagem;

  if (idBotao === "personal") {
    mensagem = "Olá! Vi o site e quero saber mais sobre os planos de Personal Trainer.";
  } else if (idBotao === "aval_fisica") {
    mensagem = "Olá! Gostaria de solicitar uma Avaliação Física.";
  } else if (idBotao === "treino_online") {
    mensagem = "Olá! Quero começar o Treinamento Online agora mesmo.";
  } else if (idBotao === "ebook") {
    mensagem = "Olá! Quero garantir o E-book, pode me passar os detalhes?";
  } else if (idBotao == "WhatsApp") {
    mensagem = "Olá! Vim pelo seu site e quero saber mais sobre os seus serviços.";
  } else {
    mensagem = "Olá! Vim pelo seu site e quero saber mais sobre os seus serviços.";
  }

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
}

function WhatsAppFraniel() {
	const numero = "5511992091856";
	const mensagem = encodeURIComponent("Olá! Vim por uma das paginas desenvolvidas por você. Quero um site também!");
	const link = `https://wa.me/${numero}?text=${mensagem}`;
	window.open(link, "_blank");
}
sections.forEach(section => observer.observe(section));
