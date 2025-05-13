import { auth } from './firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

/**
 * Firebase 인증 상태가 초기화되기를 기다림
 * @returns {Promise<User|null>} 로그인된 사용자 또는 null
 */
export function waitForAuthState() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
}
