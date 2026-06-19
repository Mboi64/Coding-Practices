/* 
Should return the string in spinal case format
Before: ProductLanding page
After: product-landing-page
*/

// Though it is completed, I feel like I could have better use of Regex
const spinalCase = (str) => {
  let result = "";
  let text = str.replace(/[_\s]/g, "-");
  for (let i = 0; i < text.length; i++) {
    if (i !== 0 && /[A-Z]/.test(text[i]) && text[i - 1] !== "-") {
      result += "-" + text[i];
    } else {
      result += text[i];
    }
  }
  return result.toLowerCase();
};

console.log(spinalCase("This Is Spinal Tap"));

console.log(spinalCase("thisIsSpinalTap"));

console.log(spinalCase("The_Andy_Griffith_Show"));

console.log(spinalCase("Teletubbies say Eh-oh"));

console.log(spinalCase("AllThe-small Things"));

// Looking up the answer
const spinal = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[_\s]/g, "-")
    .toLowerCase();

// I struggled with understanding capture groups and how the "$#" is important
// $n represent a n position of capture group
// so $1 is capture 1 group, $2 is capture 2 group
// in this function, if capture 1 is lower case next to a capture 2 that is Upper Case...
// add a dash inbetween each
