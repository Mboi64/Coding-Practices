/* 
Array.from() and [...text] both convert things into arrays, like Nodelists
- Array.from() is best when converting like array-like things like (most) objects that had num as properties
- [...text] is best for concise and readablity (it iterates over each items)
- Both essentially work the same by [...text] does not have much maping features

Objects does not work well with these methods; the only instance something like Array.from() would work is if 
the properties of the object had numbered properties and a set length
- To make an array from an object is by using:
  - Object.keys (array of named properties)
  - Object.values (array of values)
  - Object.entries (array of an array of each object key next to its value)
*/

const form = document.getElementById("form");
const submit = document.getElementById("submit-btn");
const text = document.querySelector(".completion-popup");
const para = document.getElementById("text");

// Fieldset/element of Complaints (checkbox)
const otherComplaint = document.getElementById("other-complaint");
const complaintsGroup = document.querySelectorAll('input[type="checkbox"]');

// textarea value of Complaints (textbox)
const complaintsDetail = document.getElementById("complaint-description");

// Fieldset/element of Solutions (radio)
const otherSolution = document.getElementById("other-solution");
const solutionGroup = document.querySelectorAll('input[type="radio"]');

// textarea value of Solution (textbox)
const solutionDetail = document.getElementById("solution-description");

const elementInputs = {
  name: document.getElementById("full-name"),
  email: document.getElementById("email"),
  order: document.getElementById("order-no"),
  product: document.getElementById("product-code"),
  quantity: document.getElementById("quantity"),
};

function validateForm() {
  // Regex for specific qualifications
  const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  const orderNumRegex = /^2024\d{6}/;
  const productCodeRegex = /^[a-z]{2}\d{2}-[a-z]+\d{3}-[a-z]{2}\d/i;

  return {
    "full-name": elementInputs.name.value !== "",
    email: emailRegex.test(elementInputs.email.value),
    "order-no": orderNumRegex.test(elementInputs.order.value),
    "product-code": productCodeRegex.test(elementInputs.product.value),
    quantity: elementInputs.quantity.value > 0,
    "complaints-group": [...complaintsGroup].some(
      (complaints) => complaints.checked,
    ),
    "complaint-description":
      !otherComplaint.checked || complaintsDetail.value.length >= 20,
    "solutions-group": [...solutionGroup].some(
      (solutions) => solutions.checked,
    ),
    "solution-description":
      !otherSolution.checked || solutionDetail.value.length >= 20,
  };
}

function isValid(validateForm) {
  // I learned Boolean and it works as a legit "boolean" function
  handleCheck(validateForm);
  return Object.values(validateForm).every(Boolean);
}

function handleCheck(validateForm) {
  // Initally I didn't want to use an array (I thought it would be more complicated/complex to complete)
  // but when making my code more maintainable and readable
  // this was a sustainable option
  const solutionDescription = document.getElementById("solution-description");
  const complaintDescription = document.getElementById("complaint-description");
  const ids = [
    "full-name",
    "email",
    "order-no",
    "product-code",
    "quantity",
    "complaints-group",
    "solutions-group"
  ];
  ids.forEach((element) => {
    document.getElementById(element).style.borderColor = validateForm[element]
      ? "green"
      : "red";
  });

  if (otherComplaint.checked) {
    complaintDescription.classList.add("show");
    complaintDescription.style.borderColor = validateForm[
      "complaint-description"
    ]
      ? "green"
      : "red";
  } else {
    complaintDescription.classList.remove("show");
  }

  if (otherSolution.checked) {
    solutionDescription.classList.add("show");
    solutionDescription.style.borderColor = validateForm["solution-description"]
      ? "green"
      : "red";
  } else {
    solutionDescription.classList.remove("show");
    solutionDescription.style.borderColor = "red";
  }
}

function handlePopUp() {
  setTimeout(() => {
    text.classList.add("show");
  }, 100);

  setTimeout(() => {
    text.classList.remove("show");
    text.classList.add("no-show");
  }, 5000);

  text.classList.remove("no-show");
}

form.addEventListener("change", () => {
  isValid(validateForm());
});

form.addEventListener("submit", (e) => {
  e.preventDefault()
  isValid(validateForm());
});

submit.addEventListener("click", () => {
  if (!isValid(validateForm())) {
    text.classList.contains("completed")
      ? text.classList.remove("completed")
      : "";
    para.innerText = "Please fill the form properly";
  } else {
    para.innerText = "Thank you for completing the form";
    text.classList.add("completed");
  }
  handlePopUp();
});

