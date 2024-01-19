import { updateInboxStorage } from "./storage";
import { SimpleTodo } from "./todo";

// ----------------------
// Remove list button event listener
export function removeParent(e) {
  let parent = e.target.parentElement;
  parent.remove();
}

// ----------------------
// Clears list in DOM.
export function removeChildren(list) {
  while (list.childNodes.length > 0) {
    list.removeChild(list.firstChild);
  }
  list.parentNode.removeChild(list.parentNode.lastChild);
}

// ----------------------
// Populates inbox
export function populateInbox(inbox, list) {
  for (let todo of inbox.inbox) {
    let li = document.createElement("li");
    li.setAttribute("data", todo.title);

    let todoText = document.createElement("div");
    todoText.textContent = `${todo.title} ${todo.description}`;

    let checkbox = createCheckbox(inbox);

    // Add elements to li.
    li.appendChild(checkbox);
    li.appendChild(todoText);
    list.appendChild(li);
  }
}

// ----------------------
// Create and add a todo.
export function generateTodo(inbox, list) {
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let li = document.createElement("li");
  li.setAttribute("data", title.value);

  let todoText = document.createElement("div");
  todoText.textContent = `${title.value} ${description.value}`;

  // Checkbox for removing list item.
  let checkbox = createCheckbox(inbox);

  li.appendChild(checkbox);
  li.appendChild(todoText);
  list.appendChild(li);

  let todo = new SimpleTodo(title.value, description.value);
  inbox.addTodo(todo);

  updateInboxStorage(inbox); // Updates local storage
}

// ----------------------
// Creates checkbox.
export function createCheckbox(inbox) {
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", (e) => {
    inbox.removeTodo(e.target.parentElement.getAttribute("data"));
    removeParent(e);
    updateInboxStorage(inbox);
  });
  return checkbox;
}
