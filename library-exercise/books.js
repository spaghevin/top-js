//Currently working on the book example on https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors
// Next step is the first project, and also installing node to run the code locally

// TODO: We need to store the books in an array, then display the array with anotehr function. Then when we take in form data, we add data to array and rerender display.
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
Book1.info();

function displayBooks(bookList) {
    bookList.forEach(Book_Obj => {

        //Book Object
        const new_div = document.createElement("div");
        new_div.classList.add('book'); // when creating the new div make sure to set its class as a book


        //Book details construction. can we clean this up?
        let new_div_metadata = document.createElement("p");
        new_div_metadata.textContent = Book_Obj.title;
        new_div.appendChild(new_div_metadata)
        new_div_metadata = document.createElement("p");
        new_div_metadata.textContent = Book_Obj.author;
        new_div.appendChild(new_div_metadata)
        new_div_metadata = document.createElement("p");
        new_div_metadata.textContent = Book_Obj.isRead;
        new_div.appendChild(new_div_metadata)
        

        //Now add the new book back to the dom
        const book_list = document.getElementById("bookshelf");
        book_list.appendChild(new_div);

        // document.getElementById('book-title').innerHTML = Book_Obj.title;
        // document.getElementById('book-author').innerHTML = Book_Obj.author;
        // document.getElementById('book-read').innerHTML = Book_Obj.isRead;
    })
}

// function addBook()

document.addEventListener("DOMContentLoaded", function() {
    displayBooks(bookList);
});


const new_form = document.getElementById('entry_form'); //Change this to the button, but keeping it as form id for now to test
new_form.addEventListener("click", function () {

    const new_title = document.getElementById('book_title_input');
    const new_author = document.getElementById('book_author_input');
    const new_read = document.getElementById('book_read_input');

    console.log("Reached")
    console.log(new_title.value)
})

