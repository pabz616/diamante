//TESTING THAT CODECEPT IS SET UP SUCCESSFULLY
const {siteUrl} = require('../test-data/environment')
Feature('My First Test');

Scenario('test something', (I) => {
  I.amOnPage(siteUrl);
  I.see('GitHub');
});
