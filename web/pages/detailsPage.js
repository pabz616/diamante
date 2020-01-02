const onDemoSite = require('../locators/demoSiteLocators')
const { I } = inject();

module.exports = {
  addToCart(){
    I.waitForVisible(onDemoSite.productDetails.productTitle);
    I.see('Speed');
    I.see('$39.99');
    I.click(onDemoSite.productDetails.addToCart_CTA);
  },

  addBestSellerItemToCart(){
    I.waitForVisible(onDemoSite.productDetails.productTitle);
    I.seeElementInDOM(onDemoSite.productDetails.productTitle);
    I.seeElementInDOM(onDemoSite.productDetails.productImage_bestseller);
    I.seeElementInDOM(onDemoSite.productDetails.productPrice);
    I.click(onDemoSite.productDetails.addToCart_CTA);
  }
  
}
