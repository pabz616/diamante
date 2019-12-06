const onDemoSite = require('../locators/demoSiteLocators')
const demo = require('../test-data/environment')
const { I } = inject();

module.exports = {
  submitLogin(){
    I.waitForVisible(onDemoSite.loginForm.pageHeader);
    I.fillField(onDemoSite.loginForm.usn, demo.email_address);
    I.fillField(onDemoSite.loginForm.pwd, demo.password);
    I.click(onDemoSite.loginForm.submit);
  }
}
