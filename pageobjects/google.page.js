/* eslint-disable no-undef */
const page = require('./page');

const googlePage = Object.create(page, {
  /**
   * define elements
   */
  searchField: { get() { return browser.element('input[name="q"]'); } },
  searchResults: { get() { return browser.element('#search'); } },

  /**
   * define or overwrite page methods
   */
  open: {
    value() {
      page.open.call(this, 'https://www.google.co.uk/');
    }
  },

  enterSearchText: {
    value(text) {
      this.searchField.setValue(text);
    }
  },

  pressSearchButton: {
    value() {
      if (!this.searchButton) { return; }

      this.searchButton.click();
    }
  }
});

module.exports = googlePage;
