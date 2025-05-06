// game_image_loader.js
import { loadAllGameData } from "./firebase_image.js";

export async function displayGames() {
  const gameData = await loadAllGameData();
  const container = document.getElementById("game-container");

  if (!container) {
    console.error("game-container not found!");
    return;
  }

  for (const [gameName, [imageUrl, minimum, recommended]] of Object.entries(gameData)) {
    const gameDiv = document.createElement("div");
    gameDiv.innerHTML = `
      <h2>${gameName}</h2>
      <img src="${imageUrl}" alt="${gameName}" style="width:200px;" />
    `;
    container.appendChild(gameDiv);
  }
}
  