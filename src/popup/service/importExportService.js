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

export const importProgress = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const importData = JSON.parse(e.target.result);
        if (!importData.problems || importData.isCnSite === undefined) {
          throw new Error("Invalid import file format");
        }

        await setProblemsByMode(importData.problems, importData.isCnSite);
        resolve();
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });
};
