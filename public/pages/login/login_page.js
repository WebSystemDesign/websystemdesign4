class Login {
    template() {
        return `
            <h1>로그인</h1>
            <input type="email" id="email" placeholder="이메일 입력"><br>
            <input type="password" id="password" placeholder="비밀번호 입력"><br>
            <button id="loginBtn">로그인</button>
            <p id="errorMsg" style="color:red"></p>
        `;
    }
}

export default new Login();