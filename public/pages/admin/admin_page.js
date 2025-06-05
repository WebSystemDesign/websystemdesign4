import { db } from "../../firebase.js";
import { collection, getDocs, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

class AdminContact {
    template() {
        return `
        <div class="wallpaper-container">
            <div class="admin-contact-container">
                <h1>문의글 관리</h1>
                <div id="contact-list">로딩 중...</div>
                <div id="popup">
                    <div class="popup-header">
                        <button id="close-popup" class="close-btn">&times;</button>
                    </div>
                    <div id="popup-content">로딩 중...</div>
                </div>
                <div id="overlay"></div>
            </div>
        </div>
        `;
    }

    async mounted() {
        const listContainer = document.getElementById("contact-list");
        const popup = document.getElementById("popup");
        const overlay = document.getElementById("overlay");
        const content = document.getElementById("popup-content");

        const closePopup = () => {
            popup.style.display = "none";
            overlay.style.display = "none";
        };

        document.getElementById("close-popup").addEventListener("click", closePopup);

        const querySnapshot = await getDocs(collection(db, "contacts"));
        listContainer.innerHTML = "";

        if (querySnapshot.empty) {
            listContainer.innerHTML = "<p>등록된 문의글이 없습니다.</p>";
        } else {
            querySnapshot.forEach(docSnap => {
                const data = docSnap.data();
                const timestamp = data.timestamp?.toDate?.().toLocaleString() || "시간정보없음";
                const docId = docSnap.id;

                const answered = !!data.answer;
                const statusClass = answered ? "answered":"unanswered";
                const item = document.createElement("div");
                item.className = "contact-item";
                item.innerHTML = `
                    <div class="contact-left">
                        <span class="q-icon">Q</span>
                        <span class="contact-title" title="${data.title}">${data.title}</span>
                    </div>
                    <div class="contact-right">
                        <span class = "contact-answered ${statusClass}">${answered ? "답변 완료" : "답변 필요"}</span>
                    </div>
                `;
                item.setAttribute("data-doc-id", docId);
                listContainer.appendChild(item);
            });
        }

        document.querySelectorAll(".contact-item").forEach(item => {
            item.addEventListener("click", async () => {
                const docId = item.getAttribute("data-doc-id");
                popup.style.display = "block";
                overlay.style.display = "block";
                content.innerHTML = "로딩 중...";

                const docRef = doc(db, "contacts", docId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    content.innerHTML = `
                        <h3>${data.title}</h3>
                        <p>${data.text}</p>
                        <p>작성자: ${data.email}</p>
                        <p>작성일: ${new Date(data.timestamp?.seconds * 1000).toLocaleString()}</p>
                        <p>현재 답변: ${data.answer || "없음"}</p>
                        <textarea id="admin-answer" placeholder="답변을 입력하세요">${data.answer || ""}</textarea>
                        <div class="popup-actions">
                            <button id="submit-answer">답변 등록</button>
                        </div>
                    `;

                    document.getElementById("submit-answer").addEventListener("click", async () => {
                        const answer = document.getElementById("admin-answer").value.trim();
                        if (!answer) {
                            alert("답변을 입력하세요.");
                            return;
                        }

                        await updateDoc(doc(db, "contacts", docId), { answer });
                        alert("답변이 등록되었습니다.");
                        closePopup();
                        location.reload();  // 갱신
                    });
                } else {
                    content.innerHTML = "문서를 찾을 수 없습니다.";
                }
            });
        });
    }
}

export default new AdminContact();
