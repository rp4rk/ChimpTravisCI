const reporter = require('cucumber-html-reporter');
const options = require('./chimp.conf');

console.log(__dirname, ' - Current dir');

// Generate report
reporter.generate(options);