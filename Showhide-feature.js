let eye = document.querySelector(".eye");

eye.addEventListener("click", () => {
  let password = document.querySelector("#password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
