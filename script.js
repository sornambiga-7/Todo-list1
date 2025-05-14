const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    taskSpan.classList.toggle("completed", checkbox.checked);
  });

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.className = "task-text";

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskSpan.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskSpan.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = "";
}