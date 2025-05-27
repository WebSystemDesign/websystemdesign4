import { waitForNaverMapAndInit } from "./map.js";
import { loadStoreAndDisplayCity } from "./city.js";

class Offline {
    template() {
        return `
            <div class="wallpaper-container">
                <div id="map" style="width:100%; height:500px;"></div>
                <div class="city-title">
                    <br>
                    <h2>지역별 매장 안내</h2>
                    <br>
                </div>
                <div id="city"></div>
            </div>
        `;
    }

    mounted() {
        waitForNaverMapAndInit();
        loadStoreAndDisplayCity();
    }
}

export default new Offline();