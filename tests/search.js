import searchPage from '../pageobjects/search.page';

describe('Search', () => {
  beforeEach(() => {
    browser.openUrl('https://www.google.co.uk/')
    searchPage.open();
  });

  it('should display apples wikipedia article in results', () => {
    searchPage.searchFor('apples wikipedia');
    searchPage.searchResults.getText().should.contain('Apple - Wikipedia');
  });

  it('should display oranges wikipedia article in results', () => {
    searchPage.searchFor('oranges wikipedia');
    searchPage.searchResults.getText().should.contain('Orange (fruit) - Wikipedia');
  });
});
