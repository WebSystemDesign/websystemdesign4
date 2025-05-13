import { auth, db } from './firebase.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

/**
 * 현재 로그인된 사용자의 Firestore 사용자 문서를 가져옵니다.
 * @returns {Promise<Object|null>} 유저 정보 객체 또는 null
 */
export async function getCurrentUserInfo() {
  const user = auth.currentUser;

  if (!user) {
    console.warn("로그인된 사용자가 없습니다.");
    return null;
  }

  try {
    const userDocRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
        const data = userSnap.data();
        return {
          uid: user.uid,
          email: data.email,
          gears: data.gears || [],
          posts: data.posts || [],
          createdAt: data.createdAt?.toDate?.() ?? null,  // Firebase Timestamp → JS Date
        };
    } else {
      console.warn("사용자 문서가 존재하지 않습니다.");
      return null;
    }
  } catch (error) {
    console.error("유저 정보 불러오기 실패:", error);
    return null;
  }
}
