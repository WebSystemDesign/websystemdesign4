class FaqInpage {
    template() {
        this.loadCss();
        const id = this.getQueryParam("id") || "1";
        const faq = this.faqData[id] || { title: "질문 없음", content: "해당 질문이 존재하지 않습니다." };

        return `
            <div class="wallpaper-container">
                <div class="faq-inpage-container">
                    <h2 class="faq-inpage-title">${faq.title}</h2>
                    <div class="faq-inpage-content">
                        <p>${faq.content}</p>
                    </div>
                    <button class="faq-back-button" onclick="window.history.back()">← 돌아가기</button>
                </div>
            </div>
        `;
    }

    getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    get faqData() {
        return {
            1: {
                title: "자주 묻는 질문1",
                content: "질문1에 대한 상세한 답변입니다.",
            },
            2: {
                title: "자주 묻는 질문2",
                content: "질문2에 대한 상세한 답변입니다.",
            },
            3: {
                title: "자주 묻는 질문3",
                content: "질문3에 대한 상세한 답변입니다.",
            },
            4: {
                title: "자주 묻는 질문4",
                content: "질문4에 대한 상세한 답변입니다.",
            },
            5: {
                title: "자주 묻는 질문5",
                content: "질문5에 대한 상세한 답변입니다.",
            },
        };
    }

    loadCss() {
        if (!document.querySelector('link[href="./pages/faqs/faqs_inpage.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = './pages/faqs/faqs_inpage.css';
            document.head.appendChild(link);
        }
    }

    afterRender() {
        this.loadCss();
    }
}

export default new FaqInpage();
