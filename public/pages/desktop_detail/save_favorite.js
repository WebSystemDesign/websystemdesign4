import { db } from "../../firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

/**
 * 현재 페이지의 표 데이터를 가져와 즐겨찾기에 저장
 * @param {Array} tableData 표 데이터 배열 (각 행은 { type, image, name, price, quantity })
 */
export async function saveFavoriteParts(tableData) {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        alert("로그인이 필요합니다.");
        return;
    }

    if (!tableData || tableData.length === 0) {
        alert("저장할 데이터가 없습니다.");
        return;
    }

    try {
        await addDoc(collection(db, "favorites"), {
            uid: user.uid,
            timestamp: serverTimestamp(),
            parts: tableData
        });
        alert("견적이 마이페이지에 저장되었습니다!");
    } catch (error) {
        console.error("저장 실패:", error);
        alert("저장 중 오류가 발생했습니다.");
    }
}

/**
 * 현재 페이지의 표 데이터를 추출 (render_table.js의 표 기준)
 * @returns {Array} 표 데이터 배열
 */
export function getCurrentTableData() {
    const rows = document.querySelectorAll(".part-table tr");
    const data = [];

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        if (cells.length === 5) {
            data.push({
                type: cells[0].textContent,
                image: cells[1].querySelector("img")?.src || "",
                name: cells[2].textContent,
                price: cells[3].textContent,
                quantity: cells[4].textContent
            });
        }
    });

    return data;
}
