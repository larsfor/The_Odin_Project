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

    const formHeader = document.createElement("div");
    formHeader.classList.add("formHeader");

    const formDescription = document.createElement("div");
    formDescription.classList.add("formDescription");

    // Adding input fields to the form
    const title = document.createElement("input");
    const titleLabel = document.createElement("label");
    titleLabel.innerHTML = "Title";

    const dueDate = document.createElement("input");
    const titleDueDate = document.createElement("label");
    titleDueDate.innerHTML = "Due date";
    dueDate.type = "date";

    const priority = document.createElement("input");
    const titlePriority = document.createElement("label");
    titlePriority.innerHTML = "Priority";
    priority.type = "range";
    priority.min = 1;
    priority.max = 5;
    priority.id = "priority"

    const description = document.createElement("textarea");
    // const titleDescription = document.createElement("label");
    // titleDescription.innerHTML = "Description";
    description.placeholder = "Enter your next todo here."
    description.style.width = "80%";
    description.style.height = "80%";

    const buttonHolder = document.createElement("div");
    const submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.id = "submitButton";
    submit.classList.add("submit");

    buttonHolder.appendChild(submit);

    // Dividing the form into a header and a description area
    formHeader.appendChild(titleLabel);
    formHeader.appendChild(title);
    formHeader.appendChild(titleDueDate);
    formHeader.appendChild(dueDate);
    formHeader.appendChild(titlePriority);
    formHeader.appendChild(priority);
    form.appendChild(formHeader);
    
    // formDescription.appendChild(titleDescription);
    formDescription.appendChild(description);
    form.appendChild(formDescription);
    
    // Appending the form to the main element
    main.appendChild(form);
    main.appendChild(buttonHolder);

    return [header, main, left, right, footer];
}

export default initialPage;