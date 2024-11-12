import { loadConfigs } from "../service/configService";
import { registerSubmissionListeners } from "./submission";

console.log(`Hello CodeCycle!`);

await loadConfigs();
registerSubmissionListeners();
