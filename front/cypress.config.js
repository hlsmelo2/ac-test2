import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 60000,
    env: {
      defaultUser: 'acobuccio',
      defaultPassword: 'password',
      adminLogin: 'admin@admin.com',
    },
  },
});
