import Main from "./pages/home/main_page.js";
import Game from "./pages/game/game_page.js";

const $app = document.querySelector(".App");

const routes = {
   "/": Main, 
   "/game": Game,
};


$app.innerHTML = routes["/"].template();

export const changeUrl = (requestedUrl) => {
    history.pushState(null, null, requestedUrl);
    $app.innerHTML = routes[requestedUrl].template();
};

window.addEventListener("popstate", () => {
    changeUrl(window.location.pathname);
});

/*메뉴 토글 동작 */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  });
  