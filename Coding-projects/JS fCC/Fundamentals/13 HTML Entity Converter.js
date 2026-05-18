// function should return a new string by converting special characters in the argument string to their corresponding HTML entities.

const convertHTML = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "&":
        result += "&amp;";
        break;
      case "<":
        result += "&lt;";
        break;
      case ">":
        result += "&gt;";
        break;
      case '"':
        result += "&quot;";
        break;
      case "\'":
        result += "&apos;";
        break;
      default:
        result += str[i];
    }
  }
  return result;
};

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"))