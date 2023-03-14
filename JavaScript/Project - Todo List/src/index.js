import './style.css';
import initialPage from "./initialPage";

document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM content loaded');
    event.preventDefault();
})

const content = document.querySelector(".container");
initialPage().forEach(e => {
    content.appendChild(e);
});
