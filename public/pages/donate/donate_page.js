import { getCurrentUserInfo } from "../../current_user.js";

class Donate {
    async template() {
            const userInfo = await getCurrentUserInfo();
            const email = userInfo ? userInfo.email : "방문자";
        return `
            <div class="wallpaper-container">
                <h1 class="page-logo">Donate</h1>
                <div class="donate-content">
                    <img id= "donate-profile" src = "../../sources/test-profile-image.jpg" alt="profile-img">
                    <div class="donate-thanks-text">
                        <h2 class="donate-text">더 나은 서비스를 제공해 드리겠습니다.</h2>
                        <h2 class="donate-text">감사합니다</h2>
                        <h2 class="donate-text"><span id="donate-username">${email}</span>님</h2>
                    </div>
                </div>
                <div class="donate-bank">
                    <h2 class="donate-text">숙명은행</h2>
                    <h2 class="donate-text">123-456789-01234</h2>
                </div>
            </div>
        `;
    }
}

export default new Donate();