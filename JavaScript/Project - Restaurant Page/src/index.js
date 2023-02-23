import './style.css';
import initalPage from './initalPage';
import aboutPage from './aboutPage';

// Appending the initial page with the holy grail, background and styles
let content = document.querySelector('#content');
initalPage().forEach((element) => {
  content.appendChild(element);
})