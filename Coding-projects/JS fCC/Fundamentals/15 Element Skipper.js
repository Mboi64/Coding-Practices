// function that accepts an array (arr) and a function (func) as arguments.

// I did not know this was technically a higher-order function :0
const dropElements = (arr, func) => {
  let result = Array.from(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      for (let j = i; j < arr.length; j++) {
        result.push(arr[j]);
      }
      i += 2;
    }
  }
  return result;
};

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
);

console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
);

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
);

console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
);

console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
);

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
);
