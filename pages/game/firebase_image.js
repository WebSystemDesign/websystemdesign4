// Firebase SDK import
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyC0UyuacvbSYQmYFMcasvhz_2CYDzvXGt8",
    authDomain: "gearquest-99781.firebaseapp.com",
    projectId: "gearquest-99781",
    storageBucket: "gearquest-99781.firebasestorage.app",
    messagingSenderId: "277657155200",
    appId: "1:277657155200:web:233a25497feaf425a7d865",
    measurementId: "G-6DPT370PZH"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadAllGameData() {
  const querySnapshot = await getDocs(collection(db, "games"));
  const gameData = {};

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const name = data.name;
    const imageUrl = data.image;
    const minimum = data.minimum;
    const recommended = data.recommended;

    gameData[name] = [imageUrl, minimum, recommended];
  });

  console.log(gameData); // 👉 최종 결과 확인
  return gameData;
}

// 실행
loadAllGameData();