import { waitForAuthState } from "../auth_state.js";

export async function handleHeaderLoginUI() {
  const user = await waitForAuthState();

  // DOM 렌더링 이후에 실행되도록 보장
  requestAnimationFrame(() => {
    const loginElements = document.querySelectorAll(".home-user");
    loginElements.forEach(el => {
      el.style.display = user ? "none" : "inline";
      el.style.visibility = "visible";
    });
  });
}
