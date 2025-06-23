const checkbox = document.getElementById("menu-toggle");
const nav = document.querySelector(".header_nav");

checkbox.addEventListener("change", () => {
  nav.classList.toggle("active", checkbox.checked);
});
document.querySelectorAll(".header_link").forEach(link => {
  link.addEventListener("click", () => {
    checkbox.checked = false;
    nav.classList.remove("active");
  });
});
