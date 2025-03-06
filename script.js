// Get DOM elements
const todoInput = document.querySelector("input");
const addButton = document.querySelector("button");
const todoList = document.querySelector("ul");

const todos = [];

// Function to add a new task from user input
function addTodo() {
  const task = todoInput.value.trim();
  if (task === "") return;

  // Add to array
  todos.push({
    text: task,
    completed: false,
  });

  // Update the UI
  addTodos();

  // Clear input field
  todoInput.value = "";
}

// Function to mark a task as completed
function completeTodo(index) {
  todos[index].completed = !todos[index].completed;
  addTodos();
}

// Function to add todos to the DOM
function addTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    if (todo.completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", () => completeTodo(index));
    todoList.appendChild(li);
  });
}

// Event listeners
addButton.addEventListener("click", addTodo);
