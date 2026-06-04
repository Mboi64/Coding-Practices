const heart = document.querySelectorAll(".favorite-icon");
// querySelectorAll() shows a Node list which is an object containing every class, id, or tag from first to final apperance
// Completely different from querySelector, which shows the first instance of the specfic class or id

/* 
Since accessing a Node List works similarly to how you would acces an array you can use:
    - Bracket Notations (to find a specific item)
    - For or For...of loop (to loop through each item)
    - Higher Order Function/ CallBack Methods like .map() or .filter()
*/
heart.forEach((btn) => {
  btn.addEventListener("click", () => {
    // when clicked this class will be added/removed, changing the icon's image
    btn.classList.toggle("filled");
    if (btn.classList.contains("filled")) {
      btn.innerHTML = "&#10084;";
    } else {
      btn.innerHTML = "&#9825;";
    }
  });
});
