class Game {
    template() {
        return `
            <div class="game-page">
            <form class="game-search-box">
                <input class="game-search-txt" type="text" placeholder="게임을 검색하세요.">
                <button class="game-search-btn" type="submit">
                    <img src="../sources/search.png" alt="검색" />
                </button>
            </form>

            <div class="game-card-list">
                <div id="game-container"></div>
            </div>
        </div>
        `;
    }
}

export default new Game();
