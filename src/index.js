import {
  checkStorage,
  loadInboxFromStorage,
  loadProjectsFromStorage,
} from "./storage";
import { createInboxForm, createProjectNameForm } from "./form";
import {
  removeChildrenFromMain,
  removeChildrenFromNav,
  populateInbox,
  populateProjects,
} from "./helperFunctions";
// import { clearLocalStorage } from "./test";

let inbox;
let projects;

// Inbox button event listener stuff.
document.querySelector("#inbox").addEventListener("click", () => {
  let list = document.querySelector("#list");
  removeChildrenFromMain(list); // Clear content
  populateInbox(inbox, list); // Populate
  createInboxForm(inbox, list); // Create & add form
});

// Projects button event listener stuff.
document.querySelector("#projects").addEventListener("click", () => {
  let list = document.querySelector("#projects-list");
  removeChildrenFromNav(list);
  populateProjects(projects, list);
});

// Add project button event listener stuff.
document.querySelector("#add-project").addEventListener("click", () => {
  let list = document.querySelector("#projects-list");
  removeChildrenFromNav(list);
  populateProjects(projects, list);
  createProjectNameForm(projects, list);
});

// clearLocalStorage();
checkStorage();
inbox = loadInboxFromStorage();
// inbox.showInbox();

projects = loadProjectsFromStorage();
projects.showProjects();
