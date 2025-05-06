const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
    console.log("클릭됨");
    menu.classList.toggle("hidden");
    console.log("hidden 여부:", menu.classList.contains("hidden"));
});