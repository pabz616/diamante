const onDemoSite = require('../locators/demoSiteLocators')
const { I } = inject();

module.exports = {
  seeAllProductReviews(){
    I.seeElement(onDemoSite.productReview.details.pageHeader);
    I.seeElement(onDemoSite.productReview.details.movieTitle);
    I.seeElement(onDemoSite.productReview.details.movieAuthor);
    I.seeElement(onDemoSite.productReview.details.movieImage);
    I.seeElement(onDemoSite.productReview.details.comment);
    I.seeElement(onDemoSite.productReview.details.rating);
    I.see("Date Added: Monday 14 December, 2015");
    I.see("Displaying 1 to 1 (of 1 reviews)");
    I.see("Result Pages:  1 ");
  }
}
