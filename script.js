document.addEventListener("scroll", () => {
  const navbar = document.getElementById("desktop-nav");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function openSidebar() {
  document.getElementById("mobile-sidebar").style.width = "250px"; 
  document.getElementById("sidebar-scr-overlay").style.display = "block"; 
}

function closeSidebar() {
  document.getElementById("mobile-sidebar").style.width = "0"; 
  document.getElementById("sidebar-scr-overlay").style.display = "none";
}
