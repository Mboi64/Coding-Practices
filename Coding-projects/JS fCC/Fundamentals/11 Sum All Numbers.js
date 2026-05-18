// sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them

const sumAll = (arr) => {
  let result = 0;
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      result += i;
    }
  } else {
    for (let i = arr[0]; i >= arr[1]; i--) {
      result += i;
    }
  }

  return result;
};

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
