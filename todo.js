const taskList = document.querySelector("#task-list"); //ul
const form = document.querySelector("#task-form"); //form
const newTask = document.querySelector("#new-task"); //form input
const clearAll = document.querySelector("#clear-all"); //clear all the tasks

const MAX_ITEMS = 10

form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
clearAll.addEventListener("click", deleteAllTasks);

function addTask(e) {
  e.preventDefault();

  if (maxItemsExceeded() || newTask == "") return;

  // create li element
  li = document.createElement("li");

  // give li a class
  li.className = "list-item";

  // grab input value and append
  const textnode = document.createTextNode(newTask.value);
  li.appendChild(textnode);

  // include a delete button
  const link = document.createElement("span");
  link.textContent = "x";
  link.className = "delete-button";
  li.appendChild(link);

  // append li to ul with condition of empty input field

  // TODO.
  // Should we be able to add an item.
  // There are already 10 items.
  // The input field is blank.
  // Tie this to the button being enabled.

  taskList.appendChild(li);
  

  //Note that the above conditional statement solves problem of empty input field appending to list, but wondering if it could be written better or if scope would be an issue here

  // tenItemsMax(); here I tried to create a separate function for checking if the list has 10 items but ended up implementing the logic within the conditional statement already present


  //clear input field
  newTask.value = "";

  // add event listener
  li.addEventListener("click", strikethrough);
  // Why does this work?? li is scoped locally but the strikethrough function seems to have access??
}

// Strikethrough list item when li is clicked.
function strikethrough(e) {
  e.target.style.textDecoration = "line-through";
}

function maxItemsExceeded() {
  return taskList.childElementCount >= MAX_ITEMS
}

function deleteTask(e) {
  e.target.closest(".list-item").remove();
}

function deleteAllTasks(e) {
  console.log(e);

  let userConfirmed = confirm("Are you sure?")

  if (userConfirmed) {
    taskList.innerHTML = "";
  }
}
