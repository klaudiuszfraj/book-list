//add local storage

//addin book to list
class Book {
    constructor (title, author, release, isbn){
        this.title = title;
        this.author = author;
        this.release = release;
        this.isbn = isbn;
    }
};
//user interface
class UI{
    static displayBooks() {
        const storedBooks = [
            {
                title: "Eloquent JavaScript",
                author: "Marijn Haverbeke",
                release: "2014",
                isbn: "1593275846"
            },
            {
                title: "You Don't Know JS: ES6 & Beyond",
                author: "Kyle Simpson",
                release: "2016",
                isbn: "9781491904244"
            }
        ];
        const books = storedBooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book){
        const list = document.querySelector("#table-list");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.release}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
            `;
        list.appendChild(row);
    }
    static deleteBookFromList(element) {
        if (element.classList.contains("delete")) {
            element.parentElement.parentElement.remove();
        }
    }
    static showAlert(message, className){
        const div = document.querySelector('.message');
        div.className = `message ${className}`;
        div.innerText = message;
        setTimeout(() => {
            div.innerText = 'Submit form to add books';
            div.classList = 'message';}
            ,5000);
         
    }

    static clearFields(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#releaseYear").value = "";
        document.querySelector("#ISBN").value = "";
    }
};
//storage
class Store{
    
}
document.addEventListener("DOMContentLoaded",UI.displayBooks);

document.querySelector("#form-book").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const release = document.querySelector("#releaseYear").value;
    const isbn = document.querySelector("#ISBN").value;

    //validation
    if (title === "" || author === "" || release === "" || isbn === "") {
        UI.showAlert("Pleace fill in all fields", "error");
    }else if (author.match(/\d/g)){
        UI.showAlert("Author cannot contain numbers", "error");
    }else if (!release.match(/\d/g)){
        UI.showAlert("enter relase year format RRRR", "error");
    }else if (!isbn.match(/\d/g)){
        UI.showAlert("ISBN contain only numbers", "error");
    }



    else {
        const book = new Book(title, author, release, isbn);
        console.log(book)
        
            UI.showAlert("Book added", "success");
            UI.addBookToList(book);
            UI.clearFields();
        }
    });
    // delete book event
    document.querySelector("#table-list").addEventListener("click", (e) => {
        UI.deleteBookFromList(e.target)
        UI.showAlert("Book removed", "success");
});
///
