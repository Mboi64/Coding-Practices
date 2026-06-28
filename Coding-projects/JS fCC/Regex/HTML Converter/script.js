const markdownInput = document.getElementById("markdown-input");
const output = document.getElementById("html-output");
const preview = document.getElementById("preview");

// had to search up the answers of each regex to have it distingish from each other
const markdown = {
  headings: /^(#{1,6})\s(.+)$/gm,
  bold: /(?:\*\*|__)(.+?)(?:\*\*|__)/g,
  italic: /(?<![*_])(?:\*|_)(?![*_])(.+?)(?<![*_])(?:\*|_)(?![*_])/g,
  altText: /!\[([^\]]*)\]\(([^)]*)\)/g,
  linkText: /(?<!!)\[([^\]]*)\]\(([^)]*)\)/g,
  quote: /(?<!.+)>\s(.*)/g,
};

// I have a better understanding of how replace works and the purpose of its first parameter
const setHeading = (input) => {
  if (markdown.headings.test(input)) {
    return input.replace(
      markdown.headings,
      (_, hashes, text) => `<h${hashes.length}>${text}</h${hashes.length}>`,
    );
  }
  return input;
};

// Bold and Italics were the ones I had the most trouble with
/*
Problem 1 (main): distingishing between bold and italic regex
Solution: utilizaing more lookahead and lookbehind assentions + better use of capture groups

Problem 2: the "_" character not working for one or the other
Solution: similar to the first solution

Problem 3: nested bold/italic (**hello *world***)
Solution (took the longest): I had to swap the function calls in the convertMarkdown() 
*/
const setBold = (input) => {
  if (markdown.bold.test(input)) {
    return input.replace(markdown.bold, `<strong>$1</strong>`);
  }
  return input;
};

const setItalic = (input) => {
  if (markdown.italic.test(input)) {
    return input.replace(markdown.italic, `<em>$1</em>`);
  }
  return input;
};

// Though this was minor, I had issues with comparing between altImg and linkText
const setImage = (input) => {
  if (markdown.altText.test(input)) {
    return input.replace(markdown.altText, `<img alt="$1" src="$2">`);
  }
  return input;
};

const setLinkText = (input) => {
  if (markdown.linkText.test(input)) {
    return input.replace(markdown.linkText, `<a href="$2">$1</a>`);
  }
  return input;
};

const setQuote = (input) => {
  if (markdown.quote.test(input)) {
    return input.replace(markdown.quote, `<blockquote>$1</blockquote>`);
  }
  return input;
};

// I had to search for a different solution to have the input to accept each changes from the given function
// rather than the function doing majority of the work with "output.innerText" recieving the replacement.
// The though process was so that convertMarkdown() would be heavily simplified so the higher functions would
// recieve majority of the task.

function convertMarkdown() {
  let input = markdownInput.value;

  input = setHeading(input);
  input = setBold(input);
  input = setItalic(input);
  input = setImage(input);
  input = setLinkText(input);
  input = setQuote(input);

  output.innerText = input;
  return output.innerText;
}

markdownInput.addEventListener(
  "input",
  () => (preview.innerHTML = convertMarkdown()),
);
