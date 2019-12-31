const demo = require('../test-data/environment')
const onApplitoolsSite = require('../locators/demoSiteLocators')


Feature('5 Elements Applitools Demo');

Before( (I) => {
    I.amOnPage(demo.siteUrl);
});

Scenario('Check Demo Site UI', async (I) => {
    await I.eyeCheck('Homepage');
    I.see('Hello World');
    I.see(123456);
    I.seeElementInDOM(onApplitoolsSite.applitools_landingPage.cta);
    I.click(onApplitoolsSite.applitools_landingPage.cta);
    I.see('You successfully clicked the button!');
});
