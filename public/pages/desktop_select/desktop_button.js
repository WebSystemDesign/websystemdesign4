import { changeUrl } from "../../main.js";

document.getElementById("desktop-min-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("specType", "min");
    changeUrl("/desktop_detail");
});

document.getElementById("desktop-rec-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("specType", "rec");
    changeUrl("/desktop_detail");
});
