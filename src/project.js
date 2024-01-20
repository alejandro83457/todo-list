export class Projects {
  #projects = [];

  get projects() {
    return this.#projects;
  }

  addProject(project) {
    this.#projects.push(project);
  }

  removeProject(title) {
    let index;
    for (let i = 0; i < this.#projects.length; i++) {
      if (this.#projects[i].title == title) index = i;
    }
    this.#projects.splice(index, 1);
  }

  stringify() {
    let projects = [];
    for (let project of this.#projects) {
      projects.push(project.stringify());
    }
    return JSON.stringify(projects);
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
  stringify() {
    let project = {};
    project["title"] = this.#project["title"];
    project["todos"] = [];
    for (let todo of this.#project["todos"]) {
      project["todos"].push(todo.getTodo());
    }
    return project;
  }
  addTodo(todo) {
    this.#project["todos"].push(todo);
  }
  removeTodo(title) {
    let index;
    for (let i = 0; i < this.#project["todos"].length; i++) {
      if (this.#project["todos"][i].title == title) index = i;
    }
    this.#project["todos"].splice(index, 1);
  }
  showProject() {
    console.log(this.#project["title"]);
    for (let todo of this.#project["todos"]) {
      todo.showTodo();
    }
  }
}
