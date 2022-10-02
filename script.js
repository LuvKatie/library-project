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
    const newDiv = document.createElement('div');
    const childDiv = document.createElement('div');

    const p_author = document.createElement('p');
    const p_title = document.createElement('p');
    const p_pages = document.createElement('p');
    const p_read = document.createElement('p');

    const readBtn = document.createElement('button');

    let newestBook = myLibrary.length - 1;

    p_author.innerHTML = `Author: ${myLibrary[newestBook].author}`;
    p_title.innerHTML = `Title: ${myLibrary[newestBook].title}`;
    p_pages.innerHTML = `Pages: ${myLibrary[newestBook].pages}`;
    p_read.innerHTML = `Have Read: ${myLibrary[newestBook].read}`;
    readBtn.innerHTML = 'Read?';

    bookDisplay.appendChild(newDiv);

    newDiv.classList.add('book-card');
    newDiv.appendChild(childDiv);

    childDiv.classList.add('book', `${newestBook + 1}`);
    p_author.classList.add(`author`);
    p_title.classList.add(`title`);
    p_pages.classList.add('pages');
    p_read.classList.add(`read`);
    readBtn.classList.add('read-status');
    childDiv.append(p_author, p_title, p_pages, p_read, readBtn);

    // Attaching event listener to toggle Read Status of that particular book
    const readBtnFunc = document.querySelector('.read-status');

    readBtnFunc.addEventListener('click', () => {
    if(readBtnFunc.previousElementSibling.innerHTML == 'Have Read: No'){
        readBtnFunc.previousElementSibling.innerHTML = 'Have Read: Yes';
        return;
    } else {
        readBtnFunc.previousElementSibling.innerHTML = 'Have Read: No';
    };
})
    
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
    if(yes.checked) {
        myLibrary.push(new Book(author.value, title.value, pages.value, 'Yes'));
    } else {
        myLibrary.push(new Book(author.value, title.value, pages.value, 'No'));
    }

    addBookToDisplay();
}

// Figured out how to add new books to the array as many times as we want
// Now we have to work on adding the new books to the display each time we have a new addition

// Add a ' NEW BOOK ' button that will actually bring up the form to have new books be added

// Button to remove a book from display; 
// Target book data-attribute bookNumber.

// Or every time we add a book to the page we can give it a specific class

// Button to change a books read status; we can just assign the books read value to false or true.
// Example: myLibrary[0].read = true;
// Tested it and it works.