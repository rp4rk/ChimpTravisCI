'use strict';
import searchPage from '../../pageobjects/search.page';

module.exports = function() {
    this.Given(/^I visit "([^"]*)"$/, url => {
        browser.url(url);
    });

    this.Then(/^I enter "([^"]*)" into the search bar$/, phrase => {
        searchPage.searchFor(phrase);
    });

    this.Then(/^I see pugs$/, () => {
        expect(true).toBeFalsy();
    });
};
