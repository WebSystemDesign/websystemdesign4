class NewsGear {
    template() {
        return `
        <div class="wallpaper-container">
            <div class="header">
                <img src="./sources/logo.png" alt="GEARQUEST" width="150"><hr>
                <h1>부품 최신 뉴스</h1>
            </div>
            <section class="news-section">
                <div class="news-card">
                    <div class="news-thumb">
                        <span class="news-number">News.1</span>
                        <img src="./source/graphic.jpg">
                    </div>
                    <div class="news-content">
                        <h2>4월 그래픽카드 평균 구매가 114만 원, 3달 새 2배 ↑</h2>
                        <p>
                            그래픽카드 평균 구매가가 3개월 사이 2배 가량 상승한 것으로 밝혀졌다.
                            국내 가격 비교 서비스 다나와는 17일, 올해 2월부터 4월까지 그래픽카드 거래액이 전년 대비 크게 증가했다고 밝혔다. 다나와 자료에 따르면 2월부터 4월 중순까지 그래픽카드 거래액은 각각 전년 대비 23%, 26%, 25% 상승했다.
                        </p>
                    </div>
                </div>

                <div class="news-card"> 
                    <div class="news-thumb">
                        <span class="news-number">News.2</span>
                        <img src="./source/amd.jpg">
                    </div>
                    <div class="news-content">
                        <h2>AMD 라이젠 9950X3D 12일 미국 출시, 699달러</h2>
                        <p>
                            AMD가 지난 8일에 라이젠 9 X3D 프로세서 시리즈의 출시일 및 가격을 공식 발표했다.
                            라이젠 9 9950X3D와 라이젠 9 9900X3D 출시일은 미국 현지 기준 12일이다. 라이젠 9 9950X3D의 권장소비자가격은 699달러(한화 약 101만 6,990 원), 라이젠 9 9900X3D의 권장소비자가격은 599달러(한화 약 87만 1,500원)이다.
                        </p>
                    </div>
                </div>
                <div class="news-card">
                    <div class="news-thumb">
                        <span class="news-number">News.2</span>
                        <img src="./source/intel.jpg">
                    </div>
                    <div class="news-content">
                        <h2>인텔 공인 대리점, 합리적 가격 i5 '밸류팩' 출시</h2>
                        <p> 
                            인텔 공인 대리점 3사(피씨디렉트, 코잇, 인텍앤컴퍼니)는 합리적 가격의 새로운 ‘밸류팩’ 제품을 국내 시장에 단독 출시한다고 24일 발표했다. 인텔 코어 i5 프로세서 14400F 및 14600KF 밸류팩(정품) 총 2종으로, 글로벌 최초로 한국 시장에서만 선보여진다.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        `;
    }
}

export default new NewsGear();
