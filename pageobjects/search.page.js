/* eslint-disable no-undef */

const page = require('./page');

const searchPage = Object.create(page, {
  /**
   * define elements
   */
  searchBtn: { get() { return browser.element('.lsb[value="Google Search"]'); } },
  searchField: { get() { return browser.element('input[name="q"]'); } },
  searchResults: { get() { return browser.element('#search'); } },

  /**
   * define or overwrite page methods
   */
  open: {
    value() {
      page.open.call(this, '');
    }
  },

  searchFor: {
    value(value) {
      this.searchField.waitForVisible();
      this.searchField.setValue(value);
      this.searchBtn.waitForVisible();
      this.searchBtn.click();
      this.searchResults.waitForVisible();
    }
  },
});

module.exports = searchPage;
