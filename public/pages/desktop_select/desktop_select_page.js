import { changeUrl } from "../../main.js";

class DesktopSelect {
    template() {
        return `
        <div class="desktop-container">
            <div class="desktop-box">
                <img src="../../sources/desktop_min.png" class="desktop-img">
                <hr id="desktop-min-divider" class="desktop-min">
                <h1 id="desktop-min-title" class="desktop-min">최소사양</h1>
                <p id="desktop-min-text" class="desktop-min">게임을 실행하기 위한 최소한의 사양입니다. 낮은 그래픽 설정에서 실행됩니다.</p>
                <br>
                <button id="desktop-min-link" class="desktop-link-btn" data-type="min">
                    <img src="../../sources/arrow_white.png" class="desktop-icon">
                </button>
            </div>
            <div class="desktop-box">
                <img src="../../sources/desktop_rec.png" class="desktop-img">
                <hr id="desktop-rec-divider" class="desktop-rec">
                <h1 id="desktop-rec-title" class="desktop-rec">권장사양</h1>
                <p id="desktop-rec-text" class="desktop-rec">선택하신 게임을 쾌적하게 즐길 수 있는 최적의 부품을 안내해드립니다.</p>
                <br>
                <button id="desktop-rec-link" class="desktop-link-btn" data-type="rec">
                    <img src="../../sources/arrow_green.png" class="desktop-icon">
                </button>
            </div>
        </div>
        `;
    }
}

export default new DesktopSelect();