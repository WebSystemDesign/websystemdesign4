// game_image_loader.js
import { loadAllGameData } from "./firebase_image.js";

export async function displayGames() {
  const gameData = await loadAllGameData();
  const container = document.getElementById("gameContainer");

  if (!container) {
    console.error("gameContainer not found!");
    return;
  }

  for (const [gameName, [imageUrl, minimum, recommended]] of Object.entries(gameData)) {
    const gameDiv = document.createElement("div");
    gameDiv.innerHTML = `
      <h2>${gameName}</h2>
      <img src="${imageUrl}" alt="${gameName}" style="width:200px;" />
      <p><strong>최소 사양:</strong> ${minimum}</p>
      <p><strong>권장 사양:</strong> ${recommended}</p>
    `;
    container.appendChild(gameDiv);
  }
}
  