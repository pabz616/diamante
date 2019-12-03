exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      browser: 'chrome',
      path: '/',
      host: '127.0.0.1',
      port: 9515,
      restart: false,
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--window-size=1200,1000", "--no-sandbox" ]
        }
      }
    },
  }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'diamante'
}