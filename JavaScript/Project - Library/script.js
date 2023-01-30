document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();

    generateTable();
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
}

function displayBooks () {
    myLibrary.forEach(function(book) {
        console.log(book)
    });
}

const theHobbit = new Book('J.R.R. Tolkien', 'The Hobbit', 295, 'Not read')
const LOTR = new Book('J.R.R. Tolkien', 'Lord of the Rings', 423, 'Not read')
const HGTTG = new Book('Douglas Adams', "Hitchhicker's Guide to the Galaxy", 208, 'Not read')

addBookToLibrary(theHobbit);
addBookToLibrary(LOTR);
addBookToLibrary(HGTTG);

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
    tbl.appendChild(authorHeader)
    tbl.appendChild(titleHeader)
    tbl.appendChild(pagesHeader)
    tbl.appendChild(readHeader)

    // creating all cells
    for (let i = 0; i < myLibrary.length; i++) {

        // creates a table row
        const row = document.createElement("tr");

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

        // appending the cell to the row
        row.appendChild(autorCell);
        row.appendChild(titleCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    // appends the table to the div with the libraryTable id
    document.querySelector('#libraryTable').append(tbl);
}

