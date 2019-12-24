exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'http://localhost',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'mobile'
}