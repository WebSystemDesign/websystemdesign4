import { renderPartsTable } from "./render_table.js";

class DesktopDetail {
    template() {
        return `
          <div class="desktop-detail-page wallpaper-container">
            <h1>추천 부품 견적</h1>
            <table class="desktop-detail-table">
              <thead class="desktop-detail-thead">
                <tr>
                  <th>종류</th>
                  <th>이미지</th>
                  <th>제품명</th>
                  <th>가격</th>
                  <th>재고</th>
                </tr>
              </thead>
              <tbody class="part-table"></tbody>
            </table>
          </div>
        `;
      }
      
      mounted() {
        loadCSS("/pages/desktop_detail/desktop_detail.css");
        requestAnimationFrame(() => {
          renderPartsTable();
        });
      }
}

function loadCSS(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

export default new DesktopDetail();