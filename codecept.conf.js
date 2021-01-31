exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  include: {
    mainPage: './pages/mainPage.js',
    flightPage: './pages/reservationFlightPage.js',
    resultPage: './pages/resultPage.js',
    contactPage: './pages/contactPage.js',
    paymentPage: './pages/paymentPage.js',
    orderListPage: './pages/orderListPage.js',
    loginPage: './pages/loginPage.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: 'test/*_test.js',
  name: 'automation-web-codeceptjs'
}