const bookDisplay = document.getElementById('book-display');
const bookCards = document.querySelectorAll('.book-card');

let myLibrary = ['KOTLC', 'Alchemist', '48 Laws of Power'];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToDisplay() {
    let totalBookCount = myLibrary.length;
    let i = 1;
    while (i <= totalBookCount) {
        const newDiv = document.createElement('div');
        const childDiv = document.createElement('div');
        bookDisplay.appendChild(newDiv);
        newDiv.classList.add('book-card', `book-${i}`);
        newDiv.appendChild(childDiv);
        i++
    }
}

function addBookToLibrary() {
    let newBook = prompt('Which book would you like to add to the library?: ')
    myLibrary.push(newBook);
    console.log(myLibrary);
    let newestBook = myLibrary.length - 1;
    return console.log(`You have added ${myLibrary[newestBook]} to the library!`)
}