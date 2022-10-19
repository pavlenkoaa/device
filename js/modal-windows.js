var link = document.querySelector(".write-us");
var feedback = document.querySelector(".modal-feedback");
var close = feedback.querySelector(".modal-close");
var form = feedback.querySelector(".form-feedback");
var user = feedback.querySelector("[name=name-field]");
var email = feedback.querySelector("[name=email-field]");
var message = feedback.querySelector("textarea");
var storage = localStorage.getItem("email")
var mapLink = document.querySelector(".info-map");
var map = document.querySelector(".modal-map");
var mapClose = map.querySelector(".modal-close");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
  if (storage) {
  	email.value = storage;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
  feedback.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!user.value || !email.value || !message.value) {
	evt.preventDefault();
	feedback.classList.remove("modal-error");
  feedback.offsetWidth = feedback.offsetWidth;
	feedback.classList.add("modal-error");
	} else {
		localStorage.setItem("email", email.value);
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
	if (feedback.classList.contains("modal-show")) {
			feedback.classList.remove("modal-show");
			feedback.classList.remove("modal-error");
		}
	}
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (map.classList.contains("modal-show")) {
			map.classList.remove("modal-show");
		}
	}
});