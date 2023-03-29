import './style.css';
// import initialPage from "./initialPage";
import todoItem from './todoItem';
import todoProjects from './todoProjects';

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM content loaded');

    // Refresh and re-generate the project list
    generateProjectsList();

    // Adding the action to add the todo item to the project library
    // when submitting the item.
    const todoForm = document.querySelector("#newTodoForm");
    todoForm.addEventListener("submit", (todo) => {
        let newTodo = createTodo(todoForm);
        addTodoToProjects(newTodo, 1);
        // generateProjectsList();
        todo.preventDefault();
    })
    event.preventDefault();
})

const projects = todoProjects();

function generateProjectsList() {
    const projectsContainer = document.querySelector(".projects-container");
    // console.log('starting');
    projectsContainer.innerHTML = "";
    // console.log('list cleared');
    projects.forEach((item) => {
        const projectsDiv = document.createElement("div");
        projectsDiv.classList.add("grid-item");
        projectsDiv.id = `grid-item-${item.projectNumber}`
        projectsDiv.innerHTML = item.projectName;
        projectsContainer.appendChild(projectsDiv);
    })
    // console.log('updated cleared');
}

function createTodo(form) {
    let title = form['title'].value;
    let description = form['description'].value;
    let dueDate = form['dueDate'].value;
    let priority = form['priority'].value;

    const todo = todoItem(title, description, dueDate, priority);
    generateProjectsList();
    return todo;
}

function addTodoToProjects(todoItem, projectID) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("grid-item");
    // console.log(todoItem);
    todoDiv.innerHTML = todoItem.title;

    const projectDiv = document.getElementById(`grid-item-${projectID}`);
    projectDiv.appendChild(todoDiv)
}