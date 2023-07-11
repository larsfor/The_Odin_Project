import './style.css';
// import initialPage from "./initialPage";
import todoItem from './todoItem';
import { todoProjects, newProject } from './todoProjects';

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM content loaded');
    
    
    // Generate the project list
    generateProjectsList();
    
    // Adding the action to add the todo item to the project library
    // when submitting the item.
    const todoForm = document.querySelector("#newTodoForm");
    todoForm.addEventListener("submit", (todo) => {
        let newTodo = createTodo(todoForm);
        addTodoToProjects(newTodo, 1);
        // generateProjectsList();
        // todoForm.reset();
        todo.preventDefault();
    })
    // event.preventDefault();
})

const projects = todoProjects();

const addProject = document.querySelector(".material-symbols-outlined")
// console.log(newProject);
addProject.addEventListener("click", () => {
    const project = newProject('test');
    projects.push(project);
    console.log(project);
    generateProjectsList();
    // console.log(newProject);
})

function generateProjectsList() {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";
    projects.forEach((item) => {
        const projectsDiv = document.createElement("div");
        projectsDiv.classList.add("project-item");
        projectsDiv.id = `project-${item.projectNumber}`
        projectsDiv.innerHTML = item.projectName;
        projectsContainer.appendChild(projectsDiv);
    })
}

function createTodo(form) {
    let title = form['title'].value;
    let description = form['description'].value;
    let dueDate = form['dueDate'].value;
    let priority = form['priority'].value;

    const todo = todoItem(title, description, dueDate, priority);
    // generateProjectsList();
    return todo;
}

function addTodoToProjects(todoItem, projectID) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");
    todoDiv.innerHTML = todoItem.title;

    const projectDiv = document.getElementById(`project-${projectID}`);
    projectDiv.appendChild(todoDiv)
}