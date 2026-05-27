// Should return the first instance of the lowest index compared to the argument number

const getIndexToIns = (arr, num) => {
  // if the array is empty
  if (arr.length === 0) {
    return 0;
  }

  let sortedArray = arr.sort((a, b) => a - b);
  let foundIndex = sortedArray.findIndex((curr) => !(curr < num)); // returns the index of the first element in an array that satisfies a provided testing function

  // if there are no values to compare
  if (foundIndex === -1 && sortedArray.length > 1) {
    return sortedArray.length;
  }

  return foundIndex;
};

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([3, 10, 5], 11));
console.log(getIndexToIns([], 5));
