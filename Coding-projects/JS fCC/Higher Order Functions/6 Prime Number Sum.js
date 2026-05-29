// Returns the sum of all prime numbers less than or equal to the provided number

// finding prime numbers algorithmn
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const sumPrimes = (num) => {
  if (num < 2 && num !== 1) {
    return num;
  }
  let primeSum = [];
  for (let i = num; i > 0; i--) {
    if (i !== 1) {
      primeSum.unshift(i);
    }
  }

  return primeSum.filter(isPrime).reduce((result, cur) => result + cur);
};

console.log(sumPrimes(977));
console.log(sumPrimes(10));
console.log(sumPrimes(2));
console.log(sumPrimes(0));



/* 
original algorithmn: more hard coded, struggled to find out a proper way to address every prime number
    function isPrime(number){
    if (number % 2 === 0 && number !== 2){
        return false
    } else if (number % 3 === 0 && number !== 3){
        return false
    } else if (number % 5 === 0 && number !== 5){
        return false
    } else if (number % 7 === 0 && number !== 7){
        return false
    }
    return true

    }
*/
