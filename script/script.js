/* SELEÇÃO NÚMERO */

var numberBtn = document.querySelectorAll(".circle");

/* CLICK BOTÃO */

var btn = document
  .querySelector("button")
  .addEventListener("click", function () {
    
    var main = document.querySelector("main");

    var container = document.querySelector(".container");
    container.remove()

    var div = document.createElement("div");
    div.classList.add("Container2");
    var span = document.createElement("p");
    span.classList.add("spanTks")
    var h1 = document.createElement("h1");
    h1.classList.add("h1Tks");
    var p = document.createElement("p");
    p.classList.add("pTks");

    span.textContent = "You selected out of 5";
    h1.textContent = "Thank You!";
    p.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(p);

    main.appendChild(div);
    
    console.log(main)
  });
