export function numbersDeclination (number: number, forms: string[]) {
  let lastDigit = number % 10;
  if (number > 10 && number < 20) { return forms[2]; }
  if (lastDigit > 1 && lastDigit < 5) { return forms[1]; }
  if (lastDigit == 1) { return forms[0]; }
  return forms[2];
}