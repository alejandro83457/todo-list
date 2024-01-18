import { Todo, SimpleTodo } from "./todo";
import { Inbox } from "./inbox";

// if (localStorage.length > 0) console.log("Not empty!");
// else console.log("Empty!");

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
