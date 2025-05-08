class Signup {
    template() {
        return `
            <div class = "signup-container">
                <img id = "signup-logo" src = "./sources/logo.png" alt="logo-image">
                <div class = "signup-inner-container">
                    <div class="signup-circle" id="signup-circle-left"></div>
                    <div class="signup-circle" id="signup-circle-right"></div>
                    <h1 id="signup-text">회원가입</h1>
                    <div id="signup-line"></div>
                    <label id = "signup-email-label" for="signup-email">이메일</label>
                    <input type="email" id="signup-email" placeholder="123@email.com"><br>
                    <label id = "signup-password-label" for="signup-password">비밀번호</label>
                    <input type="password" id="signup-password" placeholder="비밀번호 입력"><br>
                    <label id = "signup-password-check-label" for="signup-password">비밀번호 확인</label>
                    <input type="password" id="signup-password-check" placeholder="비밀번호 확인"><br>
                    <div class="signup-button-group">
                        <button id="signup-signupBtn">회원가입</button>
                        <button id="signup-resetBtn">지우기</button>
                    </div>
                    <p id="errorMsg" style="color:red"></p>
                </div>
            </div>
        `;
    }
}

export default new Signup();