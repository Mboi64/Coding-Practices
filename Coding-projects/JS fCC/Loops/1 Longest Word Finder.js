// function findLongestWordLength(str) {
//   const words = str.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > -words[i].length) {
//       return words[i].length;
//     } else if (words[i].length < -words[i].length) {
//       return -words[i].length;
//     }
//     console.log(words[i].length);
//   }
//   return words[i].length;
// }

// console.log(
//   findLongestWordLength(
//     "What if we try a super-long word such as otorhinolaryngology",
//   ),
// );

//new concept: the code with compare the first numbers and the last number, and for the number that is greater, that will get pushed into the next comparison

//concept is for the code to count each letter until it finds a number greater than 4 (doesn't make sense)

// new code
//new new concept: the code will go through each word length and update the length counter
function findLongestWordLength(str) {
  const words = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology",
  ),
);



// revisted: had to look back for a hint and saw split as a method and immediately waas able to solve it
const findLongestWordLengths = (str) => {
let space = str.split(" ")
let result = "";
for (let i = 0; i < space.length; i++) {
  if (space[i].length > result.length) {
    result = space[i]
  }
}
return result.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))