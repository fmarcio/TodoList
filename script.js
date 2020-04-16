//SELECTING ELEMENTS
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EVENT LISTENERS
todoBtn.addEventListener("click", createTodo);
todoList.addEventListener("click", checkDelete);

//FUNCTIONS
function createTodo(e) {
    //Avoid button submission
    e.preventDefault();

    //Create todo div
    const todoDiv = document.createElement("div");
    //Adding class "todo" to div
    todoDiv.classList.add("todo");

    //Create todo li
    const todoLi = document.createElement("li");
    //Put input value on todoLi
    todoLi.innerText = todoInput.value;
    //Add class "todo-item" on li
    todoLi.classList.add("todo-item");
    //Append todoLi on todoDiv
    todoDiv.appendChild(todoLi);

    //Create todo check button
    const checkBtn = document.createElement("button");
    //Add Font Awesome check icon inside the button
    checkBtn.innerHTML = '<i class="far fa-check-square"></i>';
    //Add "checked-btn" class
    checkBtn.classList.add("checked-btn");
    //Append checkBtn on todoDiv
    todoDiv.appendChild(checkBtn);
    
    //Create delete todo button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    //Append Div, containing li and buttons, to ul
    todoList.appendChild(todoDiv);

    //Clear input after adding todo
    todoInput.value = "";
}

function checkDelete(e) {
    //Tracking which button the user clicks
    const item = e.target;

    //if the first item clicked is the check btn
    if (item.classList[0] === "checked-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("checked");
    }

    //if the first item clicked is the delete btn
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    
}