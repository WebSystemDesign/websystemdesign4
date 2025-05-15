const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", (event) => {
    event.stopPropagation();  // 이 이벤트가 문서 전체로 퍼지는 걸 막음
    menu.classList.toggle("hidden");
    console.log("클릭됨");
    console.log("hidden 여부:", menu.classList.contains("hidden"));
});

document.addEventListener("click", function(event) {
    // 메뉴나 버튼을 클릭한 경우는 무시
    if (menu.contains(event.target) || toggleBtn.contains(event.target)) return;

    // 바깥을 클릭했을 때 메뉴가 열려 있다면 닫기
    if (!menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
    }
});
