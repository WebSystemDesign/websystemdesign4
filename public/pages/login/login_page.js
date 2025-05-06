class Login {
    template() {
        return `
            <div class = "login-container">
                <div class = "login-inner-container">
                    <h1 id="login-text">로그인</h1>
                    <label for="email">이메일</label><br>
                    <input type="email" id="email" placeholder="이메일 입력"><br>
                    <label for-"password">비밀번호</label><br>
                    <input type="password" id="password" placeholder="비밀번호 입력"><br>
                    <button id="loginBtn">로그인</button>
                    <button id="signupBtn">회원가입</button>
                    <p id="errorMsg" style="color:red"></p>
                </div>
            </div>
        `;
    }
}

export default new Login();