export const math = (a, b, sign) => {
  return sign === "+"
    ? a + b
    : sign === "-"
    ? a - b
    : sign === "*"
    ? (a * b).toFixed(2)
    : sign === "^"
    ? a ** b
    : (a / b).toFixed(2);
};

export const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

export const removeSpaces = (num) => num.toString().replace(/\s/g, "");
