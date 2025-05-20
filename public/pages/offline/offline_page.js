import { waitForNaverMapAndInit } from "./map.js";

class Offline {
    template() {
        return `
            <div class="wallpaper-container">
                <div id="map" style="width:100%; height:500px;"></div>
            </div>
        `;
    }

    mounted() {
        waitForNaverMapAndInit();
    }
}

export default new Offline();