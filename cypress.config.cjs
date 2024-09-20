const { defineConfig } = require('cypress');
const XLSX = require('xlsx'); // Import the xlsx library
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

module.exports = defineConfig({
  env: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
  },
  e2e: {
    watchForFileChanges: false,
    // baseUrl: 'http://qsgbcz.docker.localhost',
    setupNodeEvents(on, config) {
      on('task', {
        readExcel({ filePath, sheetName }) {
          const normalizedPath = path.resolve(__dirname, 'cypress/variables/sales_table.xlsx'); // Adjust the path
    console.log(`Reading Excel from: ${normalizedPath}`);
          // Adjust the filePath for Windows
          //const normalizedPath = filePath.replace(/\\/g, '\\\\');

          // Read the Excel file
          const workbook = XLSX.readFile(normalizedPath);

          // Get the sheet data
          const sheet = workbook.Sheets[sheetName];
          if (!sheet) {
            throw new Error('Sheet with name ${sheetName} not found');
          }

          // Convert sheet to JSON
          const jsonData = XLSX.utils.sheet_to_json(sheet);

          // Return the JSON data
          return jsonData;
        }
      });
      // Implement other node event listeners here if needed
    },
  },
});
