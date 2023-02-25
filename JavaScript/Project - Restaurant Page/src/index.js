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

  // On page load, select the about page first
  const content = document.querySelector(".content");
  content.appendChild(aboutPage());

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
  
  // First clear the content element, then append the selected page the .content
  let content = document.querySelector(".content");
  let headerName = this.className;

  content.innerHTML = "";
  let page = chooseComponent(headerName);
  content.appendChild(page);
}

function chooseComponent(headerName) {
  // const element = document.createElement("div");

  let element = "";

  if (headerName.includes('about')) {
    // console.log('about');
    element = aboutPage();
  } else if (headerName.includes('contact'))  {
    // console.log('contact');
    element = contactPage();
  } else {
    // console.log('menu');
    element = menuPage();
  }
  return element;
}