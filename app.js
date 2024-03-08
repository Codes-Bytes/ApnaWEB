//NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const navLinks = navMenu.querySelectorAll("li");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("no-scroll");
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function handleScroll() {
  if (window.scrollY > 150) {
    nav.classList.add("sticky-nav");
  } else {
    nav.classList.remove("sticky-nav");
  }
}
window.addEventListener("scroll", handleScroll);

//TYPING DELETING TEXT
function initTypedText() {
  const options = {
    strings: [
      "<span style='font-family: Times New Roman; color:white; font-weight:bold;'>Hello, We Are </span><span style='font-family: Times New Roman;color:white;'>Apna</span><span style='color: orange; font-family: Times New Roman;'>WEB</span>,",
      "By Codes &amp; Bytes,",
      "A Software Solutions Firm,",
      "From Hyderabad, India.",
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1000,
    startDelay: 400,
    loop: true,
  };
  const typed = new Typed("#typed-text", options);
}

initTypedText();

//FILTER OPTIONS
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter button");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");
      filterProjects(filterValue);
    });
  });

  function filterProjects(category) {
    projectCards.forEach((card) => {
      const projectCategory = card.getAttribute("data-category");
      if (category === "all" || projectCategory === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
