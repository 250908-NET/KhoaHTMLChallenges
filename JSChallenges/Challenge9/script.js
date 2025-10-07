function sayHello() {
  alert("Hello from the external file!");
}
function sayBye() {
  alert("Goodbye from the external file!");
}

// Connect the function to the button
let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

let btn2 = document.getElementById("goodbyeBtn");
btn2.addEventListener("click", sayBye);