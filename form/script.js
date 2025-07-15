let nameError = document.querySelector(".name-error");
let phoneError = document.querySelector(".phone-error");
let emailError = document.querySelector(".email-error");
let msgError = document.querySelector(".message-error");
let submitError = document.querySelector(".submit-error");

function validateName() {
  let name = document.querySelector(".contact-name").value;

  if (name === "") {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    nameError.innerHTML = "Full name is required";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.querySelector(".contact-phone").value;

  if (phone.length === 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.querySelector(".contact-email").value;

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[^\s@]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
    emailError.innerHTML = "Email is invalid";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let msg = document.querySelector(".contact-message").value;
  let required = 30;

  let left = required - msg.length;

  if (left > 0) {
    msgError.innerHTML = `${left} more characters required`;
    return false;
  }

  msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.computedStyleMap.display = "block";
    submitError.innerHTML = "Please fix the error to submit";

    setTimeout(() => (submitError.style.display = "none"), 3000);
    return false;
  }
}
