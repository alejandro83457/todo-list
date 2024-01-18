import { Todo, SimpleTodo } from "./todo";
import { Inbox } from "./inbox";

// Function tests inbox by adding todos and showing its contents.
export function testInbox() {
  let todo1 = new SimpleTodo("title1", "description1");
  let todo2 = new SimpleTodo("title2", "description2");
  let todo3 = new SimpleTodo("title3", "description3");
  let todo4 = new SimpleTodo("title4", "description4");

  let inbox = new Inbox();
  inbox.addTodo(todo1);
  inbox.addTodo(todo2);
  inbox.addTodo(todo3);
  inbox.addTodo(todo4);

  inbox.showInbox();
}

export function clearLocalStorage() {
  localStorage.removeItem("inbox");
  localStorage.removeItem("projects");
}

export function populateInbox() {
  let inbox = JSON.parse(localStorage.getItem("inbox"));
  inbox.push({ title: "title1", description: "description1" });
  inbox.push({ title: "title2", description: "description2" });
  inbox.push({ title: "title3", description: "description3" });
  inbox.push({ title: "title4", description: "description4" });
  localStorage.setItem("inbox", JSON.stringify(inbox));
}

export function printLocalStorage() {
  let inbox = JSON.parse(localStorage.getItem("inbox"));
  for (let todo of inbox) {
    console.log(todo);
  }
}
