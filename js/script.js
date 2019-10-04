var link = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");
var form = popup.querySelector("form");
var check_in_date = popup.querySelector("[name=check-in-date]");
var check_out_date = popup.querySelector("[name=check-out-date]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("hide");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!check_in_date.value || !check_out_date.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль");
  }
});
