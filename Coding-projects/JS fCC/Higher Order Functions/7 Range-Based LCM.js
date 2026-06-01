//  number should be LCM for all the numbers from the range given in the array

// Borrowed LCM (Lowest Common Multiple) and GCM (Greatest Common Multiple) algorithm
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let range = [];

  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  let value = range.reduce(
    (result, currentValue) => lcm(result, currentValue),
    1,
  );

  return value;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([23, 18]));






/*
ORIGINAL SOLUTION
Main issues: 
  - it takes a long time for numbers or range greater than 10 
  - the program is very cluttered

Least Common Multiple Algorithm for 2 values in an array
function lowestCommonMultiple(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  let factors = [];

  for (let i = 1; i <= max; i++) {
    factors.push(i);
  }

  const maxMultiples = factors.map((num) => num * max);
  const minMultiples = factors.map((num) => num * min);
  const filteredMaxMultiples = maxMultiples.filter((maxNum) =>
    minMultiples.some((minNum) => maxNum === minNum),
  );

  return Math.min(...filteredMaxMultiples);
}

function smallestCommons(arr){
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let range = []

  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  let currentValue = lowestCommonMultiple(range[0], range[1]);
  for (let i = 2; i < range.length; i++){
    currentValue = lowestCommonMultiple(currentValue, range[i])
  }

  return currentValue
}

*/
