const fs = require("fs");

function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmdirSync(folderPath, { recursive: true });
    console.log("Folder deleted successfully");
  } else {
    console.log("Folder does not exist, skipping deletion");
  }
}

deleteFolder("codecycle");
