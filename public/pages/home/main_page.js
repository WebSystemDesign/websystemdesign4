import { initNewsSlider } from "./main_page_news_event.js"
import { initClickEvents } from "./main_page_link.js";

class Main {
    template() {
        return `
        <div class="home">
            <div class="home-left">
                <img class="home-todays-product" src="../../sources/Todays_Product.png">
                <button class="image-button" id="gameBtn">
                    <img src="../../sources/estimate_btn.png" alt="견적 맞추기">
                </button>
            </div>
            
            <div class="home-right">
                <div class="home-news">
                    <h3 class="game-news">Game News</h3>
                    <div class="home-news-slider">
                        <button class="slider-btn prev">&#10094;</button> 
                        <div class="slider-wrapper game-news">
                            <img src="../pages/news_game/source/ff14.jpg" class="news-slide active">
                            <img src="../pages/news_game/source/hollowknight.jpg" class="news-slide">
                            <img src="../pages/news_game/source/skul.jpg" class="news-slide">
                        </div>
                        <button class="slider-btn next">&#10095;</button> 
                        <div class="slider-dots">
                            <span class="dot active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>
                </div>
                <div class="home-news">
                    <h3 class="product-news">Product News</h3>
                    <div class="home-news-slider product">
                        <button class="slider-btn prev">&#10094;</button> 
                        <div class="slider-wrapper product-news">
                            <img src="../../sources/geforce.png" class="news-slide active">
                            <img src="../../sources/amd.png" class="news-slide">
                            <img src="../../sources/intel.png" class="news-slide">
                        </div>
                        <button class="slider-btn next">&#10095;</button> 
                        <div class="slider-dots">
                            <span class="dot active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    mounted() {
        initNewsSlider();
        initClickEvents();
    }
}


export default new Main();