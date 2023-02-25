import './style.css';
import initalPage from './initalPage';
import aboutPage from './aboutPage';

document.addEventListener("DOMContentLoaded", (event) => {
  console.log('DOM Content loaded');

  const headerChilds = document.querySelector(".header").children;
  for (let i = 0; i < headerChilds.length; i++) {
    const element = headerChilds[i];
    element.addEventListener("click", selectHeader);
  }

  event.preventDefault();
})

// Appending the initial page with the holy grail, background and styles
let content = document.querySelector('#content');
initalPage().forEach((element) => {
  content.appendChild(element);
})

function selectHeader() {
  const headerChilds = document.querySelector(".header").children;
  for (let i = 0; i < headerChilds.length; i++) {
    const child = headerChilds[i];
    child.classList.remove("selected");
  }

  this.classList.add("selected");
}