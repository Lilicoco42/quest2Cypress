const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: "https://preprod.backmarket.fr/register",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
