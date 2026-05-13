/*let num = 5;

function factorialCalculator (num) {

let result = 1;


do {
  console.log(result *= num)
  num--;
} while (num < result)


const resultMsg = `Factorial of ${num} is ${result}`

return 
}

console.log(factorialCalculator(num))
*/
// first prototype

/*
let num = 5;

function factorialCalculator (num) {

let result = 1;
let count = num;


do {
  console.log(result *= count)
  count--;
} while (count < result && count != 0)


const resultMsg = `Factorial of ${num} is ${result}`

return resultMsg
}

console.log(factorialCalculator(num))
*/
//second prototype

//apparently both of these were wrong even though the second prototype work similarly to what the prompt wanted

let num = 5;

function factorialCalculator(num) {
  let result = 1;
  // I didn't know how to utilize do...while loop for this lab but this seems to be an easier result
  for (let i = 0; i < num; i++) {
    result *= num - i;
  }

  return result;
}

const factorial = factorialCalculator(num); // I forgot you can do this
const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);

// revist: wtf was i doing before

const num = 7;

const factorialCalculators = (num) => {
  let result = 1;
  for (let i = result; i <= num; i++) {
    result *= i;
  }
  return result;
};

const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
