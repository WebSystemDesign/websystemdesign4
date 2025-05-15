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

    const productNews =  document.querySelectorAll(".product-news");
    if (productNews.length > 0) {
        productNews.forEach((news) => {
            news.addEventListener('click', () => {
                changeUrl('/news_gear');
            });
        });
    }
}
