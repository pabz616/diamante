const onDemoSite = require('../locators/demoSiteLocators')
const demo = require('../test-data/keywords')
const { I } = inject();

module.exports = {
  selectProduct(){
    I.waitForVisible(onDemoSite.productCatalog.pageHeader);
    I.see('Welcome to Tattvamassi')
    I.see('New Products For December')
    I.click(onDemoSite.productCatalog.video3);
  },

  selectFromBestSellersList(){
    I.see("Bestsellers");
    I.click(onDemoSite.bestSellersList.link1);
  },

  searchForValidProduct(){
    I.fillField(onDemoSite.productSearch.input, demo.valid_keyword);
    I.click(onDemoSite.productSearch.submit);
    I.waitForVisible(onDemoSite.productSearch.results.productImage)
    I.seeElementInDOM(onDemoSite.productSearch.results.productImage);
    I.seeElementInDOM(onDemoSite.productSearch.results.productName);
    I.seeElementInDOM(onDemoSite.productSearch.results.productPrice);
    I.seeElementInDOM(onDemoSite.productSearch.results.productCTA);
    I.dontSee(onDemoSite.productSearch.results.no_results_msg);
  },

  searchForValidProductByID(){
    I.fillField(onDemoSite.productSearch.input, demo.product_id);
    I.click(onDemoSite.productSearch.submit);
    I.waitForVisible(onDemoSite.productSearch.results.productImage)
    I.dontSee(onDemoSite.productSearch.results.no_results_msg);
  },

  searchInvalidProduct(){
    I.fillField(onDemoSite.productSearch.input, demo.invalid_keyword);
    I.click(onDemoSite.productSearch.submit);
    I.waitForVisible(onDemoSite.productSearch.results.productImage)
    I.see(onDemoSite.productSearch.results.no_results_msg);
  },

  selectProductAndViewResults(){
    I.click(onDemoSite.productList.menu);
    I.click(onDemoSite.productList.o_Fox);
    I.dontSee(onDemoSite.productList.no_items_found);
  },

  selectProductWithoutResults(){
    I.click(onDemoSite.productList.menu);
    I.click(onDemoSite.productList.o_Canon);
    I.see(onDemoSite.productList.no_items_found);
  },

  navigateToProductReviewsPage(){
    I.click(onDemoSite.productReview.link);
  },

  logOut(){
    I.click(onDemoSite.navigation.logout_CTA);
  }
}
