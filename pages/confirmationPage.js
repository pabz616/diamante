const onDemoSite = require('../locators/demoSiteLocators')
const { I } = inject();

module.exports = {
  
  verifyDeliveryDetails(){
    I.waitForVisible(onDemoSite.paymentDetails.pageHeader);
    I.see('Order Confirmation')
    I.see('Delivery Information');
    I.see('N/A');
    I.see('testerA testerA');
    I.see('123 Main St');
    I.see('Brooklyn, NY 11201');
    I.see('United States');
  },

  verifyProductOrdered(){
    I.see('1 x Speed');
    I.see('$39.99')
  },

  verifyShippingDetails(){
    I.see('Flat Rate (Best Way)')
  },

  verifyBillingDetails(){
    I.see('Delivery Information');
    I.see('N/A');
    I.see('testerA testerA');
    I.see('123 Main St');
    I.see('Brooklyn, NY 11201');
    I.see('United States');
  },

  verifyPaymentMethod(){
    I.see('Cash on Delivery')
  },

  submitOrder(){
    I.click(onDemoSite.confirmationDetails.confirm_CTA)
  }

}
