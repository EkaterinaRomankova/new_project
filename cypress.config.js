const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
  e2e: {
    baseUrl: 'https://qatest.site',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
