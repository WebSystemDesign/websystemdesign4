import {loadAllGameData} from "./firebase_image.js"

window.addEventListener('DOMContentLoaded', async () => {
  const gameData = await loadAllGameData();
  const container = document.getElementById("gameContainer");

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
});

  