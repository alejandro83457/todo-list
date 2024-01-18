import { Todo, SimpleTodo } from "./todo";
import { Inbox } from "./inbox";
import * as test from "./test";

let list = document.querySelector("#list");
let inbox;

let inboxButton = document.querySelector("#inbox");
let addToInboxButton = document.querySelector("#todo-button");

// Check if localStorage is set up properly.
// If will only run once per device.
function checkStorage() {
  if (localStorage.length == 0) {
    console.log("Empty. Loading content...");
    let inbox = [];
    let projects = {};
    localStorage.setItem("inbox", JSON.stringify(inbox));
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}

// Loads inbox data from local storage.
function loadStorage() {
  let inboxFromLocal = localStorage.getItem("inbox");
  inboxFromLocal = JSON.parse(inboxFromLocal);
  inbox = new Inbox();
  for (let todoFromLocal of inboxFromLocal) {
    let title = todoFromLocal.title;
    let description = todoFromLocal.description;
    let todo = new SimpleTodo(title, description);
    inbox.addTodo(todo);
  }
}

// Updates storage in browser to reflect added item.
function updateStorage() {
  console.log(inbox.stringify());
  localStorage["inbox"] = inbox.stringify();
}

// Inbox button event listener stuff.
inboxButton.addEventListener("click", () => inboxEventListener());
function inboxEventListener() {
  console.log("Inbox button clicked.");
  removeChildren();
  for (let todo of inbox.inbox) {
    let li = document.createElement("li");
    li.textContent = `${todo.title} ${todo.description}`;
    li.setAttribute("data", todo.title);

    // Button for removing list item.
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", (e) => removeParent(e));

    li.appendChild(removeButton);
    list.appendChild(li);
  }
}

// Add todo to inbox button event listener stuff.
addToInboxButton.addEventListener("click", () =>
  addToInboxButtonEventListener()
);
function addToInboxButtonEventListener() {
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let li = document.createElement("li");
  li.setAttribute("data", title.value);

  // Button for removing list item.
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", (e) => removeParent(e));

  li.textContent = `${title.value} ${description.value}`;
  li.appendChild(removeButton);
  list.appendChild(li);

  let todo = new SimpleTodo(title.value, description.value);
  inbox.addTodo(todo);

  updateStorage(); // Updates local storage
}

// Remove list button event listener
function removeParent(e) {
  let parent = e.target.parentElement;
  let parentAttribute = parent.getAttribute("data");
  console.log(`Parent with data: ${parentAttribute} removed`);
  parent.remove();
  inbox.removeTodo(parentAttribute);

  updateStorage(); // Updates local storage
}

// Clears list in DOM.
function removeChildren() {
  while (list.childNodes.length > 0) {
    list.removeChild(list.firstChild);
  }
}

// test.clearLocalStorage();
checkStorage();
loadStorage();
inbox.showInbox();
// test.populateInbox();
// test.printLocalStorage();
