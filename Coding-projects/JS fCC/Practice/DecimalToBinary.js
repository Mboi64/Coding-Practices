function toBinary(decimal) {
  if (decimal == 0) {
    return "";
  }
  toBinary(Math.floor(decimal / 2))
  let remainder = Math.floor(decimal % 2);
  return `${toBinary(Math.floor(decimal / 2))}${remainder}`;
}

console.log(toBinary(5))
console.log(toBinary(12))
console.log(toBinary(50))
console.log(toBinary(90))