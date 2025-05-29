class FaqInpage {
    template() {
        this.loadCss();
        const id = this.getQueryParam("id") || "1";
        const faq = this.faqData[id] || { title: "질문 없음", content: "해당 질문이 존재하지 않습니다." };

        return `
            <div class="wallpaper-container">
                <div class="faq-inpage-container">
                    <div class="faq-header">
                    <h1 class="faq-icon">Q</h1>
                    <h2 class="faq-inpage-title">${faq.title}</h2>
                    </div>

                    <div class="faq-inpage-content">
                        <p>${faq.content}</p>
                    </div>
                    <div class="faq-button-wrapper">
                    <button class="faq-back-button" onclick="window.history.back()">← 돌아가기</button>
                    </div>
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
                title: "CPU와 그래픽카드 중<br>어떤 걸 먼저 고려해야 하나요?",
                content: "용도에 따라 다릅니다.<br>게임 위주라면 그래픽카드(GPU)를 먼저 고려하고, 영상 편집이나 렌더링처럼 멀티코어<br>작업이 많다면 CPU가 더 중요합니다.<br>일반적인 작업에는 중간급 CPU + 그래픽카드 조합이 가장 효율적입니다.",
            },
            2: {
                title: "오버클럭을 할 생각이 없다면<br>K버전 CPU를 사지 않아도 되나요?",
                content: "맞습니다. 인텔의 K버전 CPU는 오버클럭이 가능한 제품이므로, 오버클럭을 하지 않는다면 일반 버전을 구매하고 그만큼의 비용을 절약할 수 있습니다.<br>쿨러도 고급형이 필요 없어 경제적입니다.",
            },
            3: {
                title: "그래픽카드는 NVIDIA와 AMD 중<br>어느 브랜드가 더 좋나요?",
                content: "두 브랜드 모두 장단점이 있습니다.<br>NVIDIA는 DLSS와 CUDA 지원, 안정성 면에서 강점이 있고, AMD는 같은 가격대에서 더 높은 성능을 제공하는 경우가 많습니다.<br>사용하는 프로그램 또는 게임 호환성을 우선 고려하시는 것을 추천드립니다.",
            },
            4: {
                title: "파워서플라이는 용량만 크면 괜찮은가요?",
                content: "아닙니다. 출력 용량뿐만 아니라 브랜드의 신뢰도, 80PLUS 인증, 정격 출력 여부 등을 꼭 확인하는 것이 좋습니다.<br>과도한 용량보다는 시스템에 맞는 정격 파워(여유 100~150W) 선택이 더 안정적입니다.",
            },
            5: {
                title: "메인보드는 어떻게 고르면 되나요?",
                content: "CPU 소켓에 맞는 보드를 선택하는 게 첫 번째입니다.<br>그 다음, 필요한 기능(PCIe 슬롯, Wi-Fi, USB 포트 수, M.2 슬롯 등), 브랜드 신뢰도, 전원부 품질을 고려하세요.<br>고사양 PC일수록 전원부 품질이 중요해집니다.",
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
