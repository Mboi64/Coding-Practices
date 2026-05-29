// Return a new array containing only the objects from the collection that have all the key–value pairs present in the source object
// If no objects match all the key–value pairs from the source, the function should return an empty array

const whatIsInAName = (arr, obj) => {
  let objKeys = Object.keys(obj);
  return arr.filter((group) =>
    objKeys.every(
      (key) =>
        group[key] === obj[key] ||
        JSON.stringify(group).includes(JSON.stringify(obj).slice(1, -1)),
    ),
  );
};

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" },
  ),
);

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  }),
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 },
  ),
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 },
  ),
);

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
