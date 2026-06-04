// When the character count reaches 50, any extra input should be automatically 
// trimmed and the text Character Count: 50/50 should be displayed in red.

const textInput = document.getElementById("text-input")
const count = document.getElementById("char-count")

const lengthCheck = (event) => {
  let textLength = event.target.value.length;
  let text = event.target.value;
  if (textLength >= 50) {
    count.classList.add("set-red");
    textInput.value = text.slice(0, 50);
    count.innerHTML = `Character Count: 50/50`;
    return;
  } else {
    count.classList.remove("set-red");
  }
  count.innerHTML = `Character Count: ${textLength}/50`;
};

textInput.addEventListener("input", lengthCheck);
 