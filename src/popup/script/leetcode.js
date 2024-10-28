import { loadConfigs } from "../service/configService";
import { registerSubmissionListeners } from "./submission";

console.log("Initializing PMCA...");

// Wait for DOM to be ready
const initialize = async () => {
  await loadConfigs();
  registerSubmissionListeners();
  console.log("PMCA initialized!");
};

// Run initialization when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
