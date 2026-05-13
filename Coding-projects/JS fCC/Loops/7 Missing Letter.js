function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let current = str.charCodeAt(i);
    let next = str.charCodeAt(i + 1);

    if (!(current + 1 == next)) {
      return String.fromCharCode(next - 1);
    }
  }
}

console.log(fearNotLetter("abce"));

// revisited: did not care much abt how to solve it since it was gonna be the same result
