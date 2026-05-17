// The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.

function titleCase(str) {
  const revised = str.toLowerCase();
  let result = "";
  result += revised[0].toUpperCase();
  for (let i = 1; i < revised.length; i++) {
    result += revised[i];
    if (revised[i] === " ") {
      result += revised[i + 1].toUpperCase();
      i++;
    }
  }
  return result;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
