const onDemoSite = require('../locators/demoSiteLocators')
const { I } = inject();

module.exports = {

  completeOrder(){
    I.waitForVisible(onDemoSite.successDetails.pageHeader);
    I.see('Your Order Has Been Processed!');
    I.see('Thanks for shopping with us online!');
    I.click(onDemoSite.successDetails.continue_CTA);
  }
}
