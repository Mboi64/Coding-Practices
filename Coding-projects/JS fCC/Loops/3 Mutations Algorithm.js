/*let arr = [];

function mutation (arr){
const firstStr = arr[0].toLowerCase();
const secStr = arr[1].toLowerCase();
// finding a away to compare the words of the second listed array to have the same amount of words as the first listed array
for (const word of arr){
  console.log(word, arr[0])
  if ( word == secStr || !(word.includes(firstStr))){
    return true
  }
  else {
    return false
  }
}

}
*/

function mutation(arr) {
  const firstStr = arr[0].toLowerCase();
  const secStr = arr[1].toLowerCase();

  for (const word of secStr) {
    console.log(firstStr, secStr);
    if (firstStr.includes(word)) {
      // compared to the old vers. the program didn't need to worry about the full scope of the second word since each word would repeat, the program will check with the first word and check if each letter of the second word exist, if the loop goes through the whole thing, it will be true. if not it will return false
    } else {
      return false;
    }
  }
  return true;
}

console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["hello", "neo"]));

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["floor", "for"]));

// revist: It took me too long to relize .includes() was an important factor
// TLDR; tried solving it without using a single method besides .toLowerCase()
// at first I tried to do a double loop to check if each words were alike, but it left me in a paradox error
// (i had to refer back to old code, to realize .includes() is REALLY useful for finding strings INCLUDED in the string)

const mutation = (arr) => {
const first = arr[0].toLowerCase()
const second = arr[1].toLowerCase()
for (const char of second){
  if (!first.includes(char)){
    return false
  }
}

return true
}
