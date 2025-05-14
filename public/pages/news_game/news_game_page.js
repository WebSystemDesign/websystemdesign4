class NewsGame {
    template() {
        return `
        <div class="wallpaper-container">
            <div class="header">
                <img src="./sources/logo.png" alt="GEARQUEST" width="150"><hr>
                <h1>게임 최신 뉴스</h1>
            </div>
            <section class="news-section">
                <div class="news-card">
                    <div class="news-thumb">
                        <span class="news-number">News.1</span>
                        <img src="./source/hollowknight.jpg">
                    </div>
                    <div class="news-content">
                        <h2>할로우 나이트: 실크송 스위치2로 출시 예정</h2>
                        <p>
                        많은 팬들이 6년간 애타게 기다리고 있는 '할로우 나이트: 실크송'이 연내 출시를 확정했다. 관련 내용은 2일 방송된 닌텐도 스위치 2 다이렉트에서 공개됐다. 스위치 2로 발매되는 서드파티 타이틀을 간단하게 소개하는 코너에 '할로우 나이트: 실크송'이 포함됐으며, 2025년이라는 연도도 표기됐다. PC를 포함한 다른 기종에서는 아직 확인되지 않았으나, 적어도 닌텐도 스위치 2에서는 올해 게임을 즐겨볼 수 있을 전망이다.
                        </p>
                    </div>
                </div>

                <div class="news-card">
                    <div class="news-thumb">
                        <span class="news-number">News.2</span>
                        <img src="./source/skull.jpg">
                    </div>
                    <div class="news-content">
                        <h2>누적 판매 200만 장 '스컬', 모바일판 정식 출시</h2>
                        <p>
                            PC/콘솔에서 큰 사랑을 받은 로그라이크 액션 플랫포머 '스컬'이 모바일로 출시됐다. 네오위즈는 지난 4일, 사우스포게임즈가 개발한 2D 액션 게임 '스컬’ 모바일 버전을 양대마켓에 정식 출시했다고 밝혔다.
                        </p>
                    </div>
                </div>
                <div class="news-card">
                    <div class="news-thumb">
                        <span class="news-number">News.2</span>
                        <img src="./source/ff14.jpg">
                    </div>
                    <div class="news-content">
                        <h2>기억과 마주하라, 파판14 '미지와의 해후' 업데이트</h2>
                        <p> 
                            액토즈소프트는 PC MMORPG '파이널 판타지 14'에서 V7.1 ‘미지와의 해후’를 18일 업데이트했다. V7.1 ‘미지와의 해후’에서는 평화가 찾아온 ‘투랄’ 대륙에서 밝혀지지 않은 기억과 마주하게 되는 모험가 일행의 신규 시나리오를 선보인다.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        `;
    }
}

export default new NewsGame();
