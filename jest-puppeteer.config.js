// jest-puppeteer.config.js
module.exports = {
  server: {
    command:
      "./node_modules/.bin/gatsby build && ./node_modules/.bin/gatsby serve",
    port: 9000,
    launchTimeout: 20000
  }
};
