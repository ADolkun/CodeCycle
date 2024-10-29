const { Level } = require("level");
const fs = require("fs");
const path = require("path");
const os = require("os");

// Replace with your actual extension ID path
const DB_PATH =
  "/home/albert/snap/chromium/common/chromium/Profile 1/Local Extension Settings/[EXTENSION_ID]";

async function extractData() {
  const db = new Level(DB_PATH, { valueEncoding: "json" });

  try {
    const data = {};
    // Wait for the database to be ready
    await db.open();

    // Use get() for specific keys we're interested in
    try {
      data.records = await db.get("records");
    } catch (e) {
      console.log("No global records found");
    }

    try {
      data.cn_records = await db.get("cn_records");
    } catch (e) {
      console.log("No CN records found");
    }

    // Create export format
    const exportData = {
      problems: data.records || data.cn_records || {},
      isCnSite: !!data.cn_records,
      exportDate: new Date().toISOString(),
    };

    // Save to Downloads folder
    const downloadsPath = path.join(os.homedir(), "Downloads");
    const fileName = `pmca-backup-${
      new Date().toISOString().split("T")[0]
    }.json`;
    const outputPath = path.join(downloadsPath, fileName);

    fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2));
    console.log(`Data exported to ${outputPath}`);
  } catch (error) {
    console.error("Error extracting data:", error);
  } finally {
    await db.close();
  }
}

extractData().catch(console.error);
