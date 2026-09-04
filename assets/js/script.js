const navIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");

const toggleNavMenu = () => {
  navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("nav-toggle-open");
    menu.classList.toggle("menu--open");
    cover.classList.toggle("cover-show");
  });
};

const currentPageHandler = () => {
  const menuLinks = document.querySelectorAll(".menu__link");
  if (!menuLinks.length) {
    return;
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  menuLinks.forEach((link) => {
    const href = link.getAttribute('href');
    let clear = href;
    if (clear.startsWith('/')) {
      clear = clear.substring(1);
    }

    if (clear === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', function() {
      menuLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
};

document.addEventListener('DOMContentLoaded', currentPageHandler);

document.addEventListener('DOMContentLoaded', currentPageHandler);


const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-progress-bar");
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 50;

    if (isVisible && !bar.classList.contains("animated")) {
      const targetWidth = bar.getAttribute("data-width");
      if (targetWidth) {
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = targetWidth + "%";
          bar.classList.add("animated");
        }, 300);
      }
    }
  });
  setTimeout(animateSkillBars, 500)
  window.addEventListener("scroll", animateSkillBars);
  currentPageHandler();
};

window.addEventListener("load", () => {
  animateSkillBars();
  toggleNavMenu();
  currentPageHandler()
});

// const words = [
//   "Junior Front-End Developer",
//   "React Developer",
//   "JavaScript Developer",
//   "Web Designer",
// ];
// let wordIndex = 0;
// let isDeleting = false;
// let currentText = '';
// const typingElement = document.querySelector('.home__title');

// function typeWord(){
//     const currentWord = words[wordIndex];

// }
