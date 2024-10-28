import {
  getDifficultyBasedSteps,
  getSubmissionResult,
  isSubmissionSuccess,
  isSubmitButton,
  needReview,
  updateProblemUponSuccessSubmission,
  isSubmission,
} from "../util/utils";
import {
  getAllProblems,
  createOrUpdateProblem,
  getCurrentProblemInfoFromLeetCode,
  syncProblems,
} from "../service/problemService";
import { Problem } from "../entity/problem";

/* 
    monitorSubmissionResult will repeateadly check for the submission result.
*/
const monitorSubmissionResult = () => {
  console.log("Monitoring submission result...");
  let submissionResult;
  let maxRetry = 10;
  const retryInterval = 1000;

  const functionId = setInterval(async () => {
    if (maxRetry <= 0) {
      clearInterval(functionId);
      console.log("Max retries reached");
      return;
    }

    submissionResult = getSubmissionResult();
    console.log("Current submission result:", submissionResult);

    if (submissionResult === undefined || submissionResult.length === 0) {
      maxRetry--;
      return;
    }

    clearInterval(functionId);
    let isSuccess = isSubmissionSuccess(submissionResult);
    console.log("Submission success:", isSuccess);

    if (!isSuccess) return;

    const { problemIndex, problemName, problemLevel, problemUrl } =
      await getCurrentProblemInfoFromLeetCode();
    await syncProblems();
    const problems = await getAllProblems();
    let problem = problems[problemIndex];

    if (problem && problem.isDeleted !== true) {
      const reviewNeeded = needReview(problem);
      if (reviewNeeded) {
        await createOrUpdateProblem(
          updateProblemUponSuccessSubmission(problem)
        );
      }
    } else {
      problem = new Problem(
        problemIndex,
        problemName,
        problemLevel,
        problemUrl,
        Date.now(),
        getDifficultyBasedSteps(problemLevel)[0],
        Date.now()
      );
      await createOrUpdateProblem(problem);
    }
    await syncProblems();

    console.log("Submission successfully tracked!");
  }, retryInterval);
};

export const submissionListener = (event) => {
  console.log("Event captured:", event.type, event);
  if (isSubmission(event)) {
    console.log("Submission detected!");
    monitorSubmissionResult();
  }
};

// Register both click and keydown events
export const registerSubmissionListeners = () => {
  const editorElement =
    document.querySelector('[data-track-load="description_content"]') ||
    document;

  console.log("Registering submission listeners...");

  editorElement.removeEventListener("click", submissionListener);
  editorElement.removeEventListener("keydown", submissionListener);

  editorElement.addEventListener("click", submissionListener);
  editorElement.addEventListener("keydown", submissionListener);

  console.log("Submission listeners registered");
};
