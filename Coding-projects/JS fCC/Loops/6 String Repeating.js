function repeatStringNumTimes(str, num) {
  let result = "";

  for (let i = 0; i < num; i++) {
    result += str;
  }

  /*Solved the solution to 9 and 10
if (result <= 0) {
    result = ""
  }
return result
*/
  // not needed when the result is alr an empty string
}

console.log(repeatStringNumTimes("a", 0));

// revist: took me less than a minute
const repeatStringNumTimes = (str, num) => {
  let result = "";
  for (let i = 0; i < num; i++) result += str;
  return result;
};
