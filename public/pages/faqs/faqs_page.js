class Faqs {
    template() {
        this.loadCss();
        setTimeout(() => this.afterRender(), 0);
        return `
            <div class="wallpaper-container">
                <div class="faq-container">
                    <h2 class="faq-title">자주 묻는 질문</h2>
                    <ul class="faq-list">
                        <li class="faq-item" data-url="/faq-inpage">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문1</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                        <li class="faq-item" data-url="/faq-inpage">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문2</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                        <li class="faq-item" data-url="/faq-inpage">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문3</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                        <li class="faq-item" data-url="#/faq-inpage">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문4</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                        <li class="faq-item" data-url="#/faq-inpage">
                            <span class="faq-icon">Q</span>
                            <span class="faq-text">자주 묻는 질문5</span>
                            <span class="faq-arrow">▶</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }

    afterRender() {
        document.querySelectorAll('.faq-arrow').forEach(arrow => {
            arrow.addEventListener('click', (e) => {
                e.stopPropagation();
                const item = e.target.closest('.faq-item');
                const url = item.getAttribute('data-url');
                if (url) {
                    location.hash = url; // SPA 방식으로 페이지 이동
                }
            });
        });
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
