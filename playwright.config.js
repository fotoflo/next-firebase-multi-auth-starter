// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 30000,
  globalTimeout: 600000,
  reporter: "list",
  testDir: "./tests",
};

module.exports = config;
