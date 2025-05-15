import { getRecommendedParts } from "./recommend.js";

export async function renderPartsTable(containerSelector = "#part-table tbody") {
  const partTableBody = document.querySelector(containerSelector);
  if (!partTableBody) return;

  function createRow(type, part) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${type.toUpperCase()}</td>
      <td><img src="${part.image}" alt="${part.name}"></td>
      <td>${part.name}</td>
      <td>${part.price.toLocaleString()} 원</td>
      <td>${part.quantity}</td>
    `;
    partTableBody.appendChild(row);
  }

  const parts = await getRecommendedParts();
  if (!parts) {
    partTableBody.innerHTML = "<tr><td colspan='5'>선택된 게임이 없습니다.</td></tr>";
    return;
  }

  createRow("cpu", parts.cpu);
  createRow("gpu", parts.gpu);
  createRow("ram", parts.ram);
}
