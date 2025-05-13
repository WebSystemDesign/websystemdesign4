import { getCurrentUserInfo } from "../../current_user.js";

class Mypage {
    async template() {
        const userInfo = await getCurrentUserInfo();
        const email = userInfo ? userInfo.email : "로그인 정보 없음";

        return `
            <div class="mypage-container">
                <h1 id="mypage-text">마이페이지</h1>
                <img id="mypage-profile" src="" alt="profile-img">
                <div>${email}</div>
            </div>
        `;
    }
}

export default new Mypage();