import { db } from "../../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export async function loadStoreAndDisplayCity() {
    const storeDocs = await getDocs(collection(db, "stores"));
    
    let cityStores = {};

    for (const doc of storeDocs.docs) {
        const store = doc.data();
        if (!store.address || typeof store.address !== 'string') {
            console.warn("주소 없음 또는 잘못된 주소:", store);
            continue;
        }

        const cityName = store.city;  // 이미 city 속성이 있는 경우
        if (!cityStores[cityName]) {
            cityStores[cityName] = [];
        }
        cityStores[cityName].push(store);
    }

    const cityDiv = document.getElementById("city");
    cityDiv.innerHTML = "";
    cityDiv.style.width = "80%";
    cityDiv.style.textAlign = "left";

    const cityList = document.createElement("ul");
    cityList.style.listStyle = "none";
    cityList.style.padding = "0";
    cityList.style.width = "100%";
    cityList.style.boxSizing = "border-box";
    cityList.style.textAlign = "left";

    for (const [city, stores] of Object.entries(cityStores)) {
        const cityItem = document.createElement("details");
        cityItem.style.padding = "5px 0";
        cityItem.style.textAlign = "left";
        
        // 도시명과 토글 아이콘
        const cityName = document.createElement("summary");
        cityName.class = "city-summary";
        cityName.textContent = city;
        cityName.style.fontSize = "1.2em";
        cityName.style.padding = "10px";

        //cityHeader.appendChild(cityName);

        // 상점 리스트
        const storeList = document.createElement("ul");
        storeList.style.display = "none";
        storeList.style.marginLeft = "20px";
        storeList.style.listStyle = "none";

        for (const store of stores) {
            const storeItem = document.createElement("li");
            storeItem.textContent = `${store.name} (${store.address})`;
            storeList.appendChild(storeItem);
        }

        // 토글 기능
        cityName.addEventListener("click", () => {
        const isHidden = storeList.style.display === "none";
        storeList.style.display = isHidden ? "block" : "none";

        if (isHidden) {
            setTimeout(() => {
                cityHeader.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);  // 살짝 지연해서 펼쳐진 후 스크롤
        }
        });

        cityItem.appendChild(cityName);
        cityItem.appendChild(storeList);
        cityList.appendChild(cityItem);
    }

    cityDiv.appendChild(cityList);
}
