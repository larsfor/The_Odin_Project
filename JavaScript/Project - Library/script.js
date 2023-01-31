document.addEventListener('DOMContentLoaded', () => {
    generateTable();
    
    // Add action to the newBookForm, both add to library and reset form
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.addEventListener('submit', (event) => {
        newBook(newBookForm);
        event.preventDefault();
    });
});

let myLibrary = [];
    
function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    updateTable();
}

function displayBooks () {
    myLibrary.forEach(function(book) {
        console.log(book);
    });
}

function removeBook () {
    myLibrary.splice(this.id, 1);
    updateTable();
}

function updateTable() {
    let table = document.querySelector("#libraryTable");
    table.innerHTML = "";
    generateTable();
}

function newBook(form) {
    let author = form['author'].value;
    let title = form['title'].value;
    let pages = form['pages'].value;
    let read = form['read'].checked;
    
    if (read === false) {
        read = 'Not read';
    } else {
        read = 'Read';
    };

    // console.log(read);
    let newBook = new Book(author, title, pages, read);
    addBookToLibrary(newBook);

    // reset form
    form.reset();
}

// adding some examples to the library
const theHobbit = new Book('J.R.R. Tolkien', 'The Hobbit', 295, 'Not read')
const LOTR = new Book('J.R.R. Tolkien', 'Lord of the Rings', 423, 'Not read')
const HGTTG = new Book('Douglas Adams', "Hitchhicker's Guide to the Galaxy", 208, 'Not read')

myLibrary.push(theHobbit, LOTR, HGTTG);


function generateTable() {
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
    for (let i = 0; i < myLibrary.length; i++) {

        // creates a table row
        const row = document.createElement("tr");
        row.id = `row-${i}`;

        // getting the different attributes
        const book = myLibrary[i];
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
        const button = document.createElement("button");
        button.innerHTML = "Remove from list";
        button.id = i
        button.addEventListener("click", removeBook);


        // appending the cell to the row
        row.appendChild(autorCell);
        row.appendChild(titleCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);
        row.appendChild(button);

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    // appends the table to the div with the libraryTable id
    document.querySelector('#libraryTable').append(tbl);
}

