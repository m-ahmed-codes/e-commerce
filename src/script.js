
 const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".nav-menu");

 hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
 });

 document.querySelectorAll(".nav-link").forEach((link) =>
     link.addEventListener("click", () => {
         hamburger.classList.remove("active");
         navMenu.classList.remove("active");
     })
 );


 function scrollValue() {
     var navbar = document.getElementById('navbar');
     var logo = document.getElementById('logo-img')
     var scroll = window.scrollY;
     if (scroll < 200) {
         navbar.classList.remove('BgColour');
         logo.classList.remove('logo-scroll')
     } else {
         navbar.classList.add('BgColour');
         logo.classList.add('logo-scroll')
     }
 }

 window.addEventListener('scroll', scrollValue);