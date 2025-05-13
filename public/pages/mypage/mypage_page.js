class Mypage {
    template() {
        return `
            <div class = "mypage-container">
                <h1 id = "mypage-text">마이페이지</h1>
                <img id="mypage-profile" src = "" alt = "profile-img">
            </div>
        `;
    }
}

export default new Mypage();