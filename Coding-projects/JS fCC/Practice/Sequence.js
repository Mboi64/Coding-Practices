// example, given 5, return "12345"
function sequence(n) {
  if (n == 1) {
    return "1";
  }
  return `${sequence(n-1)}${n}`;
}
console.log(sequence(5));
console.log(sequence(10))
console.log(sequence(1));