const progress = document.getElementById("progress");

const circles = document.querySelectorAll(".circle");

const block = document.getElementsByClassName("left__content");

window.addEventListener("scroll", progressBar);

function progressBar(event) {
  let windowScroll = block.scrollTop || document.documentElement.scrollTop;
  let newWindowSCroll = windowScroll - 4000;
  let newWindowHeight = 4000;

  let per = (newWindowSCroll / newWindowHeight) * 100;

  progress.style.width = per * 2.5 + "%";

  circles.forEach((circle, index) => {
    const { test } = circle.dataset;

    if (Number(test) <= per) {
      const {
        dataset: { test },
      } = circle;

      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}
