const reporter = require('cucumber-html-reporter');
const options = require('./chimp.conf');
const fs = require('fs')


const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(p+"/"+f).isDirectory())
console.log(dirs, ' - Directories');

// Generate report
reporter.generate(options);