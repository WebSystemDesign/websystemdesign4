class Contact {
    template() {
        return `
        <div class="wallpaper-container">
            <h1 class="contact-header">문의 사항</h1>
            <span class="contact-header-text">궁금하신 점을 남겨주시면 답변드리겠습니다.</span>
            <form class="contact">
                <label id="contact-title-label" for="contact-title">제목</label>
                <input type="text" id="contact-title">
                <br>
                <label id="contact-text-label" for="contact-text">내용</label>
                <input type="text" id="contact-text">
            </form>
            <button type="submit">등록</button>
            <button type="reset">취소</button>
        </div>
        `;
    }
}

export default new Contact();