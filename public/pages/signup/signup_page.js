class Signup {
    template() {
        return `
            <h1>회원가입</h1>
            <input type="email" id="signupEmail" placeholder="이메일 입력"><br>
            <input type="password" id="signupPassword" placeholder="비밀번호 입력"><br>
            <button id="signupBtn">회원가입</button>
            <p id="signupError" style="color:red"></p>
        `;
    }
}

export default new Signup();