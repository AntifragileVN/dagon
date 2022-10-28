const links = document.querySelectorAll(".nav__link");

handleNavLinkClick = (e) => {
  links.forEach((link) => {
    if (link.classList.contains("nav__link--active")) {
      link.classList.remove("nav__link--active");
    }
  });
  e.target.classList.toggle("nav__link--active");
};

links.forEach((link) => {
  link.addEventListener("click", handleNavLinkClick);
});
