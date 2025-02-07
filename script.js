const addBtn = document.getElementById("add-todo-btn");
const todoInput = document.getElementById("todo-inputs");
const todoContainer =document.querySelector(".todo-container");


let todos =[];
addBtn.addEventListener("click", () =>{

    todos .push(todoInput.value);

    console.log(todos);

    updateUi();
    todoInput.value= ""; 
});

function updateUi() {
    todosContainer.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
    const para = document.createElement("p");
    para.innerHTML = todos[i];
    todosContainer.append(para);
    }
}

/*

    const todoPara = document.createElement("p");
todoPara.innerText = todoInput.value;

    todosContainer.append(todoPara);

    todoInput.value = "";

  */