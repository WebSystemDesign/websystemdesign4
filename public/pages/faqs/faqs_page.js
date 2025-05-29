import { changeUrl } from "../../main.js";

class Faqs {
    template() {
        this.loadCss();
        setTimeout(() => this.afterRender(), 0);

        const faqItems = [
            { id: 1, question: "자주 묻는 질문1" },
            { id: 2, question: "자주 묻는 질문2" },
            { id: 3, question: "자주 묻는 질문3" },
            { id: 4, question: "자주 묻는 질문4" },
            { id: 5, question: "자주 묻는 질문5" },
        ];

        return `
            <div class="wallpaper-container">
                <div class="faq-container">
                    <h2 class="faq-title">자주 묻는 질문</h2>
                    <ul class="faq-list">
                        ${faqItems.map(item => `
                            <li class="faq-item" data-url="/faq-inpage?id=${item.id}">
                                <span class="faq-icon">Q</span>
                                <span class="faq-text">${item.question}</span>
                                <span class="faq-arrow">▶</span>
                            </li>
                        `).join("")}
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
                    changeUrl(url);
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
