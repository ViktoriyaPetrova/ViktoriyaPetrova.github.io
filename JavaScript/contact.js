// Check form for valitidy
let form = document.querySelector("form");
form.addEventListener("submit", isValid);
function isValid(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
}
