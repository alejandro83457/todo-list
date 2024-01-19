import {
  checkStorage,
  loadInboxFromStorage,
  loadProjectsFromStorage,
} from "./storage";
import { createInboxForm } from "./form";
import { removeChildren, populateInbox } from "./helperFunctions";
// import { clearLocalStorage } from "./test";

let inbox;
let projects;

// Inbox button event listener stuff.
document.querySelector("#inbox").addEventListener("click", () => {
  let list = document.querySelector("#list");
  removeChildren(list); // Clear content
  populateInbox(inbox, list); // Populate
  createInboxForm(inbox, list); // Create & add form
});

// document.querySelector("#projects").addEventListener("click", () => {
//   let list = document.querySelector("#projects-list");

// });

// clearLocalStorage();
checkStorage();
inbox = loadInboxFromStorage();
inbox.showInbox();

projects = loadProjectsFromStorage();
projects.showProjects();
