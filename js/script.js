var link = document.querySelector(".button-link");
var popup = document.querySelector(".block-login");
var close = document.querySelector(".block-close");
var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=phone]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("block-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("block-show");
  popup.classList.remove("block-error");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("block-show");
  if (storage) {
    name.value = storage;
    phone.focus();
  } else {
    name.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !phone.value) {
    evt.preventDefault();
    popup.classList.remove("block-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("block-error");
    console.log("Нужно Имя и телефон");
  } else {
  if (isStorageSupport) {
    localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (popup.classList.contains("block-show")) {
    popup.classList.remove("block-show");
    popup.classList.remove("block-error");
    }
  }
});