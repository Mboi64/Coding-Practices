// If the property with the name equal to the second argument has a truthy value in all the objects of the array, and return true if it has, and false otherwise.

function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre] ? true : false );
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot",
  ),
);

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role",
  ),
);


console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "id",
  ),
);
