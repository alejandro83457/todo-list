import { checkStorage, loadStorage } from "./storage";
import { createInboxForm } from "./form";
import { removeChildren, populateInbox, generateTodo } from "./helperFunctions";

let list = document.querySelector("#list");
let inbox;

let inboxButton = document.querySelector("#inbox");

// Inbox button event listener stuff.
inboxButton.addEventListener("click", () => {
  removeChildren(list); // Clear content
  populateInbox(inbox, list); // Populate
  createInboxForm(inbox, list); // Create & add form
});

checkStorage();
inbox = loadStorage();
inbox.showInbox();
