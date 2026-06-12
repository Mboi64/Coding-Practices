const themes = [
  {
    name: "light",
    message: "light like the sky",
    button: "cadetblue",
  },
  {
    name: "gray",
    message: "gray like spray",
    button: "#BDBDBD",
  },
  {
    name: "yellow",
    message: "yellow like eggo",
    button: "#b2b873",
  },
  {
    name: "pink",
    message: "pink like peach",
    button: "#d66ec8",
  },
];

const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeOption = document.querySelectorAll(`[role="menuitem"]`);

// I did not know this could work (initially: document.querySelector("body"))
const body = document.body;
const para = document.getElementById("status");

function displayOption() {
  themeDropdown.hidden
    ? (themeDropdown.hidden = false)
    : (themeDropdown.hidden = true);
  themeSwitcherBtn.ariaExpanded = !themeDropdown.hidden;
  // at first I used setAttribute() but this is way better
}

function closeMenu(e) {
  // if "e" does contain the button or the dropdown options ... return
  if (themeSwitcherBtn.contains(e.target) || themeDropdown.contains(e.target)) {
    return;
  }
  themeDropdown.hidden = true;
  themeSwitcherBtn.ariaExpanded = false;
}

themeSwitcherBtn.addEventListener("click", displayOption);

themeOption.forEach((option) => {
  option.addEventListener("click", () => {
    const color = option.id.substring(6);
    const choice = themes.find((theme) => theme.name === color);
    // I did not know about array.find() "finds" the first instance of something
    themeSwitcherBtn.style.background = choice.button;
    body.className = `theme-${choice.name}`;
    para.textContent = choice.message;
  });
});



// Closes menu when clicking outside
document.addEventListener("click", closeMenu);
