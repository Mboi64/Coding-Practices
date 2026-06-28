// should take three arguments: a string, a word to be replaced, and the word to replace it with
/*
 Preserve the case of the first character in the original word when you are replacing it.
 For example:
  - If you want to replace "Book" with the word "dog"...
  - it should be replaced as "Dog"
*/

// original final solution
const myReplace = (sentence, str, replace) => {
  const regex = new RegExp(`\\b${str}\\b`)
  if (/^[A-Z]/.test(str)){
    return sentence.replace(regex, replace.replace(/\b\w/, replace.charAt(0).toUpperCase()))
  }

  return sentence.replace(regex, replace.replace(/\b\w/, replace.charAt(0).toLowerCase()))
}



// Temporal solution based on original
const replace = (sentence, str, replace) => {
  return /^\b[A-Z]/.test(str)
    ? sentence.replace(
        new RegExp(`\\b${str}\\b`),
        replace.replace(/^\b\w/, replace.charAt(0).toUpperCase()),
      )
    : sentence.replace(
        new RegExp(`\\b${str}\\b`),
        replace.replace(/^\b\w/, replace.charAt(0).toLowerCase()),
      );
};

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// He is Sitting on the couch
console.log(myReplace("I think we should look up there", "up", "Down"));
// I think we should look down there
