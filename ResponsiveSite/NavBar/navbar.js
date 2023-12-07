let button = document.querySelector(".fa-solid");
let showcase = document.querySelectorAll("li");

function whatHappens() {
  for (let i = 0; i < showcase.length; i++) {
    showcase[i].classList.toggle("show");
  }
}

button.addEventListener("click", whatHappens);
