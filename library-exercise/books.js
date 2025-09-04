//Currently working on the book example on https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors
// Next step is the first project, and also installing node to run the code locally

// TODO:  1) refresh form on submit time  2) Wrap the bookshelf
function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;

    this.info = function () {
        console.log("hello");
    }
}
const bookList = []
const Book1 = new Book("Egg's Title", "Kayla Shtink Bae", "Read");
 
bookList.push(Book1);


function removeBookBad(title, inputBooks) { /* BAD because it's inefficient, use */
    inputBooks.forEach((book, index) => {
        if (book.title === title) {
            inputBooks.pop(book)
        }
        displayBooks(inputBooks)
    });
}

function removeBook(target, inputBooks) {
    target_book = target.parentNode;
    list_of_books = Array.from(target_book.parentNode.children) // traverses the DOM
    index_of_target = list_of_books.indexOf(target_book)
    inputBooks.splice(index_of_target, 1)
}
function displayBooks(inputBooks) {
    current_books = document.getElementById('bookshelf')
    current_books.innerHTML = ""

    inputBooks.forEach(Book_Obj => {
        //Book Object
        const new_div = document.createElement("div");
        new_div.classList.add('book'); // when creating the new div make sure to set its class as a book
        
        const remove_button = document.createElement("button");
        remove_button.classList.add('book_remove')
        remove_button.textContent = "X";
        remove_button.addEventListener("click", function (event) {
            event.preventDefault();
            removeBook(event.target, inputBooks);
            displayBooks(inputBooks)
            // removeBookBad(Book_Obj.title, inputBooks);
        })
        new_div.appendChild(remove_button);

        //Book details construction. can we clean this up?
        let new_div_metadata = document.createElement("p");
        new_div_metadata.textContent = Book_Obj.title;
        new_div.appendChild(new_div_metadata)
        new_div_metadata = document.createElement("p");
        new_div_metadata.textContent = Book_Obj.author;
        new_div.appendChild(new_div_metadata)
        new_div_metadata = document.createElement("p");
        if (Book_Obj.isRead === "on") {
            new_div_metadata.textContent = "Read"
        } else {
            new_div_metadata.textContent = "Not Read"
        }
        new_div.appendChild(new_div_metadata)

        //Now add the new book back to the dom
        const book_list = document.getElementById("bookshelf");
        book_list.appendChild(new_div);

    })
}

function addBook(new_title, new_author, new_read) {
    const new_book = new Book (new_title, new_author, new_read)
    bookList.push(new_book)
    console.log(`Adding new Book! ${new_book.title}`)
}

document.addEventListener("DOMContentLoaded", function() {
    displayBooks(bookList);
});


const new_form = document.getElementById('submit_button'); //Change this to the button, but keeping it as form id for now to test
new_form.addEventListener("click", function (event) {
    event.preventDefault()
    const new_title = document.getElementById('book_title_input').value;
    const new_author = document.getElementById('book_author_input').value;
    const new_read = document.getElementById('book_read_input').value;
    console.log("before", bookList)

    addBook(new_title, new_author, new_read)
    console.log(bookList)
    displayBooks(bookList)
    console.log("after", bookList)
})

const remove_trigger = document.get

