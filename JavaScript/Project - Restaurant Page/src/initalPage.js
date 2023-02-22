const initalPage = () => {
    const header = document.createElement("header");
    const left = document.createElement("nav");
    const middle = document.createElement("main");
    const right = document.createElement("aside");
    const footer = document.createElement("footer");

    header.classList.add("header");
    left.classList.add("left");
    middle.classList.add("middle");
    right.classList.add("right");
    footer.classList.add("footer");
    
    header.innerHTML = "header";
    left.innerHTML = "left";
    middle.innerHTML = "middle";
    right.innerHTML = "right";
    footer.innerHTML = `<a href="http://www.freepik.com">Background designed by Bimbimkha / Freepik</a>`;


    return [header, middle, left, right, footer];
}

export default initalPage;