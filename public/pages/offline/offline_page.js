import { waitForNaverMapAndInit } from "./map.js";
import { loadStoreAndDisplayCity } from "./city.js";

class Offline {
    template() {
        return `
            <div class="wallpaper-container">
                <div class="map-header">
                    <img src="./sources/logo.png" alt="GEARQUEST" width="150"><hr>
                    <h1>오프라인 매장</h1>
                </div>
                <hr>
                <div class="map-city-wrapper">
                    <div id="map"></div>

                    <div id="city-section">
                        <div class="city-title">
                            <div class="local">
                                <h6>지역별 매장 안내</h6>
                            </div>
                            
                        </div>
                        <div id="city"></div>
                    </div>
                </div>
            </div>
        `;
    }

    mounted() {
        waitForNaverMapAndInit();
        loadStoreAndDisplayCity();
    }
}

export default new Offline();
