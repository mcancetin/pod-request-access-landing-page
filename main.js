const form = document.querySelector("#form");
const input = document.querySelector("#email");
const error = document.querySelector(".input__error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value;

  if (email === "") {
    error.textContent = "Oops! Please add your email";
  } else if (!email.includes("@") || !email.includes(".")) {
    error.textContent = "Oops! Please check your email";
  } else {
    error.textContent = "";
  }
});
