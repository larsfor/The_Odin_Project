import './style.css';
import initalPage from './initalPage';
import aboutPage from './aboutPage';
import contactPage from './contactPage';
import menuPage from './menuPage';

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

// On click, select the corresponding header and insert the approprirate page
function selectHeader() {
  
  const headerChilds = document.querySelector(".header").children;
  for (let i = 0; i < headerChilds.length; i++) {
    const child = headerChilds[i];
    child.classList.remove("selected");
  }
  this.classList.add("selected");
  
  let content = document.querySelector(".content");
  let contentName = this.className;

  content.innerHTML = "";
  let page = component(contentName);
  content.appendChild(page);
}

function component(contentName) {
  const element = document.createElement("div");

  if (contentName.includes('about')) {
    // console.log('about');
    element.textContent = aboutPage();
  } else if (contentName.includes('contact'))  {
    // console.log('contact');
    element.textContent = contactPage();
  } else {
    // console.log('menu');
    element.textContent = menuPage();
  }
  return element;
}