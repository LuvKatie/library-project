const bookDisplay = document.getElementById('book-display');
const submitBook = document.getElementById('book-submit');
const bookCards = document.querySelectorAll('.book-card');

const inputFields = document.querySelectorAll('input[type="text"]');
const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const yes = document.getElementById('readYes');
const no = document.getElementById('readNo');

let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.bookNumber = myLibrary.length + 1; // data-attribute given corresponding to the specific book
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

submitBook.addEventListener('click', () => {
    for (i = 0; i < inputFields.length; i++) {
        if(!(inputFields[i].checkValidity())) {
            alert(`You must fill out the ( ${inputFields[i].name} ) field!`);
            return;
        } else if(!yes.checked && !no.checked) {
            alert('You forgot to check yes or no to having read this book.');
            return;
        } else {
            console.log('congratulations all fields have passed validation!')
            createBook();
            return;
        }
    }
})

function createBook() {
    myLibrary.push(new Book(author.value, title.value, pages.value, yes.checked));

    // Figured out how to add new books to the array as many times as we want
    // Now we have to work on adding the new books to the display each time we have a new addition
    
    // Add a ' NEW BOOK ' button that will actually bring up the form to have new books be added

    // Button to remove a book from display; 
    // Target book data-attribute bookNumber.

    // Button to change a books read status; we can just assign the books read value to false or true.
    // Example: myLibrary[0].read = true;
    // Tested it and it works.
}