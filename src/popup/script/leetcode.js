import { loadConfigs } from "../service/configService";
import { registerSubmissionListeners } from "./submission";

console.log("CodeCycle: Initializing...");

// Wait for DOM to be ready
const initialize = async () => {
  await loadConfigs();
  // Add a small delay to ensure the page has loaded
  setTimeout(() => {
    registerSubmissionListeners();
    console.log("CodeCycle: Initialization complete");
  }, 1000);
};

// Run initialization when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
