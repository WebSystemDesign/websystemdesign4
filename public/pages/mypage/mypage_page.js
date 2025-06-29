import { getCurrentUserInfo } from "../../current_user.js";
import { db } from "../../firebase.js";
import { collection, query, where, getDocs, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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
        let contactListHTML = "";

        if (userInfo) {
            const qEstimate = query(collection(db, "favorites"), where("uid", "==", userInfo.uid));
            const estimateSnapshot = await getDocs(qEstimate);
            if (!estimateSnapshot.empty) {
                estimateSnapshot.forEach(docSnap => {
                    const data = docSnap.data();
                    const timestamp = data.timestamp?.toDate?.().toLocaleString() || "시간정보없음";
                    const docId = docSnap.id;
                    estimateListHTML += `<li><button class="estimate-btn" data-docid="${docId}">${timestamp}</button></li>`;
                });
            } else {
                estimateListHTML = "<li>저장된 견적이 없습니다.</li>";
            }

            const qContact = query(collection(db, "contacts"), where("uid", "==", userInfo.uid));
            const contactSnapshot = await getDocs(qContact);
            if (!contactSnapshot.empty) {
                contactSnapshot.forEach(docSnap => {
                    const data = docSnap.data();
                    const timestamp = data.timestamp?.toDate?.().toLocaleString() || "시간정보없음";
                    const docId = docSnap.id;
                    contactListHTML += `<li><button class="contact-btn" data-docid="${docId}">${timestamp}</button></li>`;
                });
            } else {
                contactListHTML = "<li>등록된 문의가 없습니다.</li>";
            }

        } else {
            estimateListHTML = "<li>로그인이 필요합니다.</li>";
            contactListHTML = "<li>로그인이 필요합니다.</li>";
        }

        return `
            <div class="wallpaper-container">
                <h1 class="page-logo">MyPage</h1>
                <div class="mypage-upper">
                    <div id="mypage-profile">
                        <img id="mypage-profile" src="../../sources/profile-img.png" alt="profile-img">
                    </div>
                    <div id="mypage-together-day">
                        <p><span id="mypage-username">${email}</span>님과</p>
                        <p><span id="mypage-count">${pastTime}</span>일째 함께 하는 중</p>
                    </div>
                </div>
                <div class="mypage-lists">
                    <details>
                        <summary>문의 목록</summary>
                        <ul>
                            ${contactListHTML}
                        </ul>
                    </details>
                    <details>
                        <summary>견적 목록</summary>
                        <ul>
                            ${estimateListHTML}
                        </ul>
                    </details>
                </div>


                <!-- 팝업 컨테이너 -->
                <div id="mypage-popup">
                    <div id="mypage-popup-header"><button id="mypage-close-popup">X</button></div>
                    <div id="mypage-popup-content">로딩 중...</div>
                </div>
                <div id="mypage-overlay"></div>
            </div>
        `;
    }

    async mounted() {
        // 팝업 열기/닫기
        const popup = document.getElementById("mypage-popup");
        const overlay = document.getElementById("mypage-overlay");
        const content = document.getElementById("mypage-popup-content");

        const closePopup = () => {
            popup.style.display = "none";
            overlay.style.display = "none";
        };

        document.getElementById("mypage-close-popup").addEventListener("click", closePopup);

        // 견적 클릭 시 팝업
        document.querySelectorAll(".estimate-btn").forEach(button => {
            button.addEventListener("click", async (e) => {
                const docId = e.target.dataset.docid;
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

        // 문의 클릭 시 팝업
        document.querySelectorAll(".contact-btn").forEach(button => {
            button.addEventListener("click", async (e) => {
                const docId = e.target.dataset.docid;
                popup.style.display = "block";
                overlay.style.display = "block";
                content.innerHTML = "로딩 중...";

                const docRef = doc(db, "contacts", docId);
                const docSnap = await getDoc(docRef);
                const userInfo = await getCurrentUserInfo();

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    let popupHTML = `
                        <h3>${data.title}</h3>
                        <p>${data.text}</p>
                        <p>작성일: ${new Date(data.timestamp?.seconds * 1000).toLocaleString()}</p>
                        <p>답변: ${data.answer || "아직 답변이 없습니다."}</p>
                    `;
                    content.innerHTML = popupHTML;
                } else {
                    content.innerHTML = `<p style="color: #000;">문서를 찾을 수 없습니다.</p>`;
                }
            });
        });
    }
}

export default new Mypage();
