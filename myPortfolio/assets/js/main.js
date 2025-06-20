const { default: cli } = require("@angular/cli");

/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

/* Menu show - hidden */

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
});

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/
/*
    var servicesSwiper = new Swiper('.services-swiper', {

    spaceBetween: 32,
         pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

        breakpoints: {

        768: {
          slidesPerView: 2,        },
        1028: {
          slidesPerView: 3,
     
        },
      },

    });

    */
/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Active work */

/*=============== RESUME ===============*/

/*=============== TESTIMONIALS SWIPER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.getElementById('style-switcher'),
  switcherToggle = document.getElementById('switcher-toggle'),
  switcherLink = document.querySelectorAll('.style-switcher-link'); 

// Show Switcher Panel
switcherToggle.addEventListener('click', () => {
  styleSwitcher.classList.add('show-switcher');
});

// Optional: Close button functionality
document.getElementById('style-switcher-close').addEventListener('click', () => {
  styleSwitcher.classList.remove('show-switcher');
});

/*=============== THEME COLORS ===============*/
const colorButtons = document.querySelectorAll('.style-switcher-color');

colorButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    colorButtons.forEach((b) => b.classList.remove('activate-color'));
    btn.classList.add('activate-color');

    // Get the hue from inline style
    const hue = btn.style.getPropertyValue('--hue');
    document.documentElement.style.setProperty('--hue', hue);
  });
});

/*=============== LIGHT/DARK MODE ===============*/
const themeRadios = document.querySelectorAll('input[name="body-theme"]');

themeRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === 'light') {
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
  });
});
