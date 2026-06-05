const galleryImage = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

// When an image is clicked on, it will change the display of .lightbox from "none" to "flex"
// making the "non-thumbnail" full-view image to appear
const imageModal = (event) => {
  let imageURL = event.src;
  lightbox.style.display = "flex";
  lightboxImage.src =
    imageURL.substring(0, imageURL.indexOf("-thumbnail")) + imageURL.slice(-4);
};

const exitFeature = () => {
  lightbox.style.display = "none";
};

galleryImage.forEach((event) =>
  event.addEventListener("click", () => imageModal(event)),
);

closeBtn.addEventListener("click", exitFeature);
lightbox.addEventListener("click", exitFeature);
