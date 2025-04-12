// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Form submission handler
const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#mailto");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute(
    "href",
    `mailto:tkditf.geba@hotmail.com?subject=nombre: ${form.get(
      "name"
    )}  correo: ${form.get("email")} &body=${form.get("message")}`
  );
  $buttonMailto.click();
}
