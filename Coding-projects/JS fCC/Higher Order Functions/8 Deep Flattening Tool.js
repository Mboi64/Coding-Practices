// Should flatten the nested array, accounting for varying levels of nesting without using Array.prototype.flat() or Array.prototype.flatMap()

// Though I did not learn much about recursion, I think I got the basic understanding of how it works
// I hope I can get better at implying it to future codes
function steamrollArray(arr) {
  let result = [];
  arr.forEach((value) => {
    if (Array.isArray(value)) {
      result.push(...steamrollArray(value));
    } else {
      result.push(value);
    }
  });

  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

/*
original concept
function steamrollArray(arr) {
  let result = [];
  arr.forEach((value) => {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (Array.isArray(value[i])) {
          result.push(...value[i]);
        } else {
          result.push(value[i]);
        }
      }
    } else {
      result.push(value);
    }
  });

  return result;
}
*/
