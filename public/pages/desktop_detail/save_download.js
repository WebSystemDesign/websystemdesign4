export function setupDownloadButton() {
    const downloadButton = document.getElementById("save-download");
  
    if (!downloadButton) return;
  
    downloadButton.addEventListener("click", () => {
      const table = document.querySelector(".desktop-detail-table");
  
      if (!table) {
        alert("다운로드할 표가 없습니다.");
        return;
      }
  
      // 새로운 윈도우에 표를 복사하여 출력
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <html>
          <head>
            <title>추천 부품 견적</title>
            <style>
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: center;
              }
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            <h1>추천 부품 견적</h1>
            ${table.outerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    });
  }
  