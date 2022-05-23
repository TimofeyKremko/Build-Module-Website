const sendBtns = document.querySelectorAll(".send-btn");
const inputName = document.querySelector(".input__name");
const inputEmail = document.querySelector(".input__email");
const inputPhone = document.querySelector(".input__phone");
const regEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const regNumber = /^\+375\([0-9]{2}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/;

sendBtns.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      inputName.value &&
      inputEmail.value &&
      inputPhone.value &&
      regEmail.test(inputEmail.value) === true &&
      regNumber.test(inputPhone.value) === true
    ) {
      Swal.fire("Форма отправлена", "Скоро с вами свяжутся", "success");
    } else {
      Swal.fire(
        "Заполните форму",
        "Для отрпавки формы заполните данные",
        "error"
      );
    }
  });
});

// const houseName = document.querySelector(".house-form__name");
// const housePhone = document.querySelector(".house-form__phone");
// const formBtn = document.querySelector(".house__btn");
