import { ship } from './ship.js';
import './style.css';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = ship;
    element.appendChild(btn);
    
    return element;
  }
  
  let element = component(); // Store the element to re-render on ship.js changes
  document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./ship.js', function() {
      console.log('Accepting the updated printMe module!');
      document.body.removeChild(element);
      element = component(); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
    })
  }