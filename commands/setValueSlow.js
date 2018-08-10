exports.command = function setValueSlow(selector, value, using) {
  const valueArray = Array.from(value);

  this.elements(using || 'css selector', selector, (elems) => {
    elems.value.forEach((element) => {
      valueArray.forEach((char) => {
        this.elementIdValue(element.ELEMENT, char);
      });
    });
  });

  return this;
};
