import './style.css';
import initalPage from './initalPage';
import aboutPage from './aboutPage';

let content = document.querySelector('#content');
initalPage().forEach((element) => {
  content.appendChild(element);
})