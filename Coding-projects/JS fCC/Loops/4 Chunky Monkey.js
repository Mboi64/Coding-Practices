function chunkArrayInGroups(arr, num) {
  let x = [];

  for (let i = 0; i < arr.length; i += num) {
    x.push(arr.slice(i, i + num));
  }
  return x;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

// revisted: past me smart as hell
// I was able to get the brackets to work as they were suppose to, but the values would not push
