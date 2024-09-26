const { defineConfig } = require('cypress');
const XLSX = require('xlsx'); // Import the xlsx library
const axios = require('axios'); // Import the axios library
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
    setupNodeEvents(on, config) {
      on('task', {
        readExcel({ sheetName }) {
          const url = `https://raw.githubusercontent.com/Fathima786Irfana/Cypress-with-excel/main/cypress/variables/sales_table.xlsx`;
          axios.get(url, { responseType: 'arraybuffer' })
            .then(response => {
              const workbook = XLSX.read(response.data, { type: 'array' });
              const sheet = workbook.Sheets[sheetName];
              if (!sheet) {
                throw new Error(`Sheet with name ${sheetName} not found`);
              }
              const jsonData = XLSX.utils.sheet_to_json(sheet);
              return jsonData;
            })
            .catch(error => {
              throw new Error(`Error reading Excel file: ${error.message}`);
            });
        }
      });
      // Implement other node event listeners here if needed
    },
  },
});
