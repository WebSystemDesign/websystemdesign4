import Main from "./pages/home/main_page.js";
import Game from "./pages/game/game_page.js";

const $app = document.querySelector(".App");

const routes = {
   "/": Main, 
   "/game": Game,
};

export const changeUrl = (requestedUrl) => {
    history.pushState(null, null, requestedUrl);
    $app.innerHTML = routes[requestedUrl].template();
};

window.addEventListener("popstate", () => {
    $app.innerHTML = (routes[window.location.pathname] || routes["/"]).template();
});

function initRouter() {
    const route = routes[window.location.pathname] || routes["/"];
    $app.innerHTML = route.template();
}

document.addEventListener("DOMContentLoaded", initRouter);