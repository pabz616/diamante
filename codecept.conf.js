exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'diamante',
  plugins:{
    wdio:{
      enabled: 'true',
      services: ['selenium-standalone']
    },
    allure:{
      enabled: 'true'
    },
  }
  
}