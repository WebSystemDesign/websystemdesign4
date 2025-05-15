class Login {
    template() {
        return `
            <div class = "wallpaper-container">
                <img id = "login-logo" src = "../../sources/logo_large.png" alt="logo-image">
                <div class = "login-inner-container">
                    <div class="login-circle" id="login-circle-left"></div>
                    <div class="login-circle" id="login-circle-right"></div>
                    <h1 id="login-text">로그인</h1>
                    <div id="login-line"></div>
                    <label id = "login-email-label" for="login-email">이메일</label>
                    <input type="email" id="login-email" placeholder="이메일 입력"><br>
                    <label id = "login-password-label" for="login-password">비밀번호</label>
                    <input type="password" id="login-password" placeholder="비밀번호 입력"><br>
                    <div class="login-button-group">
                        <button id="login-loginBtn">로그인</button>
                        <button id="login-signupBtn">회원가입</button>
                    </div>
                    <p id="errorMsg" style="color:red"></p>
                </div>
            </div>
        `;
    }
}

export default new Login();