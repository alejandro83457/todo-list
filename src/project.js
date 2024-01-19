export class Projects {
  #projects = [];
  addProject(project) {
    this.#projects.push(project);
  }

  get projects() {
    return this.#projects;
  }

  removeProject(title) {
    let index;
    for (let i = 0; i < this.#projects.length; i++) {
      if (this.#projects[i].title == title) index = i;
    }
    this.#projects.splice(index, 1);
  }

  showProjects() {
    for (let project of this.#projects) {
      project.showProject();
    }
  }
}

export class Project {
  #project = {};
  constructor(title) {
    this.#project["title"] = title;
    this.#project["todos"] = [];
  }
  get projectTitle() {
    return this.#project["title"];
  }
  get project() {
    return this.#project;
  }
  addTodo(todo) {
    this.#project["todos"].push(todo);
  }
  showProject() {
    console.log(this.#project["title"]);
    for (let todo of this.#project["todos"]) {
      todo.showTodo();
    }
  }
}
