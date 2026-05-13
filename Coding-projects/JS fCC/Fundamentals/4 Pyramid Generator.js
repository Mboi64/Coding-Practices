function pyramidGenerator(str, num, boolean) {
  let result = "\n";
  if (boolean) {
    for (let i = num; i > 0; i--) {
      result += " ".repeat(num - i) + str.repeat(2 * (i + 1) - 3) + "\n";
    }
  } else {
    for (let i = 0; i < num; i++) {
      result += " ".repeat(num - (i + 1)) + str.repeat(2 * (i + 1) - 1) + "\n";
    }
  }

  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
