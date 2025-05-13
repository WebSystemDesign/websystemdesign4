// logout_handler.js
import { auth } from '../../firebase.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';
import { changeUrl } from '../../main.js';  // SPA 라우팅을 사용할 경우

export function setupLogoutButton() {
  const logoutBtn = document.getElementById("logout");
  if (!logoutBtn) {
    console.log("logout버튼 없음");
    return;
  }

  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      sessionStorage.clear();
      alert("로그아웃 되었습니다.");
      changeUrl("/");  // SPA 라우팅
      // 또는 페이지 새로고침 방식:
      // window.location.href = "/";
    } catch (error) {
      console.error("로그아웃 실패:", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  });
}
