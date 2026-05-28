// Returns a new array excluding all elements from the first argument that match any of the subsequent arguments

const destroyer = (arr, ...args) =>
  arr.filter((element) => args.every((a) => a !== element));


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

console.log(destroyer([2, 3, 2, 3], 2, 3));

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan",
  ),
);
