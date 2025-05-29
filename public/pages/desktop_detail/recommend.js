import { db } from "../../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// 게임 선택 기반 추천 부품 가져오기
export async function getRecommendedParts() {
  const selectedGames = JSON.parse(sessionStorage.getItem("selectedGames") || "[]");
  const specType = sessionStorage.getItem("specType") === "rec"? "recommended" : "minimum";  // "min" 또는 "rec"

  console.log("선택된 게임:", selectedGames);
  console.log("스펙 타입:", specType);

  if (!selectedGames.length) return null;

  let maxSpec = [0, 0, 0]; // cpu, gpu, ram 레벨
  for (const game of selectedGames) {
    const specArray = game[specType];  // game.recommended 또는 game.minimum
    if (!specArray) continue;
    for (let i = 0; i < 3; i++) {
      maxSpec[i] = Math.max(maxSpec[i], specArray[i]);
    }
  }

  const [cpu, gpu, ram] = await Promise.all([
    getBestParts("cpu", maxSpec[0]),
    getBestParts("gpu", maxSpec[1]),
    getBestParts("ram", maxSpec[2])
  ]);

  return { cpu, gpu, ram };
}

async function getBestParts(partType, requiredLevel) {
  const snapshot = await getDocs(collection(db, "parts", partType, "items"));
  const candidates = [];

  snapshot.forEach(doc => {
    const level = parseInt(doc.id);
    const data = doc.data();

    if (level >= requiredLevel) {
      candidates.push({
        name: data[0],
        image: data[1],
        price: data[2],
        quantity: data[3],
        level: level
      });
    }
  });

  if (candidates.length === 0) {
    console.warn(`[${partType}] 조건 만족 부품 없음`);
    return null;
  }

  candidates.sort((a, b) => a.price - b.price);  // 가장 저렴한 부품
  return candidates[0];
}

export async function getParts(partType) {
  const snapshot = await getDocs(collection(db, "parts", partType, "items"));
  let part;

  snapshot.forEach(doc => {
    const data = doc.data();

    part = {
      name: data[0],
      image: data[1],
      price: data[2],
      quantity: data[3]
    };

    return;
  });

  return part;
}