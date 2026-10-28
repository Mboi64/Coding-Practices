function toDecimal(binary) {
  let arr = []
  for (let i = binary.length - 1; i >= 0; i--) {
      arr.push(Number(binary[binary.length - i - 1]) * Math.pow(2, i));
  } // for
  const result = arr.reduce((a, curr) => a + curr, 0) // adds up all value in array 
  return result;
}

console.log(toDecimal("101")) // 5
console.log(toDecimal("1010")) // 10
console.log(toDecimal("10010")) // 18
console.log(toDecimal("1010101")) // 85