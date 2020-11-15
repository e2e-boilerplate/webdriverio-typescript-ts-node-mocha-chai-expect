const headed = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.ts"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000,
    require: ["@babel/register"],
  },
  jasmineNodeOpts: {},
  cucumberOpts: {},
  // eslint-disable-next-line no-unused-vars
  before: (capabilities, specs) => {
    // eslint-disable-next-line global-require
    require("ts-node").register({ files: true });
  },
};

const headless = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.ts"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      },
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    timeout: 60000,
    require: ["@babel/register"],
  },
  jasmineNodeOpts: {},
  cucumberOpts: {},
  // eslint-disable-next-line no-unused-vars
  before: (capabilities, specs) => {
    // eslint-disable-next-line global-require
    require("ts-node").register({ files: true });
  },
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
