import { Todo, SimpleTodo } from "./todo";
import { Inbox } from "./inbox";
import * as test from "./test";

let content = document.querySelector("#content");
let inbox;

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

// test.clearLocalStorage();
checkStorage();
loadStorage();
inbox.showInbox();
// test.populateInbox();
test.printLocalStorage();
