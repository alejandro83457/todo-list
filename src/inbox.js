class Inbox {
  #inbox = [];

  addTodo(todo) {
    this.#inbox.push(todo);
  }

  get inbox() {
    return this.#inbox;
  }

  showInbox() {
    for (let todo of this.#inbox) {
      todo.showTodo();
    }
  }
}

export { Inbox };
