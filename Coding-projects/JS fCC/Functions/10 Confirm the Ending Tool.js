// I didn't realize I could have a (-) slice for the strAgainst
function confirmEnding(strCheck, strAgainst) {;
  if (strCheck.slice(-strAgainst.length) === strAgainst){ // it slices takes the negative length of strAgainst to measure if the ending length match the strCheck
    return true;
  }
  else {
    return false;
  }
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

console.log(confirmEnding("action", "on"));















/* Original Idea
function confirmEnding(strCheck, strAgainst) {;
  const last2Words = strCheck.substring(strCheck.length - 2);
  if (strCheck.includes(strAgainst) && strAgainst.includes(last2Words)){
    return true;
  }
  else {
    return false;
  }
} The idea was that strCheck should have strAgainst in the sentence and strAgainst should have the last 2 words of strCheck
  */ 