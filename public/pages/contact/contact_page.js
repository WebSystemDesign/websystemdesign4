class Contact {
    template() {
        return `
        <div class="wallpaper-container contact-container">
            <h1 class="contact-header">문의 사항</h1>
            <span class="contact-header-text">궁금하신 점을 남겨주시면 답변드리겠습니다.</span>
            <div class="contact-header-line"></div>
            <form class="contact-form">
                <label id="contact-title-label" for="contact-title">제목</label>
                <input type="text" id="contact-title" placeholder="제목을 입력해주세요">

                <label id="contact-text-label" for="contact-text">내용</label>
                <textarea type="text" id="contact-text" placeholder="문의 내용을 입력해주세요"></textarea>

                <div class="contact-button-group">
                    <button type="submit" id="contact-resignBtn">등록</button>
                    <button type="reset" id="contact-cancelBtn">취소</button>
                </div>
            </form>
        </div>
        `;
    }
}

export default new Contact();