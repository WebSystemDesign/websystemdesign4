import popularAppIds from './famous.js'
import fetch from 'node-fetch';
import admin from 'firebase-admin';
import { readFile } from 'fs/promises';

const serviceAccount = JSON.parse(
    await readFile(new URL('./gearquest-99781-firebase-adminsdk-fbsvc-3eb3be251e.json', import.meta.url))
);

// Firebase 초기화
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// 게임 상세 정보 가져오기
async function getGameDetails(appid) {
  const url = `https://store.steampowered.com/api/appdetails?appids=${appid}&cc=kr&l=ko`;
  const response = await fetch(url);
  const data = await response.json();
  return data[appid];
}

// 게임 정보 저장
async function saveGameToFirestore(appid, gameData) {
  const docRef = db.collection('games').doc(appid.toString());
  await docRef.set(gameData);
}

// 메인 함수
(async () => {
    for (const appid of popularAppIds) {
      try {
        const result = await getGameDetails(appid);
        const game = result.data;
  
        if (
          result.success &&
          game.name &&
          game.header_image &&
          game.pc_requirements?.minimum &&
          game.pc_requirements?.recommended
        ) {
          const gameData = {
            name: game.name,
            image: game.header_image,
            minimum: game.pc_requirements.minimum,
            recommended: game.pc_requirements.recommended
          };
          await saveGameToFirestore(appid, gameData);
          console.log(`✅ 저장됨: ${game.name}`);
        } else {
          console.log(`⚠️ 정보 불충분: ${appid}`);
        }
      } catch (err) {
        console.error(`❌ 실패: ${appid}`, err.message);
      }
    }
  })();
