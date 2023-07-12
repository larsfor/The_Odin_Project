document.addEventListener('DOMContentLoaded', () => {
    // Adding some examples to the library
    const theHobbit = new Book('J.R.R. Tolkien', 'The Hobbit', 295, 'Not read')
    const LOTR = new Book('J.R.R. Tolkien', 'Lord of the Rings', 423, 'Not read')
    const HGTTG = new Book('Douglas Adams', "Hitchhicker's Guide to the Galaxy", 208, 'Not read')
    let library = new Library([theHobbit, LOTR, HGTTG]);
    generateTable(library.books);


    // Add action to the newBookForm, both add to library and reset form
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        library.addBook(newBookForm);
        newBookForm.reset();
    });
});

// Adding API constraints to the input
const authorForm = document.getElementById("author")
const authorFormError = document.querySelector("#author + span.authorError")
const titleForm = document.getElementById("title")
const titleFormError = document.querySelector("#title + span.titleError")
const pagesForm = document.getElementById("pages")
const pagesFormError = document.querySelector("#pages + span.pagesError")


authorForm.addEventListener("input", (e) => {
    if (authorForm.validity.valueMissing) {
        authorFormError.textContent = "You need to enter an author."
    }
})

titleForm.addEventListener("input", (e) => {
    if (titleForm.validity.valueMissing) {
        titleFormError.textContent = "You need to enter a book title."
    }
})

pagesForm.addEventListener("input", (e) => {
    if (pagesForm.validity.valueMissing) {
        pagesFormError.textContent = "You need to add the number of pages."
    }
})

// The classes

class Book {
    constructor(author, title, pages, read) {
        this.author = author
        this.title = title
        this.pages = pages
        this.read = read
    }
}

class Library {
    constructor(library) {
        this.library = library;
    }

    get length() {
        return this.library.length;
    }

    get books() {
        return this.library;
    }

    addBook(form) {
        let author = form['author'].value;
        let title = form['title'].value;
        let pages = form['pages'].value;
        let read = form['read'].checked;
        
        read === false ? read = 'Not read' : read = 'Read';
    
        let book = new Book(author, title, pages, read);
        this.library.push(book);
        updateTable(this.library, form);
    }
}

function removeBook(library, id) {
    library.splice(id, 1);
    updateTable(library);
}

function markRead(library, id) {
    let book = library[id]
    book.read = book.read === 'Read' ? 'Not read' : 'Read'
    updateTable(library);
}

function updateTable (library) {
    const table = document.querySelector("#libraryTable")
    table.innerHTML = '';
    generateTable(library);
}

function generateTable(library) {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // creates the headers
    const authorHeader = document.createElement("th");
    const titleHeader = document.createElement("th");
    const pagesHeader = document.createElement("th");
    const readHeader = document.createElement("th");
    
    // creating header titles
    const authorTitle = document.createTextNode("Author");
    const titleTitle = document.createTextNode("Title");
    const pagesTitle = document.createTextNode("Pages");
    const readTitle = document.createTextNode("Read?");

    // appending the titles to the <th>
    authorHeader.appendChild(authorTitle);
    titleHeader.appendChild(titleTitle);
    pagesHeader.appendChild(pagesTitle);
    readHeader.appendChild(readTitle);

    // appending the titlees to the table
    tbl.appendChild(authorHeader);
    tbl.appendChild(titleHeader);
    tbl.appendChild(pagesHeader);
    tbl.appendChild(readHeader);

    // creating all cells
    for (let i = 0; i < library.length; i++) {

        // creates a table row
        const row = document.createElement("tr");
        row.id = `row-${i}`;

        // getting the different attributes
        const book = library[i];
        const author = book.author;
        const title = book.title;
        const pages = book.pages;
        const read = book.read;

        // creating a <td> cell for each attribute
        const autorCell = document.createElement("td");
        const titleCell = document.createElement("td");
        const pagesCell = document.createElement("td");
        const readCell = document.createElement("td");

        // appending the attributes to the cell
        autorCell.append(author);
        titleCell.append(title);
        pagesCell.append(pages);
        readCell.append(read);

        // create a button to delete the entry
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove from list";
        removeButton.id = i
        removeButton.addEventListener("click", () => removeBook(library, removeButton.id));

        // create a button to change read status
        const readButton = document.createElement("button");
        readButton.innerHTML = "Mark book as read/unread";
        readButton.id = i
        readButton.addEventListener("click", () => markRead(library, readButton.id));

        // appending the cell to the row
        row.appendChild(autorCell);
        row.appendChild(titleCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);
        row.appendChild(removeButton);
        row.appendChild(readButton);

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    // appends the table to the div with the libraryTable id
    document.querySelector('#libraryTable').append(tbl);
}