import './style.css';
import image from './restaurant.jpg';

function component() {
    const element = document.createElement('h1');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Restaurant Page'
    element.setAttribute("id", "content")

    // Add the image to our existing div.
    const myImage = new Image();
    myImage.src = image;
    element.appendChild(myImage);

    return element;
  }
  
  document.body.appendChild(component());