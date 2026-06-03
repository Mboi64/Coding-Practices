const heart = document.querySelectorAll(".favorite-icon");

heart.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("filled");
    if (btn.classList.contains("filled")) {
      btn.innerHTML = "&#10084;";
    } else {
      btn.innerHTML = "&#9825;";
    }
  });
});
