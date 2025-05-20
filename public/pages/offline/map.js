import { db } from "../../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

let map;

export function waitForNaverMapAndInit(){
    if (!document.getElementById("map")) {
        return;
    }

    if (typeof naver === "undefined" || !naver.maps) {
        setTimeout(waitForNaverMapAndInit, 100);
        return;
    }
    
    initMap();
}

function initMap(){
    navigator.geolocation.getCurrentPosition(
        async (pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const userLocation = new naver.maps.LatLng(lat, lng);
            await showMapAndMarkers(userLocation);
        },
        (err) => {
            alert("위치 정보를 가져올 수 없습니다. 기본 위치로 지도를 표시합니다.");
            const fallbackLocation = new naver.maps.LatLng(37.546475, 126.9646916);
            showMapAndMarkers(fallbackLocation);
        }
    );
}


async function showMapAndMarkers(userLatLng) {
    map = new naver.maps.Map('map', {
        center: userLatLng,
        zoom: 15
    });

    new naver.maps.Marker({
        position: userLatLng,
        map: map,
        icon: {
            content: `<div style="background:#21E6BB;border-radius:50%;width:14px;height:14px;border:2px solid white;"></div>`
        }
    });

    await loadStoreAndDisplayMarkers(userLatLng);
}

async function loadStoreAndDisplayMarkers(userLatLng) {
    const storeDocs = await getDocs(collection(db, "stores"));

    for (const doc of storeDocs.docs) {
        const store = doc.data();

        // address가 없으면 무시
        if (!store.address || typeof store.address !== 'string') {
            console.warn("주소 없음 또는 잘못된 주소:", store);
            continue;
        }

        naver.maps.Service.geocode({ query: store.address }, function (status, response) {
            if (status !== naver.maps.Service.Status.OK) {
                console.error("지오코딩 실패:", store.address, status, response);
                return;
            }

            const result = response.v2.addresses[0];

            const storeLatLng = new naver.maps.LatLng(result.y, result.x);

            new naver.maps.Marker({
                position: storeLatLng,
                map: map,
                title: store.name
            });
            
        });
    }
}


waitForNaverMapAndInit();