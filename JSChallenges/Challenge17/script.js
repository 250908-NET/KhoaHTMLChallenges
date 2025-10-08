let addButton = document.getElementById("addTask");
let toggleModeBtn = document.getElementById("toggleMode");
let itemInput = document.getElementById("taskInput");
let myList = document.getElementById("taskList");

// Add new task
addButton.addEventListener("click", function() {
  let taskText = itemInput.value.trim();
  if (taskText === "") return;

  let newItem = document.createElement("li");
  let textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  // Create "Mark Complete" button
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Mark task as complete";
  completeBtn.addEventListener("click", function() {
    textSpan.classList.toggle("done");
  });

  // Create "Remove" button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove Task";
  removeBtn.addEventListener("click", function() {
    newItem.remove();
  });

  newItem.appendChild(textSpan);
  newItem.appendChild(completeBtn);
  newItem.appendChild(removeBtn);
  myList.appendChild(newItem);


  itemInput.value = "";
});

// Dark Mode
toggleModeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
