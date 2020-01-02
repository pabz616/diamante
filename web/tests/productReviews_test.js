const demo = require('../test-data/environment')
const onHomePage = require('../pages/homePage')
const onProductReviewPage = require('../pages/reviewsPage')

Feature('5 Elements Demo Site - Product Reviews');

Before( (I) => {
    I.amOnPage(demo.siteUrl);
  });

Scenario('Test Product Reviews', (I) => {
    onHomePage.navigateToProductReviewsPage(I);
    onProductReviewPage.seeAllProductReviews(I);
});
