function maskEmail(email) {
  const starBegin = email.indexOf(email[1]);
  const starEnd = email.indexOf("@") - 1;
  const hidden = email.slice(starBegin, starEnd);
  const change = email.replace(
    hidden,
    "*".repeat(starBegin - 1 + (starEnd - 1)),
  );
  return change;
}

let email = "coochieman@email.com";

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
