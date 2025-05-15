class Console {
    template() {
        this.loadCss();
        return `
            <div class = "wallpaper-container">
            <div class = "console-page">
                <!-- 상단 헤더 -->
                <div class="header">

                <div class="search-container">
                <form class="search-box">
                    <img class="search-logo" src="../sources/logo_icon.png">
                    <input class="search-text" type="text" placeholder="콘솔을 검색하세요.">
                    <button class="search-btn" type="submit">
                        <img src="../sources/search.png" alt="검색" />
                    </button>
                </form>
                </div>

                </div>
            </div>

                <!-- 제품 목록 -->
                <div class="console-products">
                    <!-- 첫 번째 제품 -->
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

                    <!-- 두 번째 제품 -->
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
}

export default new Console();
