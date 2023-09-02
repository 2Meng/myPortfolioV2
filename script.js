const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

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

function removeEveryOther(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes("Remove")) {
      arr.splice(arr, 2);
    }
  }
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
