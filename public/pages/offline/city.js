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
        const cityItem = document.createElement("li");
        cityItem.style.padding = "5px 0";
        cityItem.style.textAlign = "left";
        
        // 도시명과 토글 아이콘
        const cityHeader = document.createElement("div");
        cityHeader.style.display = "flex";
        cityHeader.style.alignItems = "center";
        cityHeader.style.alignContent = "right"
        cityHeader.style.cursor = "pointer";
        cityHeader.style.fontSize = "1.2em";

        const toggleIcon = document.createElement("span");
        toggleIcon.textContent = "●";  // ▶️ 닫힌 상태
        toggleIcon.style.marginRight = "8px";
        toggleIcon.style.fontSize = "0.5em";

        const cityNameSpan = document.createElement("span");
        cityNameSpan.textContent = city;
        cityNameSpan.style.fontSize = "1.2em";

        cityHeader.appendChild(toggleIcon);
        cityHeader.appendChild(cityNameSpan);

        // 상점 리스트
        const storeList = document.createElement("ul");
        storeList.style.display = "none";
        storeList.style.marginLeft = "20px";
        storeList.style.listStyle = "circle";

        for (const store of stores) {
            const storeItem = document.createElement("li");
            storeItem.textContent = `${store.name} (${store.address})`;
            storeList.appendChild(storeItem);
        }

        // 토글 기능
        cityHeader.addEventListener("click", () => {
        const isHidden = storeList.style.display === "none";
        storeList.style.display = isHidden ? "block" : "none";

        if (isHidden) {
            setTimeout(() => {
                cityHeader.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);  // 살짝 지연해서 펼쳐진 후 스크롤
        }
        });



        cityItem.appendChild(cityHeader);
        cityItem.appendChild(storeList);
        cityList.appendChild(cityItem);

        // 도시별 hr 구분선
        const hr = document.createElement("hr");
        hr.style.display = "flex";
        cityList.appendChild(hr);
    }

    cityDiv.appendChild(cityList);
}
