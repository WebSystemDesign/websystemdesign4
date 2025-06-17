class Console {
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
                        <input class="game-search-text" type="text" placeholder="콘솔을 검색하세요.">
                        <button class="game-search-btn" type="submit">
                            <img src="../sources/search.png" alt="검색" />
                        </button>
                    </form>
                    </div>
                </div>

                
                    <div class="console-products">
                        <div class="console-product">
                            <img src="/pages/console/source/xbox.png" class="product-image">
                            <div class="product-info">
                                <h2>Xbox Series X</h2>
                                <table>
                                    <tr><th>가격</th><td>678,000원</td></tr>
                                    <tr><th>선호도</th><td>★★★★★</td></tr>
                                    <tr><th>생산지</th><td>미국</td></tr>
                                    <tr><th>특이사항</th><td>4K 지원, 고속 로딩</td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="console-product">
                            <img src="/pages/console/source/switch2.jpg" class="product-image">
                            <div class="product-info">
                                <h2>Nintendo Switch</h2>
                                <table>
                                    <tr><th>가격</th><td>648,000원</td></tr>
                                    <tr><th>선호도</th><td>★★★★☆</td></tr>
                                    <tr><th>생산지</th><td>일본</td></tr>
                                    <tr><th>특이사항</th><td>휴대모드, 조이콘</td></tr>
                                </table>
                            </div>
                        </div>

                        <div class="console-product">
                            <img src="/pages/console/source/steamdeck.jpg" class="product-image">
                            <div class="product-info">
                                <h2>Steam Deck</h2>
                                <table>
                                    <tr><th>가격</th><td>589,000원</td></tr>
                                    <tr><th>선호도</th><td>★★★★☆</td></tr>
                                    <tr><th>생산지</th><td>미국</td></tr>
                                    <tr><th>특이사항</th><td>256GB, 512GB, 1TB 모델 존재</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    loadCss() {
        if (!document.querySelector('link[href="./pages/console/console_page.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = './pages/console/console_page.css';
            document.head.appendChild(link);
        }
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

export default new Console();
