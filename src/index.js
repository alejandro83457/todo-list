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
    let ul = document.createElement("ul");
    ul.textContent = `${todo.title} ${todo.description}`;
    list.appendChild(ul);
  }
}

// Add todo to inbox button event listener stuff.
addToInboxButton.addEventListener("click", () =>
  addToInboxButtonEventListener()
);
function addToInboxButtonEventListener() {
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let ul = document.createElement("ul");
  ul.textContent = `${title.value} ${description.value}`;
  list.appendChild(ul);

  let todo = new SimpleTodo(title.value, description.value);
  inbox.addTodo(todo);

  updateStorage();
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
