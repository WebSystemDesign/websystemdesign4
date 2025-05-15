import { loadAllGameData } from "./firebase_image.js";

let cachedGameData = null;

export async function displayGames() {
  cachedGameData = await loadAllGameData();
  displayFilteredGames("");  // 전체 게임 표시

  // 🔍 검색 이벤트 연결
  const searchForm = document.querySelector(".game-search-box");
  const searchInput = document.querySelector(".game-search-text");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const keyword = searchInput.value.trim();
      displayFilteredGames(keyword);
    });
  }

  console.log("게임 데이터 불러옴");

  const completeBtn = document.getElementById("game-submit");
  if (!completeBtn) return;

  completeBtn.addEventListener("click", () => {
    const selectedGames = [];

    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      const value = sessionStorage.getItem(key);

      try {
        const parsed = JSON.parse(value);
        if (parsed.minimum && parsed.recommended) {
          selectedGames.push(parsed);
        }
      } catch {
        continue;
      }
    }

    if (selectedGames.length === 0) {
      alert("선택된 게임이 없습니다.");
      return;
    }

    sessionStorage.setItem("selectedGames", JSON.stringify(selectedGames));
    window.location.href = "/desktop_select";
  });
}

function displayFilteredGames(keyword) {
  const container = document.getElementById("game-container");
  if (!container || !cachedGameData) return;

  container.innerHTML = "";  // 기존 게임 목록 초기화

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  for (const [gameName, [imageUrl, minimum, recommended]] of Object.entries(cachedGameData)) {
    // ✅ 키워드가 없거나 이름에 포함될 경우에만 출력
    if (keyword && !gameName.toLowerCase().includes(keyword.toLowerCase())) {
      continue;
    }

    const gameDiv = document.createElement("div");
    gameDiv.className = "game-item";
    gameDiv.dataset.name = gameName;

    gameDiv.innerHTML = `
      <div class="image-wrapper">
        <img src="${imageUrl}" alt="${gameName}" />
        <div class="overlay">${gameName}</div>
      </div>
    `;

    container.appendChild(gameDiv);
    observer.observe(gameDiv);

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