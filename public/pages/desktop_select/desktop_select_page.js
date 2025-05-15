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
                <a href="/desktop_detail" id="desktop-min-link">
                    <img src="../../sources/arrow_white.png" class="desktop-icon" id="desktop-min-icon">
                </a>
            </div>
            <div class="desktop-box">
                <img src="../../sources/desktop_rec.png" class="desktop-img">
                <hr id="desktop-rec-divider" class="desktop-rec">
                <h1 id="desktop-rec-title" class="desktop-rec">권장사양</h1>
                <p id="desktop-rec-text" class="desktop-rec">선택하신 게임을 쾌적하게 즐길 수 있는 최적의 부품을 안내해드립니다.</p>
                <br>
                <a href="/desktop_detail" id="desktop-rec-link">
                    <img src="../../sources/arrow_green.png" class="desktop-icon" id="desktop-rec-icon">
                </a>
            </div>
        </div>
        `
    }

    mounted() {
        const minLink = document.getElementById("desktop-min-link");
        const recLink = document.getElementById("desktop-rec-link");

        if (minLink) {
            minLink.addEventListener("click", (e) => {
                e.preventDefault();
                sessionStorage.setItem("specType", "min");
                changeUrl("/desktop_detail");
            });
        }

        if (recLink) {
            recLink.addEventListener("click", (e) => {
                e.preventDefault();
                sessionStorage.setItem("specType", "rec");
                changeUrl("/desktop_detail");
            });
        }
    }
}

export default new DesktopSelect();