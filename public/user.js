import { auth, db } from './firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';
import { doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';
import { serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

export function setupAuthHandlers(page) {
    if (page === "/login") {
        const loginBtn = document.getElementById("login-loginBtn");
        loginBtn.addEventListener("click", async () => {
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // 관리자 목록 조회
                const adminRef = doc(db, "adminUsers", "list");
                const adminSnap = await getDoc(adminRef);
                if (adminSnap.exists()) {
                    const adminList = adminSnap.data().email;
                    const isAdmin = adminList.includes(user.email);
                    document.cookie = `isAdmin=${isAdmin}; path=/`;
                }

                alert("로그인 성공!");
                window.location.href = "/";
            } catch (error) {
                document.getElementById("errorMsg").innerText = error.message;
            }
        });
    }

    if (page === "/signup") {
        const signupBtn = document.getElementById("signup-signupBtn");
        signupBtn.addEventListener("click", async () => {
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;
            const passwordCheck = document.getElementById("signup-password-check").value;

            if (password !== passwordCheck) {
                document.getElementById("errorMsg").innerText = "비밀번호가 일치하지 않습니다.";
                return;
            }

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    posts: [],
                    gears: [],
                    createdAt: serverTimestamp()
                });

                // 관리자 여부는 회원가입 시에는 바로 확인하지 않아도 됨 (일단 생략해도 무방)
                alert("회원가입 성공! 로그인 페이지로 이동합니다.");
                window.location.href = "/login";
            } catch (error) {
                console.error(error);
                document.getElementById("errorMsg").innerText = error.message || "회원가입에 실패하였습니다.";
            }
        });

        const resetBtn = document.getElementById("signup-resetBtn");
        resetBtn.addEventListener("click", () => {
            window.history.back();
        });
    }
}
