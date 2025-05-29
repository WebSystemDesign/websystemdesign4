import { renderPartsTable } from "./render_table.js";
import { saveFavoriteParts, getCurrentTableData } from "./save_favorite.js";
import { setupDownloadButton } from "./save_download.js";
import { auth } from "../../firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

class DesktopDetail {
    template() {
        return `
          <div class="desktop-detail-page wallpaper-container">
            <div class="detail-header-row">  
              <div class="detail-title">추천 부품 견적</div>
              <div class="detail-icon">
                <div id="save-favorite">
                  <img src="../../sources/heart.png">
                </div>
                <div id="save-download">
                  <img src="../../sources/download.png">
                </div>
              </div>
            </div>
            <table class="desktop-detail-table">
              <thead class="desktop-detail-thead">
                <tr>
                  <th>종류</th>
                  <th>이미지</th>
                  <th>제품명</th>
                  <th>가격</th>
                  <th>수량</th>
                  <th>삭제</th>
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
          setupFavoriteButton();
          setupDownloadButton();
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

function setupFavoriteButton() {
  const heartButton = document.getElementById("save-favorite");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      heartButton.style.display = "inline";
      heartButton.addEventListener("click", () => {
        const tableData = getCurrentTableData();
        saveFavoriteParts(tableData);
      });
    } else {
      heartButton.style.display = "none";
    }
  });
}

export default new DesktopDetail();