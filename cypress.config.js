const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  retries: 0,
  reporterOptions: {
    reportDir: 'test-report',
    charts: true,
    reportPageTitle: 'Practice Test Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen:true,
  },
  e2e: {
    
    baseUrl:"https://practicetestautomation.com/practive-test-login",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 90000,
  pageLoadTimeout: 90000,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: true,
  videoUploadOnPasses: true,
  viewportHeight: 900,
  viewportWidth: 1440,

 

  
});

