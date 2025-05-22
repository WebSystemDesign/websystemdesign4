class Faqs {
    template() {
        this.loadCss();
        return `
            <div class="wallpaper-container">
                <div class="faq-container">
                    <h2 class="faq-title">자주 묻는 질문</h2>
                    <ul class="faq-list">
                        <li class="faq-item">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문1</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                        <li class="faq-item">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문2</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                        <li class="faq-item">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문3</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                        <li class="faq-item">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문4</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                        <li class="faq-item">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문5</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }

    loadCss() {
        if (!document.querySelector('link[href="./pages/faqs/faqs.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = './pages/faqs/faqs.css';
            document.head.appendChild(link);
        }
    }
}

export default new Faqs();
