const data = {
  kittenImageUrl:
    "https://raw.githubusercontent.com/appbrewery/webdev/main/kitten.jpeg",
  puppyImageUrl:
    "https://raw.githubusercontent.com/appbrewery/webdev/main/puppy.jpeg",
};
const kittenImageElement = document.getElementById("kitten-image");
kittenImageElement.src = data.kittenImageUrl;
const puppyImageElement = document.getElementById("puppy-image");
puppyImageElement.src = data.puppyImageUrl;
const toggleButtonElement = document.getElementById("toggle-button");
toggleButtonElement.addEventListener("click", function () {
  if (kittenImageElement.style.display === "none") {
    kittenImageElement.style.display = "block";
    puppyImageElement.style.display = "none";
    toggleButtonElement.textContent = "Show Puppy";
  } else {
    kittenImageElement.style.display = "none";
    puppyImageElement.style.display = "block";
    toggleButtonElement.textContent = "Show Kitten";
  }
});
