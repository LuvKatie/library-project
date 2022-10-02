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
    const btnDiv = document.createElement('div');

    const p_author = document.createElement('p');
    const p_title = document.createElement('p');
    const p_pages = document.createElement('p');
    const p_read = document.createElement('p');

    const readBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    let newestBook = myLibrary.length - 1;

    p_author.innerHTML = `Author: ${myLibrary[newestBook].author}`;
    p_title.innerHTML = `Title: ${myLibrary[newestBook].title}`;
    p_pages.innerHTML = `Pages: ${myLibrary[newestBook].pages}`;
    p_read.innerHTML = `Have Read: ${myLibrary[newestBook].read}`;
    readBtn.innerHTML = 'Read?';
    deleteBtn.innerHTML = 'Delete Book';


    bookDisplay.appendChild(newDiv);

    newDiv.classList.add('book-card');
    newDiv.appendChild(childDiv);

    childDiv.classList.add('book', `${newestBook + 1}`);
    p_author.classList.add(`author`);
    p_title.classList.add(`title`);
    p_pages.classList.add('pages');
    p_read.classList.add(`read`);
    readBtn.classList.add('read-status');
    deleteBtn.classList.add('delete-book');
    btnDiv.classList.add('card-btns');
    childDiv.append(p_author, p_title, p_pages, p_read, btnDiv);
    btnDiv.append(readBtn, deleteBtn);

    // Toggling read status
    readBtn.addEventListener('click', () => {
        if(btnDiv.previousElementSibling.innerHTML == 'Have Read: No'){
        btnDiv.previousElementSibling.innerHTML = 'Have Read: Yes';
        return;
        } else {
        btnDiv.previousElementSibling.innerHTML = 'Have Read: No';
        }
    })
    
    // Deleting book card
    deleteBtn.addEventListener('click', () => {
        const cardSelect = deleteBtn.closest('.book-card');
        cardSelect.remove();
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