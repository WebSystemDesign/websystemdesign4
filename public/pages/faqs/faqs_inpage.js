class FaqsIn {
    template() {
        this.loadCss();
        return `
            <div class="wallpaper-container">
                <div class="faq-container">
                    <h2 class="faq-title">자주 묻는 질문</h2>
     
                </div>
            </div>
        `;
    }

    loadCss() {
        if (!document.querySelector('link[href="./pages/faqs/faqs_inpage.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = './pages/faqs/faqs_inpage.css';
            document.head.appendChild(link);
        }
    }
}

export default new FaqsIn();
