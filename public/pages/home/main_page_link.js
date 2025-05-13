import { changeUrl } from "../../main.js";

document.addEventListener('DOMContentLoaded', () => {
    const gameBtn = document.getElementById("gameBtn");
    if (gameBtn) {
        gameBtn.addEventListener('click', () => {
            changeUrl('/game');
        });
    }

    const gameNews = document.getElementById("game-news");
    if (gameNews) {
        gameNews.addEventListener('click', () => {
            changeUrl('/news_game');
        });
    }

    const productNews = document.getElementById("product-news");
    if (productNews) {
        productNews.addEventListener('click', () => {
            changeUrl('/news_gear');
        });
    }
});