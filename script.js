const addButton = document.getElementById('add-book');
const dialog = document.getElementById('add-book-dialog');
const addBookButton = document.querySelector('.add-book-button');
const addBookForm = document.querySelector('.add-book-form');
const submitForm = document.getElementById('submit-form');
var books = [];

function showDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}


function displayBooks() {
    const bookList = document.querySelector('.book-layout');
    bookList.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p>${book.pages} Pages</p>
            <div class="switch-button">
                <p>Have you read it?</p>
                <label class="switch">
                    <input type="checkbox" ${book.isRead ? 'checked' : ''}>
                    <span class="slider round" ></span>
                </label>
            </div>
            <button class="delete-button" onclick="deleteBook(this.parentNode)"><i class="bi bi-trash"></i>Delete Book</button>
        `;
        bookList.appendChild(bookCard);
    }
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('is-read').checked;
    if (title === '' || author === '' || pages === '') {
        alert('Please fill in all fields');
        return;
    }
    books.push(
        {
            "title": title,
            "author": author,
            "pages": pages,
            "isRead": isRead
        }
    );
    closeDialog();
    displayBooks();
    addBookForm.reset();
}

function deleteBook(bookArray) {
    books.pop();
    bookArray.remove();
}

submitForm.addEventListener('click', e => {
    e.preventDefault();
    addBookToLibrary();
});









