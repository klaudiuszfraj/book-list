//addin book to list
class Book {
    constructor (title, author, relace, isbn){
        this.title = title;
        this.author = author;
        this.relace = relace;
        this.isbn = isbn;
    }
};
class UI{
    addBookToList(book){
        const list =document.getElementById("tableList");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.relace}</td>
        <td>${book.isbn}</td>
        <td>X</td>
        `;
        list.appendChild(row);
    }
};