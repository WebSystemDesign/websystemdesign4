/* 공지사항 전환 애니메이션 */
const notices = document.querySelectorAll('.notice-item');
const noticeContent = document.getElementById('notice-content');
const prevBtn = document.getElementById('notice-prev-btn');
const nextBtn = document.getElementById('notice-next-btn');

let currentIndex = 0;

function updateNotice() {
    const offset = -currentIndex * 24;
    noticeContent.style.transform = `translateY(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + notices.length) % notices.length;
    updateNotice();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % notices.length;
    updateNotice();
});