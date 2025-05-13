class NewsGame {
    template() {
        return `
        <div class="wallpaper-container">
            <div class="header">
                <img src="./sources/logo.png" alt="GEARQUEST" width="150">
                <h1>게임 최신 뉴스</h1>
            </div>

            <section class="news-section">
                <div class="news-card">
                    <div class="news-thumb">
                        <span class="news-number">News.1</span>
                        <img src="./sources/lol.jpg" alt="League of Legends">
                    </div>
                    <div class="news-content">
                        <h2>League of Legends</h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                        </p>
                    </div>
                </div>

                <div class="news-card">
                    <div class="news-thumb">
                        <span class="news-number">News.2</span>
                        <img src="./sources/lol.jpg" alt="League of Legends">
                    </div>
                    <div class="news-content">
                        <h2>League of Legends</h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                        </p>
                    </div>
                </div>
            </section>
        </div>
        `;
    }
}

export default new NewsGame();
