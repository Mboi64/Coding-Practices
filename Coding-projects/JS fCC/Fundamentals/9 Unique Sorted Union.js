// should return a new array that contains unique values from the argument arrays,
// in the order they are first found in the arguments.
// For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].

function uniteUnique(arr1, arr2, ...args) {
  let result = [];
  for (const arr of arr1) {
    if (!result.includes(arr)) {
      result.push(arr);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!result.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  for (const arg of args) {
    for (const a of arg) {
      if (!result.includes(a)) {
        result.push(a);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
