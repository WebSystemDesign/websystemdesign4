import Main from "./pages/home/main_page.js";
import Game from "./pages/game/game_page.js";
import Login from "./pages/login/login_page.js";
import Signup from "./pages/signup/signup_page.js";
import NewsGame from "./pages/news_game/news_game_page.js";
import NewsGear from "./pages/news_gear/news_gear_page.js";
import Mypage from "./pages/mypage/mypage_page.js";
import DesktopSelect from "./pages/desktop_select/desktop_select_page.js";
import Console from "./pages/console/console_page.js";
import Accessory from "./pages/accessory/accessory_page.js";
import DesktopDetail from "./pages/desktop_detail/desktop_detail_page.js";
import Faqs from "./pages/faqs/faqs_page.js";
import FaqInpage from './pages/faqs/faqs_inpage.js';
import Donate from "./pages/donate/donate_page.js";
import Contact from "./pages/contact/contact_page.js";
import Offline from "./pages/offline/offline_page.js";
import Aboutus from "./pages/aboutus/aboutus_page.js";
import AdminContact from "./pages/admin/admin_page.js";
import { setupAuthHandlers } from "./user.js";
import { handleHeaderLoginUI } from "./logged_in.js";
import { setupLogoutButton } from "./pages/mypage/logout.js";
import { displayGames } from "./pages/game/game_image_loader.js";

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
   "/console": Console,
   "/accessory": Accessory,
   "/desktop_detail": DesktopDetail,
   "/faqs" : Faqs,
   "/faq-inpage": FaqInpage,
   "/donate": Donate,
   "/contact": Contact,
   "/offline": Offline,
   "/aboutus": Aboutus,
   "/admin": AdminContact,
};

export const changeUrl = async (requestedUrl) => {

    // 주소 표시줄에 URL 반영
    history.pushState(null, null, requestedUrl);

    // URL 전체에서 path 추출
    const url = new URL(window.location.origin + requestedUrl);
    const pathname = url.pathname; // "/faq-inpage"
    const page = routes[pathname]; // 라우터에서 path만 기준으로 매칭

    if (!page) {
        console.error("페이지를 찾을 수 없습니다:", pathname);
        return;
    }

    // 페이지 렌더링
    if (page.template.constructor.name === "AsyncFunction") {
        $app.innerHTML = await page.template();
    } else {
        $app.innerHTML = page.template();
    }
    
    //뉴스이벤트 처리
    if (typeof page.mounted === "function") {
        requestAnimationFrame(() => {
            page.mounted(); // DOM 렌더 후 후처리
        });
    }

    // game 페이지 구현
    if (requestedUrl === "/game") {
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
    else if (requestedUrl === "/mypage") {
        requestAnimationFrame(() => {
            setupLogoutButton();
        });
    }

    await handleHeaderLoginUI();
    setupLogoutButton();
};

window.addEventListener("popstate", async () => {
    const path = window.location.pathname;
    const page = routes[path] || routes["/"];

    if (page.template.constructor.name === "AsyncFunction") {
        $app.innerHTML = await page.template();
    } else {
        $app.innerHTML = page.template();
    }

    if (typeof page.mounted === "function") {
        requestAnimationFrame(() => {
            page.mounted();
        });
    }

    await handleHeaderLoginUI();
    setupLogoutButton();
});

async function initRouter() {
    const path = window.location.pathname;
    const page = routes[path] || routes["/"];

    if (page.template.constructor.name === "AsyncFunction") {
        $app.innerHTML = await page.template();
    } else {
        $app.innerHTML = page.template();
    }

    if (typeof page.mounted === "function") {
        requestAnimationFrame(() => {
            page.mounted();
        });
    }

    if (path === "/game") {
        requestAnimationFrame(() => {
            displayGames();
        });
    } else if (path === "/login" || path === "/signup") {
        requestAnimationFrame(() => {
            setupAuthHandlers(path);
        });
    } else if (path === "/mypage") {
        requestAnimationFrame(() => {
            setupLogoutButton();
        });
    }

    await handleHeaderLoginUI();
    setupLogoutButton();
}


document.addEventListener("DOMContentLoaded", async () => {
    await initRouter();
});

  
/*페이지 간 이동*/
document.addEventListener('click', e => {
    const link = e.target.closest('a');

    if (e.target.closest('.desktop-link-btn')) {
        e.preventDefault();
        const button = e.target.closest('.desktop-link-btn');
        const type = button.dataset.type;
        sessionStorage.setItem("specType", type);
        changeUrl("/desktop_detail");
    }

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
  