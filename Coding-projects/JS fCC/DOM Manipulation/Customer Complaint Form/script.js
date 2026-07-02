const form = document.getElementById("form");
const submit = document.getElementById("submit-btn");

function validationForm() {
  // Form Input
  const name = document.getElementById("full-name");
  const email = document.getElementById("email");
  const orderNum = document.getElementById("order-no");
  const product = document.getElementById("product-code");
  const quantity = document.getElementById("quantity");
  const complaintsGroup = document.querySelectorAll("#complaints-group");
  const complaintsDetail = document.getElementById("complaint-description");
  const solutionGroup = document.getElementById("solution-group");
  const solutionDetail = document.getElementById("solution-description");

  const otherComplaint = document.getElementById("other-complaint");
  const otherSolution = document.getElementById("other-solution");

  // Regex for specific qualifications
  const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  const orderNumRegex = /^2024\d{6}/;
  const productCodeRegex = /^[a-z]{2}\d{2}-[a-z]+\d{3}-[a-z]{2}\d/i;

  return {
    fullName: name.value !== "",
    email: emailRegex.test(email.value),
    orderNo: orderNumRegex.test(orderNum.value),
    productCode: productCodeRegex.test(product.value),
    quantity: quantity.value > 0,
    complaintsGroup: complaintsGroup.value, // incomplete
    complaintsDescription: complaintsDetail.value.length > 20,
    solutionsGroup: solutionGroup.value, // incomplete
    solutionDescription: solutionDetail.value.length > 20,
  };
}

function isValid(validationForm) {}
