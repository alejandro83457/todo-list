// Used for projects
class Todo {
  #title;
  #description;
  #due;
  #priority;
  constructor(title, description, due, priority) {
    this.#title = title;
    this.#description = description;
    this.#due = due;
    this.#priority = priority;
  }
  get title() {
    return this.#title;
  }
  get description() {
    return this.#description;
  }
  get due() {
    return this.#due;
  }
  get priority() {
    return this.#priority;
  }
  getTodo() {
    let title = this.#title;
    let description = this.#description;
    let due = this.#due;
    let priority = this.#priority;
    return { title, description, due, priority };
  }
  showTodo() {
    console.log(
      `\t${this.#title} ${this.#description} ${this.#due} ${this.#priority}`
    );
  }
}

// Used for inbox only
class SimpleTodo {
  #title;
  #description;
  constructor(title, description) {
    this.#title = title;
    this.#description = description;
  }
  get title() {
    return this.#title;
  }
  get description() {
    return this.#description;
  }
  getTodo() {
    let title = this.#title;
    let description = this.#description;
    return { title, description };
  }
  showTodo() {
    console.log(`${this.#title} ${this.#description}`);
  }
}

export { Todo, SimpleTodo };
