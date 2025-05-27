import { getCurrentUserInfo } from "../../current_user.js";
import { db } from "../../firebase.js";
import { collection, query, where, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

class Mypage {
    async template() {
        const userInfo = await getCurrentUserInfo();
        const email = userInfo ? userInfo.email : "방문자";
        const signupDate = userInfo ? userInfo.createdAt : "로그인 정보 없음";
        let pastTime;
        if (signupDate !== "로그인 정보 없음") {
            const today = new Date();
            pastTime = today - signupDate;
            pastTime = Math.round(pastTime / (1000 * 60 * 60 * 24)) + 1;
        } else {
            pastTime = "???";
        }

        let estimateListHTML = "";
        if (userInfo) {
            const q = query(collection(db, "favorites"), where("uid", "==", userInfo.uid));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                querySnapshot.forEach(docSnap => {
                    const data = docSnap.data();
                    const timestamp = data.timestamp?.toDate?.().toLocaleString() || "시간정보없음";
                    const docId = docSnap.id;
                    estimateListHTML += `<li><button class="estimate-btn" data-docid="${docId}">${timestamp}</button></li>`;
                });
            } else {
                estimateListHTML = "<li>저장된 견적이 없습니다.</li>";
            }
        } else {
            estimateListHTML = "<li>로그인이 필요합니다.</li>";
        }

        return `
            <div class="mypage-container">
                <h1 id="mypage-text">마이페이지</h1>
                <div class="mypage-upper">
                    <div id="mypage-profile">
                        <img id="mypage-profile" src="../../sources/test-profile-image.jpg" alt="profile-img">
                    </div>
                    <div id="mypage-together-day">
                        <p><span id="mypage-username">${email}</span>님과<span id="mypage-count">${pastTime}</span>일째 함께 하는 중</p>
                    </div>
                </div>
                <div class="mypage-lists">
                    <details>
                        <summary>문의 목록</summary>
                        <ul>
                            <li>문의 1</li>
                            <li>문의 2</li>
                            <li>문의 3</li>
                        </ul>
                    </details>
                    <details>
                        <summary>견적 목록</summary>
                        <ul>
                            ${estimateListHTML}
                        </ul>
                    </details>
                </div>
                <button type="button" id="logout">로그아웃</button>

                <!-- 팝업 컨테이너 -->
                <div id="popup">
                    <button id="close-popup">닫기</button>
                    <div id="popup-content">로딩 중...</div>
                </div>
                <div id="overlay"></div>
            </div>
        `;
    }

    async mounted() {
        document.querySelectorAll(".estimate-btn").forEach(button => {
            button.addEventListener("click", async (e) => {
                const docId = e.target.dataset.docid;
                const popup = document.getElementById("popup");
                const overlay = document.getElementById("overlay");
                const content = document.getElementById("popup-content");

                popup.style.display = "block";
                overlay.style.display = "block";
                content.innerHTML = "로딩 중...";

                const docRef = doc(db, "favorites", docId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const parts = data.parts || [];
                    if (parts.length > 0) {
                        let tableHTML = "<table><tr><th>종류</th><th>이미지</th><th>이름</th><th>가격</th><th>수량</th></tr>";
                        parts.forEach(part => {
                            tableHTML += `
                                <tr>
                                    <td>${part.type}</td>
                                    <td><img src="${part.image}" width="50"></td>
                                    <td>${part.name}</td>
                                    <td>${part.price}</td>
                                    <td>${part.quantity}</td>
                                </tr>
                            `;
                        });
                        tableHTML += "</table>";
                        content.innerHTML = tableHTML;
                    } else {
                        content.innerHTML = "부품 데이터가 없습니다.";
                    }
                } else {
                    content.innerHTML = "문서를 찾을 수 없습니다.";
                }
            });
        });

        document.getElementById("close-popup").addEventListener("click", () => {
            document.getElementById("popup").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        });
    }
}

export default new Mypage();