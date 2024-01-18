class Inbox {
  #inbox = [];

  addTodo(todo) {
    this.#inbox.push(todo);
  }

  get inbox() {
    return this.#inbox;
  }

  stringify() {
    let inbox = [];
    for (let todo of this.#inbox) {
      inbox.push(todo.getTodo());
    }
    return JSON.stringify(inbox);
  }

  showInbox() {
    for (let todo of this.#inbox) {
      todo.showTodo();
    }
  }
}

export { Inbox };
