import { getParts, getRecommendedParts } from "./recommend.js";

export async function renderPartsTable(containerSelector = ".part-table") {
  const partTableBody = document.querySelector(containerSelector);
  if (!partTableBody) {
    console.error("partTableBody를 찾을 수 없습니다.");
    return;
  }

  const parts = await getRecommendedParts();
  if (!parts || (!parts.cpu && !parts.gpu && !parts.ram)) {
    partTableBody.innerHTML = "<tr><td colspan='5'>조건에 맞는 부품이 없습니다.</td></tr>";
    return;
  }

  const mainboard = await getParts("mainboard");
  const osKey = await getParts("os");
  const ssd = await getParts("ssd");
  let totalCost = 0;

  function createRow(type, part) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${type.toUpperCase()}</td>
      <td><img src="${part.image}" alt="${part.name}" style="max-width:100px;"></td>
      <td>${part.name}</td>
      <td>${part.price.toLocaleString()} 원</td>
      <td>${part.quantity}</td>
    `;
    partTableBody.appendChild(row);
    totalCost += part.price * part.quantity;
  }

  function createFinalRow() {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>합계</td>
    <td></td>
    <td></td>
    <td>${totalCost.toLocaleString()} 원</td>
    <td></td>
    `;
    partTableBody.appendChild(row);
  }

  if (parts.cpu) createRow("cpu", parts.cpu);
  if (parts.gpu) createRow("gpu", parts.gpu);
  if (parts.ram) createRow("ram", parts.ram);
  if (mainboard) createRow("mainboard", mainboard);
  if (osKey) createRow("os", osKey);
  if (ssd) createRow("ssd", ssd);
  createFinalRow();
}
