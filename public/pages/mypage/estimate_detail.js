import { db } from "../../firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

class EstimateDetail {
    async template(params) {  // params: { docId }
        const docRef = doc(db, "favorites", params.docId);
        const docSnap = await getDoc(docRef);
        let contentHTML = "";

        if (docSnap.exists()) {
            const data = docSnap.data();
            const parts = data.parts || [];

            if (parts.length > 0) {
                contentHTML = "<table border='1'><tr><th>종류</th><th>이미지</th><th>이름</th><th>가격</th><th>수량</th></tr>";
                parts.forEach(part => {
                    contentHTML += `
                        <tr>
                            <td>${part.type}</td>
                            <td><img src="${part.image}" width="50"></td>
                            <td>${part.name}</td>
                            <td>${part.price}</td>
                            <td>${part.quantity}</td>
                        </tr>
                    `;
                });
                contentHTML += "</table>";
            } else {
                contentHTML = "<p>부품 데이터가 없습니다.</p>";
            }
        } else {
            contentHTML = "<p>문서를 찾을 수 없습니다.</p>";
        }

        return `
            <div>
                <h1>견적 상세 페이지</h1>
                ${contentHTML}
                <a href="#/mypage">← 마이페이지로 돌아가기</a>
            </div>
        `;
    }
}

export default new EstimateDetail();