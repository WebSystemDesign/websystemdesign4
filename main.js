import Main from "./pages/main_page.js";

const $app = document.querySelector(".App");

const routes = {
   "/": Main, 
};

$app.innerHTML = routes["/"].template();

export const changeUrl = (requestedUrl) => {
    history.pushState(null, null, requestedUrl);
    $app.innerHTML = routes[requestedUrl].template();
};

window.addEventListener("popstate", () => {
    changeUrl(window.location.pathname);
});