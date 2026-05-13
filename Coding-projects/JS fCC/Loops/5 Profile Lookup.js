let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let result = 0;

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      // contacts[i].firstName is the correct name
      if (!contacts[i].hasOwnProperty(prop)) {
        result = "No such property";
      } else {
        result = contacts[i][prop];
      }
    }
  }

  if (result == 0) {
    result = "No such contact";
  }

  return result;
}

console.log(lookUpProfile("bob", "address"));

// revisted: it took less time than how I did it before, and its less complicated looking
const lookUpProfile = (name, prop) => {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
};
