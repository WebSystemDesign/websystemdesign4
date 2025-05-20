import { db } from "../../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

let map;

function waitForNaverMapAndInit(){
    if (typeof naver === "undefined" || !naver.maps) {
        setTimeout(waitForNaverMapAndInit, 100);
        return;
    }

    initMap();
}

function initMap(){
    navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
    
        const userLocation = new naver.maps.LatLng(lat, lng);
        
        map = new naver.maps.Map('map', {
            center: userLocation,
            zoom: 15
        });
    
        new naver.maps.Marker({
            position: userLocation,
            map: map,
            icon: {
                content: `<div style="background:#21E6BB;border-radius:50%;width:14px;height:14px;border:2px solid white;"></div>`
            }
        });
    
        await loadStoreAndDisplayMarkers(userLocation);
    }, () =>{
        alert("위치 정보를 가져올 수 없습니다.");
    })
}

async function loadStoreAndDisplayMarkers(userLatLng) {
    const storeDocs = await getDocs(collection(db, "stores"));

    for (const doc of storeDocs.docs) {
        const store = doc.data();

        naver.maps.Service.geocode({query: store.address}, function(status, response) {
            if (status !== naver.maps.Service.Status.OK) return;

            const result = response.v2.address[0];
            const storeLatLng = new naver.maps.LatLng(result.y, result.x);

            const dist = naver.maps.Point.distance(userLatLng, storeLatLng);
            if (dist <= 500) {
                new naver.maps.Marker({
                    position: storeLatLng,
                    map: map,
                    title: store.name
                });
            }
        });
    }
}

waitForNaverMapAndInit();