/*document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon"); // works with class or id
  const navLinks = document.querySelector(".nav-links");

  if (!menuIcon || !navLinks) return; // nothing to do if elements missing

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});*/
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  if (!menuIcon || !navLinks) return;

  // Toggle menu open/close when clicking hamburger
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Automatically close menu after clicking a link (on mobile)
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });
});


