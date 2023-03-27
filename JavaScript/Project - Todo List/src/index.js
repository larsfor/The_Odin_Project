import './style.css';
// import initialPage from "./initialPage";
import todoItem from './todoItem';

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM content loaded');

    // Refresh and re-generate the todo list
    generateTodoList()

    // Adding the action to add the todo item to the library
    // when submitting the item.
    const todoForm = document.querySelector("#newTodoForm");
    todoForm.addEventListener("submit", (todo) => {
        let newTodo = createTodo(todoForm);
        addTodoToLibrary(newTodo);
        todo.preventDefault();
    })
    event.preventDefault();
})

const todoLibrary = [1, 2];
const gridContainer = document.querySelector(".grid-container");

function generateTodoList() {
    console.log('starting');
    gridContainer.innerHTML = "";
    console.log('list cleared');
    todoLibrary.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("grid-item");
        div.innerHTML = item;
        gridContainer.appendChild(div);
    })
}

function createTodo(form) {
    let title = form['title'].value;
    let description = form['description'].value;
    let dueDate = form['dueDate'].value;
    let priority = form['priority'].value;

    const todo = todoItem(title, description, dueDate, priority);
    generateTodoList();
    return todo;
}

function addTodoToLibrary(todoItem) {
    todoLibrary.push(todoItem);
}