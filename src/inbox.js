class Inbox {
  #inbox = [];

  addTodo(todo) {
    this.#inbox.push(todo);
  }

  get inbox() {
    return this.#inbox;
  }

  removeTodo(title) {
    let index;
    for (let i = 0; i < this.#inbox.length; i++) {
      if (this.#inbox[i].title == title) index = i;
    }
    this.#inbox.splice(index, 1);
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
