const initialPage = () => {
    const header = document.createElement("header");
    const main = document.createElement("main");
    const left = document.createElement("aside");
    const right = document.createElement("aside");
    const footer = document.createElement("footer");

    header.classList.add("header");
    main.classList.add("main");
    left.classList.add("left");
    right.classList.add("right");
    footer.classList.add("footer");

    header.innerHTML = "header";
    main.innerHTML = "main";
    left.innerHTML = "left";
    right.innerHTML = "right";
    footer.innerHTML = "footer";


    // Adding form to the main element to create todo items
    const form = document.createElement("form");
    form.classList.add("form");
    // form.innerHTML = "form";

    // Adding input fields to the form
    const title = document.createElement("input");
    const titleLabel = document.createElement("label");
    titleLabel.innerHTML = "Title";
    
    const description = document.createElement("input");
    const titleDescription = document.createElement("label");
    titleDescription.innerHTML = "Description";

    const dueDate = document.createElement("input");
    const titleDueDate = document.createElement("label");
    titleDueDate.innerHTML = "Due date";

    const priority = document.createElement("input");
    const titlePriority = document.createElement("label");
    titlePriority.innerHTML = "Priority";

    // Adding the different form elements to the form
    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(titleDescription);
    form.appendChild(description);
    form.appendChild(titleDueDate);
    form.appendChild(dueDate);
    form.appendChild(titlePriority);
    form.appendChild(priority);


    // Appending the form to the main element
    main.appendChild(form);

    return [header, main, left, right, footer];
}

export default initialPage;