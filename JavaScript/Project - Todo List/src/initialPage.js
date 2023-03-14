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

    return [header, main, left, right, footer];
}

export default initialPage;