// formula is similar to binary
// 16^n + n, ....., 16^4, 16^3, 16^2, 16^1, 16^0
// then add each value based on that index position 
function hexToDecimal(hex) {
  const letter = new Map([
    ["A", 10],
    ["B", 11],
    ["C", 12],
    ["D", 13],
    ["E", 14],
    ["F", 15],
  ]);
  let arr = [];
  for (let i = 0; i < hex.length; i++) {
    if (letter.has(hex[i])) {
      arr.push(letter.get(hex[i]) * Math.pow(16, hex.length - i - 1)); // checks if the current hex position is a letter from the Map Set
    } else {
      arr.push(Number(hex[i]) * Math.pow(16, hex.length - i - 1));
    }
  }
  return arr.reduce((arr, curr) => arr + curr, 0);
}

console.log(hexToDecimal("A")); // 10
console.log(hexToDecimal("15")); // 21
console.log(hexToDecimal("2E")); // 46
console.log(hexToDecimal("FF")); // 255
console.log(hexToDecimal("A3F")); // 2623
