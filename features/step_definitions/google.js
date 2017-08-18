'use strict';
import googlePage from '../../pageobjects/google.page';

module.exports = function() {
    this.Then(/^I enter "([^"]*)" into the search bar$/, phrase => {
        googlePage.enterSearchText(phrase);
    });
};