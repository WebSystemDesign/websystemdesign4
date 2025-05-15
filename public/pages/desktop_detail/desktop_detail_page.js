import { renderPartsTable } from "./render_table.js";

class DesktopDetail {
    template() {
        return `
          <div class="desktop-detail-page">
            <h1>추천 부품 견적</h1>
            <table id="part-table">
              <thead>
                <tr>
                  <th>종류</th>
                  <th>이미지</th>
                  <th>제품명</th>
                  <th>가격</th>
                  <th>재고</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        `;
      }
    
      mounted() {
        renderPartsTable();
      }
}

export default new DesktopDetail();