class Todo {
  #title;
  #description;
  #dueDate;
  #priority;
  constructor(title, description, dueDate, priority) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
  }
  get title() {
    return this.#title;
  }
  get description() {
    return this.#description;
  }
  get dueDate() {
    return this.#dueDate;
  }
  get priority() {
    return this.#priority;
  }
  showTodo() {
    console.log(
      `${this.#title}\n${this.#description}\n${this.#dueDate}\n${
        this.#priority
      }`
    );
  }
}

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
  showTodo() {
    console.log(`${this.#title}\n${this.#description}}`);
  }
}

export { Todo, SimpleTodo };
