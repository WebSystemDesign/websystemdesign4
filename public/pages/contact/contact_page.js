import { db } from "../../firebase.js";  // Firestore 설정
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

class Contact {
    template() {
        return `
        <div class="wallpaper-container contact-container">
            <h1 class="contact-header">문의 사항</h1>
            <span class="contact-header-text">궁금하신 점을 남겨주시면 답변드리겠습니다.</span>
            <div class="contact-header-line"></div>
            <form class="contact-form" id="contact-form">
                <label id="contact-title-label" for="contact-title">제목</label>
                <input type="text" id="contact-title" placeholder="제목을 입력해주세요" required>

                <label id="contact-text-label" for="contact-text">내용</label>
                <textarea id="contact-text" placeholder="문의 내용을 입력해주세요" required></textarea>

                <div class="contact-button-group">
                    <button type="submit" id="contact-submitBtn">등록</button>
                    <button type="reset" id="contact-cancelBtn">취소</button>
                </div>
            </form>
        </div>
        `;
    }

    mounted() {
        const form = document.getElementById("contact-form");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const auth = getAuth();
            const user = auth.currentUser;
            if (!user) {
                alert("로그인이 필요합니다.");
                return;
            }

            const title = document.getElementById("contact-title").value.trim();
            const text = document.getElementById("contact-text").value.trim();
            if (!title || !text) {
                alert("제목과 내용을 모두 입력해 주세요.");
                return;
            }

            try {
                await addDoc(collection(db, "contacts"), {
                    uid: user.uid,
                    email: user.email,
                    title,
                    text,
                    timestamp: serverTimestamp(),
                    answer: null  // 답변은 null로 초기화
                });
                alert("문의가 등록되었습니다.");
                form.reset();
            } catch (error) {
                console.error("등록 실패:", error);
                alert("문의 등록 중 오류가 발생했습니다.");
            }
        });
    }
}

export default new Contact();
