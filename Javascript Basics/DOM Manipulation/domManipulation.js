const container = document.querySelector('#container');

// Create a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm red!";

// Create an <h3> with blue text that says “I’m a blue h3!”
const hThree = document.createElement("h3");
hThree.style.color = 'blue';
hThree.textContent = "I'm a blue h3!";

/*
create a <div> with a black border and pink background color with the following elements inside of it:

    another <h1> that says “I’m in a div”
    a <p> that says “ME TOO!”
*/

const div = document.createElement('div');
div.style.border = 'solid';
div.style.background = 'pink';

const hOne = document.createElement('h1');
hOne.textContent = "I'm in a div";

const pTwo = document.createElement('p');
pTwo.textContent = 'Me TOO!'

// Append the H1 and the P to the newly created div
div.appendChild(hOne);
div.appendChild(pTwo);

// Append all the elements to the container
container.appendChild(p);
container.appendChild(hThree);
container.appendChild(div);