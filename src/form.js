export function createInboxForm() {
  let formDiv = document.createElement("div");
  formDiv.setAttribute("id", "inbox-form");

  let titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("placeholder", "Title");

  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("name", "description");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description");

  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "todo-button");
  button.textContent = "Add";

  formDiv.appendChild(titleInput);
  formDiv.appendChild(descriptionInput);
  formDiv.appendChild(button);

  return formDiv;
}
