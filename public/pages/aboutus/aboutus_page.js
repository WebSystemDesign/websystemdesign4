class Aboutus {
    async template() {
        return `
            <div class="wallpaper-container">
                <h1 class="page-logo">Made By</h1>
                <div class = "about-makers">
                    <div class="about-content">
                        <img class= "about-profile" src = "../../sources/lee24_profile.jpg" alt="profile-img">
                        <div class="about-texts">
                            <h1 class="about-text">이은진</h1>
                            <h2 class="about-text">-숙명여자대학교 (2415122) 컴퓨터과학전공</h2>
                            <h2 class="about-text">프론트엔드, 백엔드,기획 담당</h2>
                        </div>
                    </div>
                    <div class="about-content">
                        <img class= "about-profile" src = "../../sources/jmk24_profile.jpg" alt="profile-img">
                        <div class="about-texts">
                            <h1 class="about-text">정민경</h1>
                            <h2 class="about-text">-숙명여자대학교 (2416833) 컴퓨터과학전공</h2>
                            <h2 class="about-text">프론트엔드, 백엔드</h2>
                        </div>
                    </div>
                    <div class="about-content">
                        <img class= "about-profile" src = "../../sources/jsm24_profile.jpg" alt="profile-img">
                        <div class="about-texts">
                            <h1 class="about-text">정수민</h1>
                            <h2 class="about-text">-숙명여자대학교 (2416635) 컴퓨터과학전공</h2>
                            <h2 class="about-text">프론트엔드, 디자인</h2>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

export default new Aboutus();