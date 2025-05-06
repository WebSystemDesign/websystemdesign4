import Main from "./pages/home/main_page.js";
import Game from "./pages/game/game_page.js";
import Login from "./pages/login/login_page.js";
import Signup from "./pages/signup/signup_page.js";
import NewsGame from "./pages/news_game/news_game_page.js";
import NewsGear from "./pages/news_gear/news_gear_page.js";

const $app = document.querySelector(".App");

const routes = {
   "/": Main, 
   "/game": Game,
   "/login": Login,
   "/signup": Signup,
   "/news_game": NewsGame,
   "/news_gear": NewsGear
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
    // login 페이지 구현
    else if (requestedUrl === "/login") {
        const loginBtn = document.getElementById("loginBtn");
        loginBtn.addEventListener("click", async () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                alert("success");
                changeUrl("/main");
            } catch(error) {
                document.getElementById("errorMsg").innerText = error.message;
            }
        })
    } 
    // signup 페이지 
    else if (requestedUrl === "/signup") {
        const signupBtn = document.getElementById("signupBtn");
        signupBtn.addEventListener("click", async () => {
          const email = document.getElementById("signupEmail").value;
          const password = document.getElementById("signupPassword").value;
    
          try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
    
            // Firestore에 users/{uid} 문서 생성
            const db = firebase.firestore();
            await db.collection("users").doc(user.uid).set({
              email: user.email,
              posts: [],
              gears: []
            });
    
            alert("회원가입 성공! 로그인 페이지로 이동합니다.");
            changeUrl("/login");
          } catch (error) {
            document.getElementById("signupError").innerText = error.message;
          }
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
  
/*페이지 간 이동*/
document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (link && link.getAttribute('href').startsWith('/')) {
      e.preventDefault();
      changeUrl(link.getAttribute('href'));
    }
});
  