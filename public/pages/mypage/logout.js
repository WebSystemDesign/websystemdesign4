// logout_handler.js
import { auth } from '../../firebase.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';
import { changeUrl } from '../../main.js';  // SPA 라우팅을 사용할 경우

export function setupLogoutButton() {
  // 모든 로그아웃 버튼 id 리스트
  const logoutBtnIds = ["mypage-logout", "logout", "mobile-logout"];
  logoutBtnIds.forEach(id => {
    const logoutBtn = document.getElementById(id);
    if (logoutBtn && !logoutBtn.dataset.bound) {
      logoutBtn.addEventListener("click", async () => {
        try {
          await signOut(auth);
          document.cookie = "isAdmin=; Max-Age=0; path=/";
          sessionStorage.clear();
          alert("로그아웃 되었습니다.");
          changeUrl("/");  // SPA 라우팅
        } catch (error) {
          console.error("로그아웃 실패:", error);
          alert("로그아웃 중 오류가 발생했습니다.");
        }
      });

      logoutBtn.dataset.bound = "true";
    }
  });
}
