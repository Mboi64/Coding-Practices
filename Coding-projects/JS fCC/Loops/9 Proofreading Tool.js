//  Returns true if the word reads the same forwards and backwards (case-insensitive)
function isPalindrome(word) {
  const str = word.toLowerCase();
  let newWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newWord += str[i];
  }
  if (newWord === str) {
    return true;
  }
  return false;
}

// Returns an array of indices of words that are not palindromes
function findPalindromeBreaks(words) {
  let index = [];
  if (words.length < 1) {
    return index;
  }

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      index.push(i);
    }
  }
  return index;
}

// Returns an array of all indices where a sequence of phraseLength consecutive words appears more than once in the array — including the index of the first occurrence
function findRepeatedPhrases(words, phraseLength) {
  let indices = [];
  if (phraseLength >= words) {
    return indices;
  }

  for (let i = 0; i < words.length; i++) {
    let currentPhrase = words[i] + words[i + phraseLength - 1];
    for (let j = 0; j < words.length - (phraseLength - 1); j++) {
      let next = words[j] + words[j + phraseLength - 1];
      if (i !== j && currentPhrase === next) {
        indices.push(i);
      }
    }
  }
  return indices;
}

// Process each element of texts (each an array of words) and return an array of objects
function analyzeTexts(texts, phraseLength) {
  let analysis = [];
  if (texts == "") {
    return analysis;
  }
  for (const words of texts) {
    analysis.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words),
    });
  }
  return analysis;
}
let text = [
  ["the", "cat", "sat", "on", "the", "cat", "sat"],
  ["we", "will", "we", "will", "go", "now", "go"],
  ["red", "blue", "red", "blue", "green", "blue", "red"],
  ["run", "fast", "run", "fast", "run", "slow", "run"],
  ["step", "on", "no", "pets", "step", "on", "no", "pets"],
];

console.log(analyzeTexts(text, 2));
