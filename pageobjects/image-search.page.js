/* eslint-disable no-undef */
const googlePage = require('./google.page');

const imagePage = Object.create(googlePage, {
  /**
   * define elements
   */
  searchButton: { get() { return browser.element('button[value="search"]'); } },

  /**
   * define or overwrite page methods
   */
  open: {
    value() {
      googlePage.open.call(this, 'https://www.google.co.uk/imghp');
    }
  },
});

module.exports = imagePage;
