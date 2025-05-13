import { loadAllGameData } from "./firebase_image.js";

export async function displayGames() {
  const gameData = await loadAllGameData();
  const container = document.getElementById("game-container");

  if (!container) {
    console.error("game-container not found!");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // 한 번만 애니메이션 적용
      }
    });
  }, { threshold: 0.1 });

  for (const [gameName, [imageUrl, minimum, recommended]] of Object.entries(gameData)) {
    const gameDiv = document.createElement("div");
    gameDiv.className = "game-item";
    gameDiv.dataset.name = gameName;

    gameDiv.innerHTML = `
      <div class="image-wrapper">
        <img src="${imageUrl}" alt="${gameName}" />
        <div class="overlay">
          ${gameName}
        </div>
      </div>
    `;

    container.appendChild(gameDiv);
    observer.observe(gameDiv); // 애니메이션 감시 시작

    const overlay = gameDiv.querySelector(".overlay");

    gameDiv.addEventListener("click", () => {
      const isSelected = sessionStorage.getItem(gameName);
      if (isSelected) {
        sessionStorage.removeItem(gameName);
        overlay.style.display = "none";
      } else {
        sessionStorage.setItem(gameName, JSON.stringify({
          name: gameName,
          imageUrl,
          minimum,
          recommended
        }));
        overlay.style.display = "flex";
      }
    });

    if (sessionStorage.getItem(gameName)) {
      overlay.style.display = "flex";
    }
  }
}
