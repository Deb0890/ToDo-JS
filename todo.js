const form = document.querySelector("#task-form");
// form input
const newTask = document.querySelector("#new-task");
// ul
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();

  // create li element
  const li = document.createElement("li");

  // grab input value
  const textnode = document.createTextNode(newTask.value);
  li.appendChild(textnode);

  // append li to ul with condition of empty input field

  if (newTask.value === "") {
    alert("Please add a task");
  } else {
    taskList.appendChild(li);
  }
  //Note that the above conditional statement solves problem of empty input field appending to list, but wondring if it could be written better or if scope would be an issue here
}
