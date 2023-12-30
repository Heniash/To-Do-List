
let input = document.getElementById('input1');
let addTaskButton = document.getElementById('addTaskButton');
let list = document.getElementById('list');
let list2 = document.getElementById('list2');
let deleteCompletedButton = document.getElementById('Button2');

input.addEventListener('keyup', function(event){
  if (event.key === "Enter") {
    addItem(this.value, list);
    this.value = "";
  }
});
addTaskButton.addEventListener('click', function() {
  addItem(input.value, list);
  input.value = "";
});
deleteCompletedButton.addEventListener('click', function() {
  moveCompletedItems(list2, list);
});

let addItem = (text, targetList) => {
  if (text.trim() !== "") {
    let listItem = document.createElement('li');
    listItem.textContent = text;

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      moveItem(this.parentElement, list, list2);
    });

    listItem.appendChild(checkbox);
    targetList.appendChild(listItem);
  
  }
}

let moveItem = (item, sourceList, targetList) => {
    let checkbox = item.querySelector('input');
  
    if (checkbox.checked) {
      targetList.appendChild(item);
    } else {
      sourceList.appendChild(item);
    }
  }
  

  let moveCompletedItems = (sourceList, targetList) => {
    let itemsToMove = sourceList.querySelectorAll('li');
    for (let i = 0; i < itemsToMove.length; i++) {
      let item = itemsToMove[i];
      let checkbox = item.querySelector('input');
  
      if (checkbox.checked) {
        targetList.appendChild(item);
        checkbox.checked = false;
      }
    }
  }
  