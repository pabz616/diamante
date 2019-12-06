const onDemoSite = require('../locators/demoSiteLocators')
const { I } = inject();

module.exports = {
  selectProduct(){
    I.waitForVisible(onDemoSite.productList.pageHeader);
    I.see('Welcome to Tattvamassi')
    I.see('New Products For December')
    I.click(onDemoSite.productList.video3);
  },
  logOut(){
    I.click(onDemoSite.navigation.logout_CTA);
  }
}
