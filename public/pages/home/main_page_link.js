import { changeUrl } from "../../main.js";

export function initClickEvents() {
    const gameBtn = document.getElementById("gameBtn");
    if (gameBtn) {
        gameBtn.addEventListener('click', () => {
            changeUrl('/game');
        });
    }

    const gameNews = document.querySelectorAll(".game-news");
    if (gameNews.length > 0) {
        gameNews.forEach((news) => {
            news.addEventListener('click', () => {
                changeUrl('/news_game');
            });
        });
    }

    const productNews = document.getElementById("product-news");
    if (productNews) {
        productNews.addEventListener('click', () => {
            changeUrl('/news_gear');
        });
    }
}
