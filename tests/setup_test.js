let demo = require('../test-data/environment')
const onLogin = require('../pages/landingPage')

Feature('5 Elements Demo Site');

Scenario('Test Checkout Flow', (I) => {
  I.amOnPage(demo.siteUrl);
  onLogin.submitLogin(I);
});
