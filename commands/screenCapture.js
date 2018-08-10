exports.command = function screenCapture(browser) {
  const d = new Date();
  browser.saveScreenshot(`test/screenshot/${d}.png`);
};
