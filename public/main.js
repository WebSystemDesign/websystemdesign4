import Main from "./pages/home/main_page.js";
import Game from "./pages/game/game_page.js";

const $app = document.querySelector(".App");

const routes = {
   "/": Main, 
   "/game": Game,
};

export const changeUrl = async (requestedUrl) => {
    history.pushState(null, null, requestedUrl);
    $app.innerHTML = routes[requestedUrl].template();

    // game 페이지 구현
    if (requestedUrl === "/game") {
        const {default: loadAllGameData} = await import("./pages/game/game_image_loader.js");
        requestAnimationFrame(() => {
            loadAllGameData();
        });
    }
};

window.addEventListener("popstate", () => {
    $app.innerHTML = (routes[window.location.pathname] || routes["/"]).template();
});

function initRouter() {
    const route = routes[window.location.pathname] || routes["/"];
    $app.innerHTML = route.template();
}

document.addEventListener("DOMContentLoaded", initRouter);
    changeUrl(window.location.pathname);

/*메뉴 토글 동작 */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    if (toggleButton && navMenu) {
        toggleButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
  });
  
