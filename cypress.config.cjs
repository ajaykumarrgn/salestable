const { defineConfig } = require('cypress');
const XLSX = require('xlsx');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config({path:'./.env'});

module.exports = defineConfig({
  env: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
  },
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      on('task', {
        readExcel({ filePath, sheetName }) {
          // Adjust the path for GitHub environment (relative to the repo)
          const normalizedPath = path.join(__dirname, filePath);

          // Check if the file exists
          if (!fs.existsSync(normalizedPath)) {
            throw new Error(`File not found at path: ${normalizedPath}`);
          }

          // Read the Excel file
          const workbook = XLSX.readFile(normalizedPath);

          // Get the sheet data
          const sheet = workbook.Sheets[sheetName];
          if (!sheet) {
            throw new Error(`Sheet with name ${sheetName} not found`);
          }

          // Convert sheet to JSON
          const jsonData = XLSX.utils.sheet_to_json(sheet);

          // Return the JSON data
          return jsonData;
        }
      });
    },
  },
});
