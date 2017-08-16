const reporter = require('cucumber-html-reporter');
const options = require('./chimp.conf');
const fs = require('fs')


const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(p+"/"+f).isDirectory())
console.log(dirs(__dirname), ' - Directories');

// Generate report
reporter.generate(options);