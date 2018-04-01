const unitCalc = (operand1, operand2, operator) => {
  let operand1Value = operand1;
  let operand1Unit;
  if (typeof operand1 === 'string') {
    operand1Value = parseFloat(operand1);
    operand1Unit = operand1.replace(operand1Value, '');
  }

  let operand2Value = operand2;
  let operand2Unit;
  if (typeof operand2 === 'string') {
    operand2Value = parseFloat(operand2);
    operand2Unit = operand2.replace(operand2Value, '');
  }

  let value = window.eval(operand1Value + operator + operand2Value); // eslint-disable-line no-eval
  value = value + (operand1Unit || operand2Unit);

  return value;
};

const clipPath = clipOffset => {
  return `
  clip-path: polygon(
    0% ${clipOffset[0]}%,
    100% ${clipOffset[1]}%,
    100% ${clipOffset[2]}%,
    0% ${clipOffset[3]}%
  );
  `;
};

const mobileClipPath = clipOffset => {
  return `
    clip-path: polygon(
      0% ${clipOffset[0] * 0.3}%,
      100% ${clipOffset[1] * 0.3}%,
      100% ${100 - (100 - clipOffset[2]) * 0.3}%,
      0% ${100 - (100 - clipOffset[3]) * 0.3}%
    );
  `;
};

export { unitCalc, clipPath, mobileClipPath };
