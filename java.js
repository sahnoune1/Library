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

  const book1 = new Book(title, author, pages);
  array[0] = book1;
  return array;
}
console.log(addBookToLibrary());
