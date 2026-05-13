// Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array

const frankenSplice = (arr1, arr2, index) => {
  let result = [];
  if (arr2.length < 1) {
    for (const first of arr1) {
      result.push(first);
    }
  }

  for (const second of arr2) {
    if (arr2.indexOf(second) == index) {
      for (const first of arr1) {
        result.push(first);
      }
    }
    result.push(second);
  }
  return result;
};

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(
  frankenSplice(
    ["claw", "tentacle"],
    ["head", "shoulders", "knees", "toes"],
    2,
  ),
);
console.log(frankenSplice([1, 2, 3, 4], [], 0));
