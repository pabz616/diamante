const demo = require('../test-data/environment')
const onHomePage = require('../pages/homePage')
const onProductDetailsPage = require('../pages/detailsPage')
const onCartPage = require('../pages/cartPage')
const onLoginPage = require('../pages/loginPage')
const onShippingDetailsPage = require('../pages/shippingPage')
const onBillingDetailsPage = require('../pages/billingPage')
const onConfirmationPage = require('../pages/confirmationPage')
const onSuccessPage = require('../pages/successPage')


Feature('5 Elements Demo Site');

Scenario('Test Checkout Flow', (I) => {
  I.amOnPage(demo.siteUrl);
  onHomePage.selectProduct(I);
  onProductDetailsPage.addToCart(I);
  onCartPage.proceedToCheckout(I);
  onLoginPage.submitLogin(I);
  onShippingDetailsPage.confirmShippingInformation(I);
  //
  onBillingDetailsPage.confirmBillingInformation(I);
  onBillingDetailsPage.selectPaymentMethod(I);
  //
  onConfirmationPage.verifyDeliveryDetails(I);
  onConfirmationPage.verifyProductOrdered(I);
  onConfirmationPage.verifyShippingDetails(I);
  onConfirmationPage.verifyPaymentMethod(I);
  onConfirmationPage.submitOrder(I);
  //
  onSuccessPage.completeOrder(I);
  //
  onHomePage.logOut(I);
});
