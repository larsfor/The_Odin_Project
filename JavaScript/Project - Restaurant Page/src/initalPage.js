const initalPage = () => {
    const contentBody = document.createElement("div");
    const header = document.createElement("header");
    const left = document.createElement("nav");
    const content = document.createElement("main");
    const right = document.createElement("aside");
    const footer = document.createElement("footer");

    contentBody.classList.add("content-body");
    left.classList.add("left");
    content.classList.add("content");
    right.classList.add("right");
    header.classList.add("header");
    footer.classList.add("footer");
    
    const about = document.createElement("div");
    about.classList.add("about");
    about.classList.add("selected");
    about.innerHTML = "About";
    
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.innerHTML = "Contact";

    
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = "Menu";

    
    footer.innerHTML = `<a href="http://www.freepik.com">Background designed by Bimbimkha / Freepik</a>`;

    // // Adding the different tabs to the header element
    header.appendChild(about);
    header.appendChild(contact);
    header.appendChild(menu);

    // Adding the left, middle and right div to the contentBody div
    contentBody.appendChild(left);
    contentBody.appendChild(content);
    contentBody.appendChild(right);

    return [header, contentBody, footer];
}

export default initalPage;