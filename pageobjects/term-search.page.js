/* eslint-disable no-undef */
const googlePage = require('./google.page');

const searchPage = Object.create(googlePage, {
  /**
   * define elements
   */
  searchButton: { get() { return browser.element('input[value="Google Search"]'); } },  

  /**
   * define or overwrite page methods
   */
  open: {
    value() {
      googlePage.open.call(this, 'https://www.google.co.uk/');
    }
  },
});

module.exports = searchPage;
