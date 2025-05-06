class Game {
    template() {
        return `
        <div class="page">
            <form class="search-box">
                <input class="search-txt" type="text" placeholder="게임을 검색하세요.">
                <button class="search-btn" type="submit">
                    <img src="/sources/Search.png" alt="검색" />
                </button>
            </form>

            <div class="card-list">
                <div class="card">
                    <img src="/sources/test_image.jpg" alt="image" style="width:50%">
                    <div class="container">
                        <h4><b>test</b></h4>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

export default new Game();
