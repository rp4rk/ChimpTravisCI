const reporter = require('cucumber-html-reporter');
const options = require('./chimp.conf');

// Generate report
reporter.generate(options);