// function should return a 2d array, where each inner array has two strings inside, the first string is one base from the input, and the second string the paired base.

const pairElement = (str) => {
  let result = Array.from(str.length); // I wanted to try out a different way of setting up the array
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        result.push([str[i], "T"]);
        break;
      case "T":
        result.push([str[i], "A"]);
        break;
      case "C":
        result.push([str[i], "G"]);
        break;
      case "G":
        result.push([str[i], "C"]);
        break;
    }
  }
  return result;
};

console.log(pairElement("ATCGA"));
console.log();
console.log(pairElement("TTGAG"));
console.log();
console.log(pairElement("CTCTA"));


// const pairElement = (str) => {
//   let result = []

//   for (let i = 0; i < str.length; i++){
//     switch (str[i]){
//       case "A":
//         result.push([str[i], "T"])
//         break;
//       case "T":
//         result.push([str[i], "A"])
//         break;
//       case "C":
//         result.push([str[i], "G"])
//         break;
//       case "G":
//         result.push([str[i], "C"])
//         break;
//     }
//   }

//   return result
// }
