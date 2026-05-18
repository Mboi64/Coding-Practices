// should return a string which represents a randomly generated password
function generatePassword(passwordLength) {
  let result = "";
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  for (let i = 0; i < passwordLength; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
  }
  return result;
}

const password = generatePassword(8);

console.log("Generated password: " + password);
