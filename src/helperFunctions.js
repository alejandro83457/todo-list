import { updateInboxStorage, updateProjectsStorage } from "./storage";
import { SimpleTodo, Todo } from "./todo";
import { createProjectForm } from "./form";

// ----------------------
// Remove list button event listener
export function removeParent(e) {
  let parent = e.target.parentElement;
  parent.remove();
}

// Remvoes children from main
// Removes form IF present
export function removeChildren() {
  let list = document.querySelector("#list");
  while (list.childNodes.length > 0) {
    list.removeChild(list.firstChild);
  }
  if (document.querySelector("#inbox-form")) {
    document.querySelector("#inbox-form").remove();
  } else if (document.querySelector("#project-form")) {
    document.querySelector("#project-form").remove();
  }
}
// ----------------------
// Clears list in nav.
export function removeChildrenFromNav() {
  let list = document.querySelector("#projects-list");
  while (list.childNodes.length > 0) {
    list.removeChild(list.firstChild);
  }
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
// Populates projects
export function populateMain(project) {
  let list = document.querySelector("#list");
  let todos = project.project["todos"];
  for (let todo of todos) {
    let li = document.createElement("li");
    li.setAttribute("data", todo.title);

    let todoText = document.createElement("div");
    todoText.textContent = `${todo.title} ${todo.description} ${todo.due} ${todo.priority}`;

    // TODO: Create checkbox

    // Add elemdents to li.
    li.appendChild(todoText);
    list.appendChild(li);
  }
}

// ----------------------
// Populates projects title on nav
export function populateProjects(projects, list) {
  for (let project of projects.projects) {
    let li = document.createElement("li");
    li.addEventListener("click", () => {
      if (document.querySelector("#inbox-form")) {
        document.querySelector("#inbox-form").remove();
      }
      removeChildren();
      populateMain(project);
      createProjectForm(project, projects);
    });

    let projectText = document.createElement("div");
    projectText.textContent = `${project.projectTitle}`;

    li.appendChild(projectText);
    list.appendChild(li);
  }
}

// ----------------------
// Create and add a todo for inbox.
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
// Create and add a todo for project.
export function generateTodoProject(project, projects, list) {
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let due = document.querySelector("#due");
  let priority = document.querySelector("#priority");

  let li = document.createElement("li");
  li.setAttribute("data", title.value);

  // TODO: Add checkbox for removal

  let todoText = document.createElement("div");
  todoText.textContent = `${title.value} ${description.value} ${due.value} ${priority.value}`;

  li.appendChild(todoText);
  list.appendChild(li);

  let todo = new Todo(
    title.value,
    description.value,
    due.value,
    priority.value
  );

  project.addTodo(todo);
  updateProjectsStorage(projects);
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
