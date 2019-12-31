exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://jsonplaceholder.typicode.com',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
    WebDriver: {
      url: 'http://localhost',
      smartWait: 5000,
      timeouts:{
        "script": 60000,
        "page load": 10000
      },
      browser: 'chrome',
      restart: 'false',
      desiredCapabilities:{
        chromeOptions:{
          args:[ "--headless", "--disable-gpu", "--window-size=1200,1000", "--no-sandbox" ]
        }
      }
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
    ApplitoolsHelper: {
      require: 'codeceptjs-applitoolshelper',
      applitoolsKey: '#'
    }
  }  
}