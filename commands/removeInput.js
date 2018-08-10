exports.command = function removeInput(browser, selector) {
  browser.getValue(selector, (result) => {
    Array.from(result.value).forEach(() => {
      browser.setValue(selector, '\u0008');
    });
  });

  return this;
};
