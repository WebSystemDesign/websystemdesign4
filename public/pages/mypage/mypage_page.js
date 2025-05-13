import { getCurrentUserInfo } from "../../current_user.js";

class Mypage {
    async template() {
        const userInfo = await getCurrentUserInfo();
        const email = userInfo ? userInfo.email : "로그인 정보 없음";
        const signupDate = userInfo ? userInfo.createdAt:"로그인 정보 없음";
        let pastTime;
        if (signupDate!="로그인 정보 없음"){
            const today = new Date();
            pastTime = today - signupDate;
            pastTime = Math.round(pastTime/(1000*60*60*24)) + 1;
        } else {
            pastTime = "???";
        }

        return `
            <div class = "mypage-container">
                <h1 id = "mypage-text">마이페이지</h1>
                <div class="mypage-upper">
                    <div id="mypage-profile">
                        <img id="mypage-profile" src = "../../sources/test-profile-image.jpg" alt = "profile-img">
                    </div>
                    <div id = "mypage-together-day">
                        <p><span id="mypage-username">${email}</span>님과<span id="mypage-count">${pastTime}</span>일째 함께 하는 중</p>
                    </div>
                </div>
                <div class="mypage-lists">
                    <details>
                        <summary>문의 목록</summary>
                        <ul>
                            <li>문의 1</li>
                            <li>문의 2</li>
                            <li>문의 3</li>
                        </ul>
                    </details>
                    <details>
                        <summary>견적 목록</summary>
                        <ul>
                            <li>견적 1</li>
                            <li>견적 2</li>
                            <li>견적 3</li>
                        </ul>
                    </details>
                </div>
            </div>
        `;
    }
}

export default new Mypage();