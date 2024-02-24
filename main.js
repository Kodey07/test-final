window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})


// const menuHamburger = document.querySelector(".menu-hamburger")
// const navLinks =  document.querySelector(".nav-links")

// menuHamburger.addEventListener('click',()=>{
// navLinks.classList.toggle('mobile-menu');
// })

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    body.classList.toggle('open');
})