import './style.css';
import initialPage from "./initialPage";
import todoItem from './todoItem';

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM content loaded');
    event.preventDefault();

    // Apply the holy grail css (flex) to the page, including some basic todo-functions
    const content = document.querySelector(".container");
    initialPage().forEach(e => {
        content.appendChild(e);
    });
})

function createTodo(title, description, dueDate, priority) {
    const todo = todoItem(title, description, dueDate, priority);
    return todo;
}