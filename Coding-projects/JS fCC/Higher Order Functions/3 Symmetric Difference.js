/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Example:
Array A: ["diamond", "stick", "apple"]
Array B: ["stick", "emerald", "bread"]
Result: ["diamond", "apple", "emerald", "bread"]
*/

const diffArray = (a, b) => {
  const aFilter = a.filter((list) => b.every((word) => word !== list));
  const bFilter = b.filter((list) => a.every((word) => word !== list));

  let result = [];
  for (const list of aFilter) {
    result.push(list);
  }
  for (const list of bFilter) {
    result.push(list);
  }

  return result;
};

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"],
  ),
);

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"],
  ),
);

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));

console.log(
  diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]),
);

console.log(
  diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]),
);

console.log(diffArray([], ["apple", "banana"]));

console.log(diffArray(["apple", "banana"], []));

console.log(diffArray([], []));
