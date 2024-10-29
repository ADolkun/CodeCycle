import { getAllProblems, setProblemsByMode } from "./problemService";
import { isInCnMode } from "./modeService";

export const exportProgress = async () => {
  const cnMode = await isInCnMode();
  const problems = await getAllProblems();

  const exportData = {
    problems,
    isCnSite: cnMode,
    exportDate: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `pmca-progress-${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const validateImportData = (data) => {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid file format");
  }

  if (!data.problems || typeof data.problems !== "object") {
    throw new Error("No valid problem data found");
  }

  if (data.isCnSite === undefined) {
    throw new Error("Site mode information missing");
  }

  for (const problem of Object.values(data.problems)) {
    if (
      !problem.index ||
      !problem.submissionTime ||
      problem.proficiency === undefined
    ) {
      throw new Error("Problem data is corrupted or incomplete");
    }
  }

  return true;
};

export const importProgress = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const importData = JSON.parse(e.target.result);
        validateImportData(importData);
        await setProblemsByMode(importData.problems, importData.isCnSite);
        resolve();
      } catch (error) {
        reject(error.message || "Import failed");
      }
    };

    reader.onerror = () => reject("Failed to read file");
    reader.readAsText(file);
  });
};
