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

  searchForValidProduct(){
    I.fillField(onDemoSite.productSearch.input, demo.valid_keyword);
    I.click(onDemoSite.productSearch.submit);
    I.waitForVisible(onDemoSite.productSearch.results.productImage)
    // I.see(onDemoSite.productSearch.results.productImage);
    // I.see(onDemoSite.productSearch.results.productName);
    // I.see(onDemoSite.productSearch.results.productPrice);
    // I.see(onDemoSite.productSearch.results.productCTA);
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

  logOut(){
    I.click(onDemoSite.navigation.logout_CTA);
  }
}
