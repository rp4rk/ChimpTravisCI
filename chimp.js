module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  watchTags: '@focus',
  watchWithPolling: false,
  domainSteps: null,
  e2eTag: '@critical',
  fullDomain: false,
  domainOnly: false,
  server: false,
  serverPort: 8060,
  serverHost: 'localhost',
  sync: true,
  offline: false,

  // - - - - CUCUMBER - - - -
  path: './source/e2e/features',
  format: 'pretty',
  tags: '~@ignore',
  singleSnippetPerFile: true,
  recommendedFilenameSeparator: '_',
  chai: false,
  screenshotsOnError: true,
  screenshotsPath: './e2e_output/screenshots',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,
  saveScreenshotsToReport: true,
  jsonOutput: './e2e_output/cucumber.json',
  conditionOutput: true,

  // - - - - CUCUMBER REPORT - - - -
  htmlReport: true,
  theme: 'bootstrap',
  jsonFile: './e2e_output/cucumber.json',
  output: './e2e_output/report/cucumber.html',
  reportSuiteAsScenarios: true,
  launchReport: true,

  // - - - - SELENIUM  - - - -
  browser: 'chrome',
  platform: 'ANY',
  name: '',
  user: '',
  key: '',
  port: null,
  host: null,
  // deviceName: null,

  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
    desiredCapabilities: {},
    logLevel: 'silent',
    // logOutput: null,
    host: '127.0.0.1',
    port: 4444,
    path: '/wd/hub',
    baseUrl: 'https://google.com',
    coloredLogs: true,
    screenshotPath: null,
    waitforTimeout: 5000,
    waitforInterval: 250,
  },

  // - - - - SELENIUM-STANDALONE
  seleniumStandaloneOptions: {
    // check for more recent versions of selenium here:
    // http://selenium-release.storage.googleapis.com/index.html
    version: '2.53.1',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    drivers: {
      chrome: {
        // check for more recent versions of chrome driver here:
        // http://chromedriver.storage.googleapis.com/index.html
        version: '2.24',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com',
      },
      ie: {
        // check for more recent versions of internet explorer driver here:
        // http://selenium-release.storage.googleapis.com/index.html
        version: '2.50.0',
        arch: 'ia32',
        baseURL: 'https://selenium-release.storage.googleapis.com',
      },
      firefox: {
        version: '0.11.1',
        arch: process.arch,
        baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
      },
    },
  },

  // - - - - SESSION-MANAGER  - - - -
  noSessionReuse: false,

  // - - - - MOCHA  - - - -
  mocha: true,
  // mochaTags and mochaGrep only work when watch is false (disabled)
  mochaTags: '',
  mochaGrep: null,
  // 'path: './tests',
  mochaTimeout: 60000,
  mochaReporter: 'spec',
  mochaSlow: 10000,

  // - - - - JASMINE  - - - -
  jasmine: false,
  jasmineConfig: {
    specDir: '.',
    specFiles: [
      '**/*@(_spec|-spec|Spec).@(js|jsx)',
    ],
    helpers: [
      'support/**/*.@(js|jsx)',
    ],
    stopSpecOnExpectationFailure: false,
    random: false,
  },
  jasmineReporterConfig: {
    // This options are passed to jasmine.configureDefaultReporter(...)
    // See: http://jasmine.github.io/2.4/node.html#section-Reporters
  },

  // - - - - METEOR  - - - -
  ddp: false,

  // - - - - PHANTOM  - - - -
  phantom_w: 1280,
  phantom_h: 1024,

  // - - - - DEBUGGING  - - - -
  log: 'info',
  debug: false,
  seleniumDebug: null,
  debugCucumber: null,
  debugBrkCucumber: null,
  debugMocha: null,
  debugBrkMocha: null,
};
