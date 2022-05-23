const numberBtn = document.querySelectorAll(".circle");
const container = document.querySelector(".container");
const containerThankYou = document.querySelector(".container-thankyou");
const btnSubmit = document.querySelector("button");
const span = document.querySelector(".rating");

for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", function () {
    let rating = numberBtn[i].textContent;
    console.log(rating);

    for (let i = 0; i < numberBtn.length; i++) {
      numberBtn[i].classList.remove("circle2");
      numberBtn[i].classList.add("circle");
    }
    numberBtn[i].classList.remove("circle");
    numberBtn[i].classList.add("circle2");

    btnSubmit.addEventListener("click", function () {
      container.classList.add("remove");
      containerThankYou.classList.remove("container-thankyou");
      containerThankYou.classList.add("container-thankyou2");
      span.textContent = "You selected" + rating + " out of 5";
    });
  });
}
