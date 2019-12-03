exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: false
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'diamante'
}