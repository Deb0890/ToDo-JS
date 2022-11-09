const taskList = document.querySelector("#task-list"); //ul
const form = document.querySelector("#task-form"); //form
const newTask = document.querySelector("#new-task"); //form input

form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);

function addTask(e) {
  e.preventDefault();

  // create li element
  const li = document.createElement("li");

  // give li a class
  li.className = "list-item";

  // grab input value and append
  const textnode = document.createTextNode(newTask.value);
  li.appendChild(textnode);

  // append li to ul with condition of empty input field

  // include a delete button
  const link = document.createElement("span");
  link.textContent = "x";
  link.className = "delete-button";
  li.appendChild(link);

  if (newTask.value === "") {
    alert("Please add a task");
  } else {
    taskList.appendChild(li);
  }

  //Note that the above conditional statement solves problem of empty input field appending to list, but wondering if it could be written better or if scope would be an issue here

  //clear input field
  newTask.value = "";
}

function deleteTask(e) {
  if (e.target.parentElement.classList.contains("list-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.remove();
      console.log(e);
    }
  }
}
