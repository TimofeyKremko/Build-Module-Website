const sendBtns = document.querySelectorAll(".send-btn");

sendBtns.forEach((item) => {
  item.addEventListener("click", () => {
    Swal.fire("Форма отправлена", "Скоро с вами свяжутся", "success");
  });
});
