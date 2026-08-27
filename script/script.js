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

function WhatsApp() {
	const numero = "5511984501103";
	const mensagem = encodeURIComponent("Olá, Deivisson! Vim pela sua landing page.");
	const link = `https://wa.me/${numero}?text=${mensagem}`;
	window.open(link, "_blank");
}
function WhatsAppFraniel() {
	const numero = "5511992091856";
	const mensagem = encodeURIComponent("Olá! Vim por uma das paginas desenvolvidas por você.");
	const link = `https://wa.me/${numero}?text=${mensagem}`;
	window.open(link, "_blank");
}
sections.forEach(section => observer.observe(section));
