const demo = require('../test-data/environment')
const onHomePage = require('../pages/homePage')

Feature('5 Elements Product Search Flow');

Scenario('Successful product search for valid keyword', (I) => {
    I.amOnPage(demo.siteUrl);
    onHomePage.searchForValidProduct(I);
});

Scenario('Unsuccessful product search for a generic term', (I) => {
    I.amOnPage(demo.siteUrl);
    onHomePage.searchInvalidProduct(I);
});

Scenario('Product selection from list on home page yields results', (I) =>{
    I.amOnPage(demo.siteUrl);
    onHomePage.selectProductAndViewResults(I);
});

Scenario('Product selection from list on home page has no results', (I) =>{
    I.amOnPage(demo.siteUrl);
    onHomePage.selectProductWithoutResults(I);
});


