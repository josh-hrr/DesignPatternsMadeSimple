import { defineConfig } from "cypress";

export default defineConfig({
  e2e: { 
    baseUrl: "https://www.saucedemo.com",
    specPattern: "**/*.ts",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
