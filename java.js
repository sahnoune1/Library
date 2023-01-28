function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const array = [];

function addBookToLibrary() {
  const title = prompt("give me the book title");
  const author = prompt("give me the author name");
  const pages = prompt("give me the number of pages");

  const book = new Book(title, author, pages);
  array.push(book);
  return array;
}
let i = 0;
for (i = 0; i < 2; i++) {
  addBookToLibrary();
}
console.log(array);
