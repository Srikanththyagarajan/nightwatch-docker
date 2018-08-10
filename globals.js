const chromedriver = require('chromedriver');
const allure = require('nightwatch-allure-adapter');

module.exports = {
  beforeEach(done) {
    chromedriver.start();
    done();
  },
  afterEach(done) {
    chromedriver.stop();
    done();
  },
  reporter: allure.write,
  waitForConditionTimeout: 10000,
};
