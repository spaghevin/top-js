//Currently working on the book example on https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors
// Next step is the first project, and also installing node to run the code locally
function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;

    this.info = function () {
        console.log("hello");
    }
}

const Book1 = new Book("Egg's Title", "Kayla Shtink Bae", "Read")
Book1.info()

function displayBook(Book_Obj) {
    document.getElementById('book-title').innerHTML = Book_Obj.title;
    document.getElementById('book-author').innerHTML = Book_Obj.author;
    document.getElementById('book-read').innerHTML = Book_Obj.isRead;

}

document.addEventListener("DOMContentLoaded", function() {
    displayBook(Book1);
});
