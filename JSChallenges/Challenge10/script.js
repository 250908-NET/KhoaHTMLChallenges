function greetUser() {
  let name = document.getElementById("nameInput").value;
  let color = document.getElementById("colorInput").value;
  if (name.trim() === "") {
    alert("Please enter your name first!");
  } 
  else if (color.trim() === ""){
    alert("Please enter your favorite color first!");
  }
  else {
    alert("Hello, " + name + ". Your favorite color is " + color + "!");
  }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);