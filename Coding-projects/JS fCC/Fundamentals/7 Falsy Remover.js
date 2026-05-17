// should return a new array that contains the same elements as the array passed in as argument with the falsy elements removed.

function bouncer(arr) {
  let result = [];
  for (const items of arr) {
    if (items) {
      result.push(items);
    }
  }
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([]));

// took me an embarassingly long mintue to find the solution (much simipler than I initially thought)
