import { changeUrl } from "../../main.js";

class Faqs {
    template() {
        this.loadCss();
        setTimeout(() => this.afterRender(), 0);

        const faqItems = [
            { id: 1, question: "CPU와 그래픽카드 중 어떤 걸 먼저 고려해야 하나요?" },
            { id: 2, question: "오버클럭을 할 생각이 없으면 K버전 CPU를 사지 않아도 되나요?" },
            { id: 3, question: "그래픽카드는 NVIDIA와 AMD 중 어떤 브랜드가 더 좋나요?" },
            { id: 4, question: "파워서플라이는 용량만 크면 괜찮은가요?" },
            { id: 5, question: "메인보드는 어떻게 고르면 되나요?" },
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
