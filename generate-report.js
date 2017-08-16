const reporter = require('cucumber-html-reporter');
const options = require('./chimp.conf');

reporter.generate(options);