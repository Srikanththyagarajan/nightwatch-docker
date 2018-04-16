module.exports = {
  '@tags': ['Landing'],
  beforeEach(browser) {
    browser.url(`${browser.launch_url}`);
  },

  afterEach(browser, done) {
    browser.end(done);
  },

  'landing page is displayed': (browser) => {
    browser.page.landing()
      .waitForElementVisible('@page', 4000);
  },
};
