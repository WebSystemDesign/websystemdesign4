class Accessory {
    template() {
        this.loadCss();
        return `
            <div class="wallpaper-container">
                <div class="console-page">
                    <!-- 상단 헤더 -->
                    <div class="game-header">
                    <div class="game-search-container">
                    <form class="game-search-box">
                        <img class="game-search-logo" src="../sources/logo_icon.png">
                        <input class="game-search-text" type="text" placeholder="주변기기를 검색하세요.">
                        <button class="game-search-btn" type="submit">
                            <img src="../sources/search.png" alt="검색" />
                        </button>
                    </form>
                    </div>
                <button class="game-submit" id="game-submit" type="button">선택 완료</button>
                </div>

                
                    <div class="console-products">
                    

                        <div class="console-product">
                            <img src="/pages/accessory/source/logi.webp" class="product-image">
                            <div class="product-info">
                                <h2>MX Master 3S</h2>
                                <table>
                                    <tr><th>가격</th><td>149,000원</td></tr>
                                    <tr><th>선호도</th><td>★★★★☆</td></tr>
                                    <tr><th>생산지</th><td>미국</td></tr>
                                    <tr><th>특이사항</th><td>7개의 버튼, 1분 급속 충전으로 3시간 사용</td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="console-product">
                            <img src="/pages/accessory/source/razer.webp" class="product-image">
                            <div class="product-info">
                                <h2>Razer Barracuda X Chroma</h2>
                                <table>
                                    <tr><th>가격</th><td>189,000원</td></tr>
                                    <tr><th>선호도</th><td>★★★★★</td></tr>
                                    <tr><th>생산지</th><td>미국</td></tr>
                                    <tr><th>특이사항</th><td>모바일 앱 커스터마이징, 무선</td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="console-product">
                            <img src="/pages/accessory/source/aula.jpg" class="product-image">
                            <div class="product-info">
                                <h2>AULA F108</h2>
                                <table>
                                    <tr><th>가격</th><td>82,000원</td></tr>
                                    <tr><th>선호도</th><td>★★★★★</td></tr>
                                    <tr><th>생산지</th><td>중국</td></tr>
                                    <tr><th>특이사항</th><td>1000hz 폴링 속도, 핫스왑</td></tr>
                                </table>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        `;
    }

    loadCss() {
  return new Promise((resolve) => {
    const href = "./pages/accessory/accessory_page.css";
    const existing = document.querySelector(`link[href="${href}"]`);

    if (existing) {
      resolve(); // 이미 있으면 바로 진행
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => resolve(); // 로드 완료 후 resolve
    document.head.appendChild(link);
    });
    }


    mounted() {
        function attachSearchEvent(callback) {
            const searchForm = document.querySelector(".game-search-box");
            const searchInput = document.querySelector(".game-search-text");

            if (searchForm && searchInput) {
                searchForm.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const keyword = searchInput.value.trim();
                    callback(keyword);
                });
            }
        }

        // 🔍 검색 이벤트 실행
        attachSearchEvent((keyword) => {
            const products = document.querySelectorAll(".console-product");

            if (!keyword) {
                products.forEach((product) => {
                    product.style.display = "flex";
                });
                return;
            }

            const lowerKeyword = keyword.toLowerCase();
            products.forEach((product) => {
                const titleElem = product.querySelector("h2");
                if (!titleElem) return;

                const titleText = titleElem.textContent.toLowerCase();
                product.style.display = titleText.includes(lowerKeyword) ? "flex" : "none";
            });
        });
    }
}

export default new Accessory();
