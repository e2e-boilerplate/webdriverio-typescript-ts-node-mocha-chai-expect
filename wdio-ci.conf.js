exports.config = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.ts"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: ["--headless", "--disable-gpu"]
      }
    }
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000
  },
  before: function(capabilities, specs) {
    require("ts-node").register({ files: true });
  }
};
