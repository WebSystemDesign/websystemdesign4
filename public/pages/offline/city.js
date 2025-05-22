import { db } from "../../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export async function loadStoreAndDisplayCity(){
    const storeDocs = await getDocs(collection(db, "stores"));
    
        for (const doc of storeDocs.docs) {
            const store = doc.data();
    
            // address가 없으면 무시
            if (!store.address || typeof store.address !== 'string') {
                console.warn("주소 없음 또는 잘못된 주소:", store);
                continue;
            }
    
        }
}