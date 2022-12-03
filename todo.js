const taskList = document.querySelector("#task-list"); //ul
const form = document.querySelector("#task-form"); //form
const newTask = document.querySelector("#new-task"); //form input
const clearAll = document.querySelector("#clear-all"); //clear all the tasks

form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
clearAll.addEventListener("click", deleteAllTasks);

function addTask(e) {
  e.preventDefault();

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
  if (newTask.value === "") {
    alert("Please add a task");
  } else if (taskList.childElementCount == 11) {
    alert(
      "You cannot add more than 10 items! Please delete an item to continue"
    );
  } else {
    taskList.appendChild(li);
  }

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
  li.style.textDecoration = "line-through";
}

// function tenItemsMax() {
//   if (taskList.childElementCount == 11) {
//     alert(
//       "You cannot add more than 10 items! Please delete an item to continue"
//     );
//   }
// }

function deleteTask(e) {
  if (e.target.parentElement.classList.contains("list-item")) {
    // if (confirm("Are You Sure?")) {
    e.target.parentElement.remove();
    // console.log(e);
    // }
  }
}
function deleteAllTasks(e) {
  console.log(e);
  if (confirm("Are you sure?")) {
    taskList.innerHTML = "";
  }
}
