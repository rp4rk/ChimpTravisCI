'use strict';
import imageSearchPage from '../../pageobjects/image-search.page';

module.exports = function() {
    this.Given(/^I am on the google image search page$/, () => {
        imageSearchPage.open();
    });

    // Enter term in search: google.js

    this.Given(/^I press the image search button$/, () => {
        imageSearchPage.pressSearchButton();
    });

    this.Then(/^I see the results of my image search$/, () => {
        expect(imageSearchPage.searchResults).toBeTruthy();
    });
};
