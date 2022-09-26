let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let task = document.querySelector(".task");

// Empty array for tasks
let arrayOfTasks = [];

if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLoacalStorage();

submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = ""; // Empty the input
  }
};

function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    done: false,
  };
  arrayOfTasks.push(task);
  addElementToPage(arrayOfTasks);
  addTaskToLocalStorage(arrayOfTasks);
}

function addElementToPage(arrayOfTasks) {
  // Fadde l2adem
  tasksDiv.innerHTML = "";
  // Looping on array of tasks
  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("date-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    if (task.done) {
      div.classList.add("done");
    }
    let span = document.createElement("span");
    span.classList.add("del");
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    //Add this div to the task List
    tasksDiv.appendChild(div);
  });
}
function addTaskToLocalStorage(arrayOfTasks) {
  window.localStorage("tasks", JSON.stringify(arrayOfTasks));
}
function getDataFromLoacalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementToPage(tasks);
  }
}
