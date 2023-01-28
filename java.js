function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const book1 = new Book("harry potter", "jki rowling", 252);
const book2 = new Book("the lord ", "tolkein", 255);
console.log(book1);
console.log(book2);

const array = [book1, book2];
console.log(array);
