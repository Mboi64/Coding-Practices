// This function takes the first or cluster of consonants until it hits a vowel
function consonant(str) {
  let cluster = "";
  for (let i = 0; i < str.length; i++) {
    if (/^[aeiou]+/.test(str[i])) {
      i = str.length;
    } else {
      cluster += str[i];
    }
  }
  return cluster;
}

function translatePigLatin(str) {
  if (/^[^aeiou]+/.test(str)) {
    return str.replace(/^[^aeiou]+/, "") + `${consonant(str)}ay`;
  }

  if (/^[aeiou]/.test(str)) {
    return str + "way";
  }
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));

// apparently I could have utilize the match method to not need a seperate function

// after a few minutes here is what I got:
function translatePigLat(str) {
  const cluster = str.match(/^[^aeiou]+/);
  return cluster
    ? str.replace(/^[^aeiou]+/, "") + `${cluster[0]}ay`
    : str + "way";
}
// The match locates at least one or more nonvowels in the beginning of the word
// this is a way easier way of finding consonants than utlizing a loop



// cool thing is I can simplify it to a single like
// but It would be more confusing
const translate = (str) =>
  str.match(/^[^aeiou]+/)
    ? str.replace(/^[^aeiou]+/, "") + `${str.match(/^[^aeiou]+/)[0]}ay`
    : str + "way";
