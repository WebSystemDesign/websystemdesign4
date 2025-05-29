class Game {
    template() {
        return `
            <div class="game-page">
                <div class="game-header">
                    <div class="game-search-container">
                    <form class="game-search-box">
                        <img class="game-search-logo" src="../sources/logo_icon.png">
                        <input class="game-search-text" type="text" placeholder="게임을 검색하세요.">
                        <button class="game-search-btn" type="submit">
                            <img src="../sources/search.png" alt="검색" />
                        </button>
                    </form>
                    </div>
                <button class="game-submit" id="game-submit" type="button">선택 완료</button>
                </div>

                <div class="game-card-list">
                    <div id="game-container"></div>
                </div>
            </div>
        `;
    }
}

export default new Game();
