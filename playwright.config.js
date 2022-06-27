// playwright.config.js
// @ts-check

require("dotenv").config({ path: "./.env.local" });
console.log(process.env.PLAYWRIGHT_GOOGLE_USERNAME);

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 30000,
  globalTimeout: 600000,
  reporter: "list",
  testDir: "./tests",
};

module.exports = config;
