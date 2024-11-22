import { loadConfigs } from "../service/configService";
import { registerSubmissionListeners } from "./submission";

console.log("CodeCycle: Initializing...");

await loadConfigs();
registerSubmissionListeners();
console.log("CodeCycle: Initialization complete");
