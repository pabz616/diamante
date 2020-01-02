const demo = require('../test-data/environment')
const onHomePage = require('../pages/homePage')
const onProductDetailsPage = require('../pages/detailsPage')
const onCartPage = require('../pages/cartPage')
const onLoginPage = require('../pages/loginPage')
const onShippingDetailsPage = require('../pages/shippingPage')
const onBillingDetailsPage = require('../pages/billingPage')
const onConfirmationPage = require('../pages/confirmationPage')
const onSuccessPage = require('../pages/successPage')

Feature('5 Elements Demo Site - Best Sellers List');

Before( (I) => {
    I.amOnPage(demo.siteUrl);
  });

Scenario('Test Checkout Flow from Best Sellers List', (I) => {
    onHomePage.selectFromBestSellersList(I);
    onProductDetailsPage.addBestSellerItemToCart(I);
    onCartPage.proceedToCheckout(I);
    onLoginPage.submitLogin(I);
    onShippingDetailsPage.confirmShippingInformation(I);
    onBillingDetailsPage.confirmBillingInformation(I);
    onBillingDetailsPage.selectPaymentMethod(I);
    onConfirmationPage.submitOrder(I);
    onSuccessPage.completeOrder(I);
    onHomePage.logOut(I);
});
