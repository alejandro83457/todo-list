import { Inbox } from "./inbox";
import { SimpleTodo } from "./todo";

// Check if localStorage is set up properly.
// If will only run once per device.
export function checkStorage() {
  if (localStorage.length == 0) {
    console.log("Empty. Loading content...");
    let inbox = [];
    let projects = {};
    localStorage.setItem("inbox", JSON.stringify(inbox));
    localStorage.setItem("projects", JSON.stringify(projects));
  } else console.log("Content found.");
}

// Loads inbox data from local storage.
export function loadStorage() {
  let inboxFromLocal = localStorage.getItem("inbox");
  inboxFromLocal = JSON.parse(inboxFromLocal);
  let inbox = new Inbox();
  for (let todoFromLocal of inboxFromLocal) {
    let title = todoFromLocal.title;
    let description = todoFromLocal.description;
    let todo = new SimpleTodo(title, description);
    inbox.addTodo(todo);
  }
  return inbox;
}

// Updates storage in browser to reflect added item.
export function updateStorage(inbox) {
  localStorage["inbox"] = inbox.stringify();
}
