const onDemoSite = require('../locators/demoSiteLocators')
const { I } = inject();

module.exports = {
  proceedToCheckout(){
    I.waitForVisible(onDemoSite.cart.pageHeader);
    //I.see(onDemoSite.cart.productImage);
    //I.see(onDemoSite.cart.productTitle);
    //I.see(onDemoSite.cart.productPrice);
    I.click(onDemoSite.cart.checkout_CTA); 
  }

}
