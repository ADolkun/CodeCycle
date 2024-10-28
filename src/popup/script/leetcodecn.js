import { loadConfigs } from "../service/configService";
import { registerSubmissionListeners } from "./submission";

console.log(`Hello PMCA!`);

await loadConfigs();
registerSubmissionListeners();
