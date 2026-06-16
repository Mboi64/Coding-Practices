const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  return `${caseInsensitiveFlag.checked ? "i" : ""}${globalFlag.checked ? "g" : ""}`;
}

function isFalse(text, regex) {
  const matches = text.match(regex);
  testResult.innerHTML = matches;
  stringToTest.innerHTML = text.replace(
    regex,
    `<span class="highlight">${matches[0]}</span>`,
  );
}

function isTrue(text, regex) {
  const matches = text.match(regex);
  testResult.innerHTML = matches.join(", ");
  const arrayOfMatches = Array.from(text.matchAll(regex));
  let result = "";
  let currentPosition = 0;
  arrayOfMatches.forEach((match) => {
    result += `${text.slice(currentPosition, match.index)}<span class="highlight">${match[0]}</span>`;
    currentPosition = match.index + match[0].length;
  });
  stringToTest.innerHTML = result + `${text.slice(currentPosition)}`;
}


testButton.addEventListener("click", () => {
  const text = stringToTest.textContent;
  const regex = new RegExp(regexPattern.value, getFlags());

  if (!regex.test(text)) {
    testResult.textContent = "no match";
    stringToTest.classList.remove("highlight");
    return;
  }

  if (globalFlag.checked === false) {
    isFalse(text, regex);
    return;
  }

  if (globalFlag.checked === true) {
    isTrue(text, regex);
    return;
  }
});
