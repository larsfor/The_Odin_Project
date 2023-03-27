import './style.css';
// import initialPage from "./initialPage";
import todoItem from './todoItem';

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM content loaded');

    const todoForm = document.querySelector("#newTodoForm");
    todoForm.addEventListener("submit", (todo) => {
        let newTodo = createTodo(todoForm);
        addTodoToLibrary(newTodo);
        console.log(todoLibrary);        

        todo.preventDefault();
    })
    event.preventDefault();
})

const todoLibrary = [];

function createTodo(form) {
    let title = form['title'].value;
    let description = form['description'].value;
    let dueDate = form['dueDate'].value;
    let priority = form['priority'].value;

    const todo = todoItem(title, description, dueDate, priority);
    return todo;
}

function addTodoToLibrary(todoItem) {
    todoLibrary.push(todoItem);
}