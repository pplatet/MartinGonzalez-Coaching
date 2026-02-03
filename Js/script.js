const navLinks = document.querySelectorAll(".nav-menu .nav-links");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

if (menuOpenButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
  });
}

//Close menu when the close button is clicked 
if (menuCloseButton) {
  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
}

//Close menu when the nav link is clicked 
navLinks.forEach(links => {
  links.addEventListener("click", () => menuOpenButton.click());
})

//INITIALIZE SWIPER
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spacebetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true, 
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive Breakpoints
  breakpoints:{
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

const header = document.querySelector("header");

//Trigger Glass Effect
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});
