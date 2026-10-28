const caseRule1 = /[a-z]+/;
const caseRule2 = /[A-Z]+/;
const numRule1 = /[0-9]+/;
const specialRule1 = /[!|@|#|$|%|^|&|*]+/;

function checkStrength(password) {
  let count = 0;
  if (password.length >= 8) {
    count++;
  } // if

  if (caseRule2.test(password) && caseRule1.test(password)) {
    count++;
  } // if

  if (numRule1.test(password)) {
    count++;
  } // if

  if (specialRule1.test(password)) {
    count++;
  } // if

  if (count == 4) {
    return "strong";
  } else if (count == 2 || count == 3) {
    return "medium";
  } // if

  return "weak";
}

console.log(checkStrength("123456"));
console.log(checkStrength("pass!!!"));
console.log(checkStrength("Qwerty"));
console.log(checkStrength("PASSWORD"));
console.log(checkStrength("PASSWORD!"));
console.log(checkStrength("S3cur3P@ssw0rd"));
console.log(checkStrength("C0d3&Fun!"));
