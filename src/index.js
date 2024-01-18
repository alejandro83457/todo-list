import { Todo, SimpleTodo } from "./todo";
import * as test from "./test";
import { checkStorage, loadStorage, updateStorage } from "./storage";
import { createInboxForm } from "./form";

let list = document.querySelector("#list");
let inbox;

let inboxButton = document.querySelector("#inbox");
// let addToInboxButton = document.querySelector("#todo-button");
let addToInboxButton;

// Inbox button event listener stuff.
inboxButton.addEventListener("click", () => inboxEventListener());
function inboxEventListener() {
  console.log("Inbox button clicked.");
  removeChildren();

  // Show all todos in inbox.
  for (let todo of inbox.inbox) {
    let li = document.createElement("li");
    li.setAttribute("data", todo.title);

    let todoText = document.createElement("div");
    todoText.textContent = `${todo.title} ${todo.description}`;

    // Checkbox for removing list item.
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("change", (e) => removeParent(e));

    // Add elements to li.
    li.appendChild(checkbox);
    li.appendChild(todoText);
    list.appendChild(li);
  }

  // Create form and add its event listener.
  let inboxForm = createInboxForm();
  list.parentNode.appendChild(inboxForm);
  addToInboxButton = document.querySelector("#todo-button");
  setAddToInboxButton();
}

// Add todo to inbox button event listener stuff.
// NOTE: WILL ONLY BE CALLED AFTER FORM IS MADE.
function setAddToInboxButton() {
  addToInboxButton.addEventListener("click", () => {
    addToInboxButtonEventListener();

    // Clear form input
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
  });
}
function addToInboxButtonEventListener() {
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let li = document.createElement("li");
  li.setAttribute("data", title.value);

  let todoText = document.createElement("div");
  todoText.textContent = `${title.value} ${description.value}`;

  // Checkbox for removing list item.
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", (e) => removeParent(e));

  li.appendChild(checkbox);
  li.appendChild(todoText);
  list.appendChild(li);

  let todo = new SimpleTodo(title.value, description.value);
  inbox.addTodo(todo);

  updateStorage(inbox); // Updates local storage
}

// Remove list button event listener
function removeParent(e) {
  let parent = e.target.parentElement;
  let parentAttribute = parent.getAttribute("data");
  console.log(`Parent with data: ${parentAttribute} removed`);
  parent.remove();
  inbox.removeTodo(parentAttribute);

  updateStorage(inbox); // Updates local storage
}

// Clears list in DOM.
function removeChildren() {
  while (list.childNodes.length > 0) {
    list.removeChild(list.firstChild);
  }
  list.parentNode.removeChild(list.parentNode.lastChild);
}

checkStorage();
inbox = loadStorage();
inbox.showInbox();
// test.populateInbox();
// test.printLocalStorage();
