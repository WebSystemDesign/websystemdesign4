import { db } from '../../firebase.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

export async function loadAllGameData() {
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

  return gameData;
}
