const onDemoSite = require('../locators/demoSiteLocators')
const { I } = inject();

module.exports = {

  confirmShippingInformation(){
    I.waitForVisible(onDemoSite.shippingDetails.pageHeader);
    I.see('Delivery Information');
    I.see('N/A');
    I.see('testerA testerA');
    I.see('123 Main St');
    I.see('Brooklyn, NY 11201');
    I.see('United States');
    I.see('Flat Rate');
    I.see('Best Way $5.00');
    I.click(onDemoSite.shippingDetails.continue_CTA);
  }
}
