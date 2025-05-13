import Main from "./pages/home/main_page.js";
import Game from "./pages/game/game_page.js";
import Login from "./pages/login/login_page.js";
import Signup from "./pages/signup/signup_page.js";
import NewsGame from "./pages/news_game/news_game_page.js";
import NewsGear from "./pages/news_gear/news_gear_page.js";
import Mypage from "./pages/mypage/mypage_page.js";
import DesktopSelect from "./pages/desktop_select/desktop_select_page.js";
import { setupAuthHandlers } from "./user.js";

const $app = document.querySelector(".App");

const routes = {
   "/": Main, 
   "/game": Game,
   "/login": Login,
   "/signup": Signup,
   "/news_game": NewsGame,
   "/news_gear": NewsGear,
   "/mypage": Mypage,
   "/desktop_select": DesktopSelect,
};

export const changeUrl = async (requestedUrl) => {
    history.pushState(null, null, requestedUrl);
    $app.innerHTML = routes[requestedUrl].template();

    // game 페이지 구현
    if (requestedUrl === "/game") {
        const { displayGames } = await import("./pages/game/game_image_loader.js");
        requestAnimationFrame(() => {
            displayGames();
        });
    } 
    // login , signup 페이지 구현
    else if (requestedUrl === "/login" || requestedUrl === "/signup") {
        requestAnimationFrame(() => {
            setupAuthHandlers(requestedUrl);
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
  
/*페이지 간 이동*/
document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href').startsWith('/')) {
      e.preventDefault();
      changeUrl(link.getAttribute('href'));
    }

    /*main_page 버튼*/
    if (e.target.id === 'gameBtn') {
        changeUrl('/game');
    } else if (e.target.id === 'game-news') {
        changeUrl('/news_game');
    } else if (e.target.id === 'product-news') {
        changeUrl('/news_gear');
    }
});
  