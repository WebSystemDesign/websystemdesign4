import { db } from "../../firebase.js";  // Firebase 초기화된 인스턴스
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// 부품 추천 함수
export async function getRecommendedParts() {
  const selectedGames = JSON.parse(sessionStorage.getItem("selectedGames") || "[]");
  const specType = sessionStorage.getItem("specType") || "rec";  // "min" 또는 "rec"

  if (!selectedGames.length) return null;

  // 최대 사양 구하기
  let maxSpec = [0, 0, 0]; // [cpuLevel, gpuLevel, ramLevel]
  for (const game of selectedGames) {
    let spec;
    if (specType === "min") {
        spec = "minimum";
    } else {
        spec = "recommended";
    }
    for (let i = 0; i < 3; i++) {
      maxSpec[i] = Math.max(maxSpec[i], spec[i]);
    }
  }

  // 부품 데이터 가져오기
  const [cpu, gpu, ram] = await Promise.all([
    getBestParts("cpu", maxSpec[0]),
    getBestParts("gpu", maxSpec[1]),
    getBestParts("ram", maxSpec[2])
  ]);

  return { cpu, gpu, ram };
}

// 각 부품 타입에서 조건 만족하는 가장 저렴한 제품
async function getBestParts(partType, requiredLevel) {
  const snapshot = await getDocs(collection(db, "parts", partType));
  const candidates = [];

  snapshot.forEach(doc => {
    const docId = parseInt(doc.id); // 문서 ID = 성능 등급
    const data = doc.data();

    if (docId >= requiredLevel) {
      candidates.push({
        name: data[0],
        image: data[1],
        price: data[2],
        quantity: data[3],  // 개수
        level: docId
      });
    }
  });

  // 가격 오름차순 정렬 후 가장 저렴한 제품 선택
  candidates.sort((a, b) => a.price - b.price);
  return candidates[0] || null;
}
