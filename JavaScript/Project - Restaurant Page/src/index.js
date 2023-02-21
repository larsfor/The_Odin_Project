import './style.css';
import aboutPage from './aboutPage';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = aboutPage('Cody');
  return element;
}

content = document.querySelector('#content');
content.appendChild(component());