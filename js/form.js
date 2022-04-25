const menuButton = document.querySelector(".menu-button");
const menuButton1 = document.querySelector(".menu-button1");
const menuOverlay = document.querySelector(".menu-overlay");
const formBtns = document.querySelectorAll(".form__btn");
console.log(formBtns);

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  menuOverlay.classList.toggle("open");
});

menuButton1.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  menuOverlay.classList.toggle("open");
});

formBtns.forEach(item => {
  item.addEventListener("click", (e) => {
    alert("Ваше сообщение отправлено");
  });
})
