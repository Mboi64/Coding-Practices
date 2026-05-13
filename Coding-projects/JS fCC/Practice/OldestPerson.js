// Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.
function getOldest(people) {
  let result = [];
  if (people.length < 2) {
    return [people[0].name];
  }

  let first = people[1];
  for (const peoples of people) {
    if (peoples.age >= first.age) {
      result.push(peoples.name);
      first = peoples;
    }
  }
  people = result;
  return people;
}
console.log(getOldest([{ name: "Brenda", age: 40 }]));
console.log(
  getOldest([
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ]),
);
console.log(
  getOldest([
    { name: "Allison", age: 25 },
    { name: "Bill", age: 30 },
    { name: "Carol", age: 30 },
  ]),
);
console.log(
  getOldest([
    { name: "George", age: 50 },
    { name: "Shirley", age: 42 },
    { name: "Beth", age: 48 },
    { name: "Holly", age: 50 },
    { name: "Kevin", age: 44 },
    { name: "Frank", age: 47 },
    { name: "Zach", age: 50 },
    { name: "Jennifer", age: 43 },
  ]),
);
