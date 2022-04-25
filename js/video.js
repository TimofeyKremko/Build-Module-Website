let box = document.querySelectorAll(".box");

box.forEach((popup) =>
  popup.addEventListener("click", () => {
    popup.classList.toggle("active");
  })
);

let video = document.querySelector(".header--about");

window.addEventListener("scroll", () => {
  let value = 1 + window.scrollY / -700;
  video.style.opacity = value;
});
