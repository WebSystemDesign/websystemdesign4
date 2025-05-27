import { db, auth } from "../../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

async function loadMyContacts() {
    const user = auth.currentUser;
    if (!user) {
        alert("로그인이 필요합니다.");
        return;
    }

    const querySnapshot = await getDocs(collection(db, "contacts"));
    const listContainer = document.getElementById("my-contact-list");
    listContainer.innerHTML = "";

    querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        if (data.uid === user.uid) {
            const item = document.createElement("div");
            item.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.text}</p>
                <p>작성일: ${new Date(data.timestamp?.seconds * 1000).toLocaleString()}</p>
                <p>답변: ${data.answer || "없음"}</p>
            `;
            listContainer.appendChild(item);
        }
    });
}
