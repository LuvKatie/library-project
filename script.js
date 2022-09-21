const bookDisplay = document.getElementById('book-display');
const submitBook = document.getElementById('book-submit');
const bookCards = document.querySelectorAll('.book-card');

const inputFields = document.querySelectorAll('input[type="text"]');
const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const yes = document.getElementById('readYes');
const no = document.getElementById('readNo');

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
    const freshBook = new Book(author.value, title.value, pages.value, yes.checked);
    console.log(freshBook.author);
    console.log(freshBook.read ? 'I have read this book!' : 'I have not read this book...');
    // When adding the new book to the page we have to give them a data-attribute that corresponds to their place in the library array
    // Most likely we will give them a class like book-1 book-2 book-0 book-22 etc

    // Each card will have Author, Title, Pages, Read displayed
    // We can style this when we get the functionality down
    // Most likely this will just be entering values after grabbing data from the form and updating the array
    // once the array has been updated we start the process of taking the latest item to add to the display

    // Have to figure out how we can add multiple books to array and if my current method is correct or not
    
    // Then we need to add a ' NEW BOOK ' button that will actually bring up the form to have new books be added

    // Button to remove a book from display; 
    // most likely will just target specific book to remove from array and have display be updated with new set of array items

    // Button to change a books read status; this will just be a simple toggle of class ' read ' and if a book doesn't have such class
    // it will stay ' not read '
}