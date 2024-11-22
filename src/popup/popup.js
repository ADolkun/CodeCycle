import "./popup.css";
import { renderAll } from "./view/view.js";

console.log("CodeCycle: Initializing popup view...");
await renderAll();
console.log("CodeCycle: Popup view rendered");
