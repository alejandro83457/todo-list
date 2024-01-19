import { generateTodo, removeChildrenFromMain } from "./helperFunctions";
import { Project, Projects } from "./project";
import { removeChildrenFromNav, populateProjects } from "./helperFunctions";

// --------------------------
// Creates inbox form
export function createInboxForm(inbox, list) {
  let formDiv = document.createElement("div");
  formDiv.setAttribute("id", "inbox-form");

  let titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("placeholder", "Title");

  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("name", "description");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description");

  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "add-todo-button");
  button.textContent = "Add";

  // Add item when clicking add button.
  button.addEventListener("click", () => {
    generateTodo(inbox, list);

    // Clear form input
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
  });

  formDiv.appendChild(titleInput);
  formDiv.appendChild(descriptionInput);
  formDiv.appendChild(button);

  list.parentNode.appendChild(formDiv);
}

// --------------------------
// Creates project name form
export function createProjectNameForm(projects, list) {
  let container = document.createElement("div");
  let input = document.createElement("input");
  let add = document.createElement("div");

  container.setAttribute("id", "project-name-container");

  input.setAttribute("type", "text");
  input.setAttribute("id", "project-name");
  input.setAttribute("placeholder", "Project name");

  add.setAttribute("id", "add-project-button");
  add.textContent = "Add";

  // Event listener for adding project after typing name
  add.addEventListener("click", () => {
    projects.addProject(new Project(input.value));

    // We want to reflect the added project on the list.
    removeChildrenFromNav(list);
    populateProjects(projects, list);
  });

  container.appendChild(input);
  container.appendChild(add);
  list.appendChild(container);
}
