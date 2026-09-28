/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(function () {

        preloader.style.opacity = "0";

        preloader.style.transition = "0.6s";

        setTimeout(function () {

            preloader.style.display = "none";

        }, 600);

    }, 1200);

});


/* =========================================
   NAVBAR SCROLL
========================================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function (section) {

    section.classList.add("reveal");

    observer.observe(section);

});


/* =========================================
   SAVE AS PDF
========================================= */

function printPortfolio() {

    window.print();

}


/* =========================================
   IMAGE ERROR HANDLER
========================================= */

const images = document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.background = "#202024";

        image.style.objectFit = "contain";

        image.style.padding = "50px";

        image.alt = "Upload portfolio photo";

    });

});