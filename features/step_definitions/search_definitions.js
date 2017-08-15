'use strict';
import searchPage from '../../pageobjects/search.page';

module.exports = function() {
    this.Given(/^I visit "([^"]*)"$/, url => {
        browser.url(url);
    });

    this.And(/^I enter "([^"]*)" into the search bar$/, phrase => {
        SearchPage.searchFor(phrase);
    });

    this.Then(/^$/, () => {
        searchPage.searchResults.getText().should.contain('pug');
    });
};
