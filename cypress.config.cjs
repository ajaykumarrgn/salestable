const axios = require('axios');
const XLSX = require('xlsx'); // Import xlsx library
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

module.exports = defineConfig({
  env: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async readExcelFromGithub({ fileUrl, sheetName }) {
          // Fetch the file from GitHub's raw content API
          const githubRawUrl = `https://raw.githubusercontent.com/Fathima786Irfana/Cypress-with-excel/main/cypress/variables/sales_table.xlsx`;

          const response = await axios.get(githubRawUrl, {
            responseType: 'arraybuffer', // To handle binary data
          });

          const workbook = XLSX.read(response.data, { type: 'buffer' });
          const sheet = workbook.Sheets[sheetName];
          if (!sheet) {
            throw new Error(`Sheet with name ${sheetName} not found`);
          }

          // Convert sheet to JSON
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          return jsonData;
        },
      });
    },
  },
});
