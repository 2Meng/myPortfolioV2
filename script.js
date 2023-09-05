const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const contactFormBtn = document.getElementById("submit-form");
const checkbox = document.querySelector(".checkbox");
const mainPage = document.querySelector(".main-page");
const contact = document.getElementById("contact");

burger.addEventListener("click", () => {
  // Toggles navbar
  nav.classList.toggle("nav-active");
  // Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
    }
  });

  burger.classList.toggle("toggle");
});

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  contact.style.color = "black";
});
