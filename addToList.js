// Persistent list that stays in memory
const addToList = (function () {
  const items = [];

  return function (newItem) {
    if (newItem.trim() !== "") {
      items.push(newItem);
    }
    return items;
  };
})();

const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("itemList");

// Event listener for Add button
addBtn.addEventListener("click", () => {
  const item = input.value.trim();
  const updatedList = addToList(item);

});

