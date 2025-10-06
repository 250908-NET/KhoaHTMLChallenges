// Persistent list that stays in memory
const addToList = (function () {
    const items = [];
    // add Item to list
    function addItem(newItem) {
    if (newItem.trim() !== "") 
    {
        items.push(newItem);
    }
    return items;
}

// Show list as alert
addItem.showList = function () {
    if (items.length === 0) {
        alert("The list is empty.");
    } 
    else {
        alert("Your items:\n" + items.join("\n"));
    }
};

return addItem;
})();

const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");

// Add button: add item to list
addBtn.addEventListener("click", () => {
  const item = input.value.trim();
  addToList(item);
});

// Show button: show list in alert
showBtn.addEventListener("click", () => {
  addToList.showList();
});
