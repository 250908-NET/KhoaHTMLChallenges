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
        showToast("The list is empty!");
    } 
    else {
        let list = "<ul>";
        for (let i = 0; i < items.length; i++) 
        {
            list += "<li>" + items[i] + "</li>";
        }
        list += "</ul>";
        showToast("Your items:" + list);
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

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.className = "show";
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}