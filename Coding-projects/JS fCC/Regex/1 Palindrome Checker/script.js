const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

const reverseString = (str) => str.split("").reverse().join("");

const isPalindrome = (alpha) =>
  alpha.toLowerCase() === reverseString(alpha).toLowerCase();

function palindromeCheck() {
  const text = input.value;
  if (text === "") {
    alert("Please input a value");
    return;
  }
  const alphanumeric = text.replace(nonAlpha, "");

  result.textContent = `${text} ${
    isPalindrome(alphanumeric) ? "is" : "is not"
  } a Palindrome`;
  result.style.display = "block";
}


const nonAlpha = /[^a-zA-Z0-9]/gi;

btn.addEventListener("click", palindromeCheck);
input.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        palindromeCheck()
    }
})

