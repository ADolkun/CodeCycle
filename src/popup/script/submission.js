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

const MAX_INIT_RETRIES = 5;
const INIT_RETRY_DELAY = 2000;

/* 
    monitorSubmissionResult will repeateadly check for the submission result.
*/
const monitorSubmissionResult = () => {
  console.log("CodeCycle: Monitoring submission result...");
  let submissionResult;
  let maxRetry = 10;
  const retryInterval = 1000;

  const functionId = setInterval(async () => {
    if (maxRetry <= 0) {
      clearInterval(functionId);
      console.log("CodeCycle: Max retries reached for submission monitoring");
      return;
    }

    submissionResult = getSubmissionResult();
    console.debug("CodeCycle: Current submission result:", submissionResult);

    if (submissionResult === undefined || submissionResult.length === 0) {
      maxRetry--;
      return;
    }

    clearInterval(functionId);
    let isSuccess = isSubmissionSuccess(submissionResult);
    console.log("CodeCycle: Submission result -", isSuccess ? "Success" : "Failed");

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

    console.log("CodeCycle: Submission successfully tracked");
  }, retryInterval);
};

export const submissionListener = (event) => {
  console.debug("CodeCycle: Event captured:", event.type);
  if (isSubmission(event)) {
    console.log("CodeCycle: Valid submission detected");
    monitorSubmissionResult();
  }
};

// Register both click and keydown events
export const registerSubmissionListeners = () => {
  console.log("CodeCycle: Registering submission listeners...");
  let initRetries = 0;

  const initializeListeners = () => {
    // Remove existing listeners first
    document.removeEventListener("click", submissionListener);
    document.removeEventListener("keydown", submissionListener);

    // Add listeners to document
    document.addEventListener("click", submissionListener);
    document.addEventListener("keydown", submissionListener);

    // Try to find and attach to the editor
    const editorElement = document.querySelector('[data-track-load="description_content"]');
    if (editorElement) {
      console.debug("CodeCycle: Editor element found, attaching listeners");
      editorElement.removeEventListener("click", submissionListener);
      editorElement.removeEventListener("keydown", submissionListener);
      editorElement.addEventListener("click", submissionListener);
      editorElement.addEventListener("keydown", submissionListener);
      return true;
    }

    return false;
  };

  // Initial attempt
  if (!initializeListeners() && initRetries < MAX_INIT_RETRIES) {
    console.log("CodeCycle: Editor element not found, initiating retry mechanism");
    
    // Set up retry mechanism
    const retryInterval = setInterval(() => {
      console.debug(`CodeCycle: Retry attempt ${initRetries + 1} of ${MAX_INIT_RETRIES}`);
      if (initializeListeners() || initRetries >= MAX_INIT_RETRIES) {
        clearInterval(retryInterval);
        if (initRetries >= MAX_INIT_RETRIES) {
          console.log("CodeCycle: Using document-level listeners as fallback");
        }
      }
      initRetries++;
    }, INIT_RETRY_DELAY);
  }

  // Set up MutationObserver as additional fallback
  const observer = new MutationObserver((mutations, obs) => {
    const editorElement = document.querySelector('[data-track-load="description_content"]');
    if (editorElement) {
      initializeListeners();
      // Don't disconnect observer in case the element gets removed/readded
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  console.log("CodeCycle: Submission tracking system initialized");
};
