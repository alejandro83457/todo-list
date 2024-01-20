import { Inbox } from "./inbox";
import { SimpleTodo, Todo } from "./todo";
import { Projects, Project } from "./project";

// Check if localStorage is set up properly.
// If will only run once per device.
export function checkStorage() {
  if (localStorage.length == 0) {
    console.log("Empty. Loading content...");
    let inbox = [];
    let projects = [];
    localStorage.setItem("inbox", JSON.stringify(inbox));
    localStorage.setItem("projects", JSON.stringify(projects));
  } else console.log("Content found.");
}

// Loads inbox data from local storage.
export function loadInboxFromStorage() {
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

// Loads projects from local storage
export function loadProjectsFromStorage() {
  let projectsFromLocal = localStorage.getItem("projects");
  projectsFromLocal = JSON.parse(projectsFromLocal);
  let projects = new Projects();
  if (projectsFromLocal.length == 0) return projects;
  for (let projectFromLocal of projectsFromLocal) {
    let title = projectFromLocal["title"];
    let todos = projectFromLocal["todos"];
    let project = new Project(title);
    for (let todo of todos) {
      let todoTitle = todo["title"];
      let todoDescription = todo["description"];
      let todoDue = todo["due"];
      let todoPriority = todo["priority"];
      let projectTodo = new Todo(
        todoTitle,
        todoDescription,
        todoDue,
        todoPriority
      );
      project.addTodo(projectTodo);
    }
    projects.addProject(project);
  }
  return projects;
}

// Updates storage in browser to reflect added item.
export function updateInboxStorage(inbox) {
  localStorage["inbox"] = inbox.stringify();
}

export function updateProjectsStorage(projects) {
  localStorage["projects"] = projects.stringify();
}
