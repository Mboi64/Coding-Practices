let str = [];

function reverseString(str) {
  let change = str.split("");
  let develop = change.reverse();
  let upload = develop.join("");
  return upload;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
