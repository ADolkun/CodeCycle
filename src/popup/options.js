import "./popup.css";
import {
  isCloudSyncEnabled,
  loadConfigs,
  setCloudSyncEnabled,
  setProblemSorter,
} from "./service/configService";
import { store } from "./store";
import { optionPageFeedbackMsgDOM } from "./util/doms";
import { descriptionOf, idOf, problemSorterArr } from "./util/sort";
import { exportProgress, importProgress } from "./service/importExportService";

document.addEventListener("DOMContentLoaded", async () => {
  await loadConfigs();

  const optionsForm = document.getElementById("optionsForm");

  // problem sorted setting
  const problemSorterSelect = document.getElementById("problemSorterSelect");
  const problemSorterMetaArr = problemSorterArr.map((sorter) => {
    return { id: idOf(sorter), text: descriptionOf(sorter) };
  });

  problemSorterMetaArr.forEach((sorterMeta) => {
    const optionElement = document.createElement("option");
    optionElement.value = sorterMeta.id;
    optionElement.textContent = sorterMeta.text;
    problemSorterSelect.append(optionElement);
  });

  // cloud sync setting
  const syncToggle = document.getElementById("syncToggle");
  syncToggle.checked = store.isCloudSyncEnabled || false;

  optionsForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const selectedSorterId = problemSorterSelect.value;
    const isCloudSyncEnabled = syncToggle.checked;
    await setProblemSorter(Number(selectedSorterId));
    await setCloudSyncEnabled(isCloudSyncEnabled);
    optionPageFeedbackMsgDOM.style.display = "block";
    setTimeout(() => (optionPageFeedbackMsgDOM.style.display = "none"), 1000);
  });

  const exportBtn = document.getElementById("exportBtn");
  const importBtn = document.getElementById("importBtn");
  const importInput = document.getElementById("importInput");

  exportBtn.addEventListener("click", async () => {
    try {
      await exportProgress();
    } catch (error) {
      console.error("Export failed:", error);
      // Show error message to user
    }
  });

  importBtn.addEventListener("click", () => {
    importInput.click();
  });

  importInput.addEventListener("change", async (e) => {
    if (e.target.files.length === 0) return;

    const confirmed = confirm(
      "Importing will override your current progress. Are you sure you want to continue?" +
        "\n\nTip: You might want to export your current progress first as backup."
    );

    if (!confirmed) {
      e.target.value = "";
      return;
    }

    try {
      await importProgress(e.target.files[0]);
      optionPageFeedbackMsgDOM.textContent = "Import successful!";
      optionPageFeedbackMsgDOM.style.display = "block";
      setTimeout(() => {
        optionPageFeedbackMsgDOM.style.display = "none";
        optionPageFeedbackMsgDOM.textContent = "Settings saved!";
      }, 2000);
    } catch (error) {
      console.error("Import failed:", error);
      optionPageFeedbackMsgDOM.textContent =
        "Import failed: Invalid file format";
      optionPageFeedbackMsgDOM.style.display = "block";
      setTimeout(() => {
        optionPageFeedbackMsgDOM.style.display = "none";
        optionPageFeedbackMsgDOM.textContent = "Settings saved!";
      }, 2000);
    }
    e.target.value = ""; // Reset file input
  });
});
