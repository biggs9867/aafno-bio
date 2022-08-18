'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const progressBarPercents = [97, 89, 85, 87, 80, 93, 50];

const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");

window.addEventListener("scroll", () => {
  mainFn();
  });
  
  const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
  navbar.classList.add("sticky");
  } else {
  navbar.classList.remove("sticky");
  }
  
  sections.forEach((section, i) => {
  if (window.pageYOffset >= section.offsetTop - 10) {
  navbarLinks.forEach((navbarLink) => {
  navbarLink.classList.remove("change");
  });
  navbarLinks[i].classList.add("change");
  }
  });
  
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
  document.querySelectorAll(".progress-percent").forEach((el, i) => {
  el.style.width = `${progressBarPercents[i]}%`;
  el.previousElementSibling.firstElementChild.textContent =
  progressBarPercents[i];
  });
  }
  };
  
  mainFn();
  
  window.addEventListener("resize", () => {
  window.location.reload();
  });


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}

document.getElementById("myButton").onclick = function () {
  location.href = "../contact.html";
};




