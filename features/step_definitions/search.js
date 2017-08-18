'use strict';
import searchPage from '../../pageobjects/term-search.page';

module.exports = function() {
    this.Given(/^I am on the google home page$/, () => {
        searchPage.open();
    });
    
    // Enter term in search: google.js

    this.Given(/^I press the term search button$/, () => {
        searchPage.pressSearchButton();
    });

    this.Then(/^I see the results from my term search$/, () => {
        expect(searchPage.searchResults).toBeTruthy();
    });
};
