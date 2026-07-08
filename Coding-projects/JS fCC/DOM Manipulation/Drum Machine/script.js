const beatText = document.getElementById("display");
const audioButton = document.querySelectorAll(".drum-pad");

// Even though this was the correct solution, it felt like a waste not implimenting
// the audio constructor into the program
audioButton.forEach((clip) => {
  const link = clip.querySelector("audio");
  clip.addEventListener("click", () => {
    link.play();
    beatText.innerText = clip.id;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === link.id.toLowerCase()) {
      link.play();
      beatText.textContent = clip.id;
    }
  });
});

// const audio = new Audio()

// audioBeat.forEach((beat) => {
//   const link = beat.querySelector("audio")
//   beat.addEventListener("click", () => {
//     audio.src = link.src
//     beatText.textContent = beat.id
//     audio.play()
//   })
//   document.addEventListener("keydown", (e) => {
//     if(e.key === link.id.toLowerCase()){
//       audio.src = link.src
//       beatText.textContent = beat.id
//       audio.play()
//     }
// })
// })
