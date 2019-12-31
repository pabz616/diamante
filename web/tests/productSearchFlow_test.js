const demo = require('../test-data/environment')
const onHomePage = require('../pages/homePage')

Feature('5 Elements Product Search Flow');

Before( (I) => {
    I.amOnPage(demo.siteUrl);
});

Scenario('Successful product search for valid keyword', (I) => {
    onHomePage.searchForValidProduct(I);
});

Scenario('Successful product search for product ID', (I) => {
    onHomePage.searchForValidProductByID(I);
});

Scenario('Unsuccessful product search for a generic term', (I) => {
    onHomePage.searchInvalidProduct(I);
});

Scenario('Product selection from list on home page yields results', (I) =>{
    onHomePage.selectProductAndViewResults(I);
});

Scenario('Product selection from list on home page has no results', (I) =>{
    onHomePage.selectProductWithoutResults(I);
});


