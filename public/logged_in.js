import { waitForAuthState } from "../auth_state.js";

export async function handleHeaderLoginUI() {
  const user = await waitForAuthState();

  // DOM 렌더링 이후에 실행되도록 보장
  requestAnimationFrame(() => {
    const loginElements = document.querySelectorAll(".home-user");
    const loggedInElements = document.querySelectorAll(".home-logged-in");  // 선택적으로 로그인 후 요소 추가
    const loggedOutElements = document.querySelectorAll(".home-logged-out"); // 선택적으로 로그아웃 후 요소 추가

    // 로그인 상태에 따른 UI 제어
    loginElements.forEach(el => {
      el.style.display = user ? "none" : "inline";  // 로그인한 경우 기존 로그인/회원가입 숨김
      el.style.visibility = "visible";
    });

    loggedInElements.forEach(el => {
      el.style.display = user ? "inline" : "none";  // 로그인한 경우 표시
      el.style.visibility = "visible";
    });

    loggedOutElements.forEach(el => {
      el.style.display = user ? "none" : "inline";  // 로그아웃한 경우 표시
      el.style.visibility = "visible";
    });
  });

  // 쿠키에서 IsAdmin 확인 (로그인 상태와 관계 없이)
  requestAnimationFrame(() => {
    const isAdmin = document.cookie.split('; ').find(row => row.startsWith('isAdmin='))?.split('=')[1];

    const adminDivider = document.getElementById("admin-divider");
    const adminLink = document.getElementById("admin-link");

    if (adminDivider && adminLink) {
      if (isAdmin === 'true') {
        adminDivider.style.display = "inline";
        adminLink.style.display = "inline";
      } else {
        adminDivider.style.display = "none";
        adminLink.style.display = "none";
      }
    }
  });
}
