class Main {
    template() {
        return `
        <div class="home">
            <div class="home-left">
                <div class="home-product">
                    <h2>Today's Product</h2>
                    <img src="../../sources/desktop.png">
                    <button id="gameBtn">견적 맞추기</button>
                </div>
            </div>
            <div class="home-right">
                <div class="home-news">
                    <h3>Game News</h3>
                    <img src="../../sources/Ori-and-the-Blind-Forest.png" id="game-news">
                </div>
                <div class="home-news">
                    <h3>Product News</h3>
                    <img src="../../sources/geforce.png" id="product-news">
                </div>
            </div>
        </div>
        `;
    }
}

export default new Main();