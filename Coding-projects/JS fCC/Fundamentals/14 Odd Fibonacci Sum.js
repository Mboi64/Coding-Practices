// function should return the sum of all odd Fibonacci numbers that are less than or equal to the given number.

// nonFormula example (I had to get alittle external help to solve it this way)
const sumFib = (num) => {
  let result = 0;
  let next = 1;
  let current = 1;
  
  for (let i = 0; i < num; i++) {
    if (current % 2 !== 0 && current <= num) {
      result += current;
    }
    const sum = current + next;
    current = next;
    next = sum;
  }

  return result;
};

// explicit formula of fibonacci sequence
const sumFibs = (num) => {
  let group = [];
  let result = 0;
  for (let i = 0; i <= num; i++) {
    group.push(
      Math.floor(
        (Math.pow(1.618034, i) - Math.pow(1 - 1.618034, i)) / Math.sqrt(5),
      ),
    );
  }

  for (const odd of group) {
    if (odd % 2 !== 0 && odd <= num) {
      result += odd;
    }
  }
  return result;
};

console.log(sumFibs(4));
console.log(sumFib(1000));
console.log(sumFibs(4000000));
console.log(sumFib(75024));
console.log(sumFibs(75025));
