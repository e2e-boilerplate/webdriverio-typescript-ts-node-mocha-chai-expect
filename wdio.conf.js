exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        './spec/*.spec.ts'
    ],
    capabilities: [{
        browserName: 'chrome',
    }],
    logLevel: 'silent',
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        timeout: 60000
    },
    before: function (capabilities, specs) {
        require('ts-node').register({ files: true });
    },
};
