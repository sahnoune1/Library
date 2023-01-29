// function Book(title, author, pages) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
// }

// const array = [];

// function addBookToLibrary() {
//   const title = prompt("give me the book title");
//   const author = prompt("give me the author name");
//   const pages = prompt("give me the number of pages");

//   const book = new Book(title, author, pages);
//   array.push(book);
//   return array;
// }

const butt = document.createElement("button");
butt.innerHTML = "give me the books details";
butt.setAttribute("class", "butt");
document.body.appendChild(butt);
butt.addEventListener("click", () => {
  const form = document.createElement("form");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.innerHTML = "title";

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("name", "title");

  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const authorLabel = document.createElement("label");
  authorLabel.setAttribute("for", "author");
  authorLabel.innerHTML = "author";

  const authorInput = document.createElement("input");
  authorInput.setAttribute("type", "text");
  authorInput.setAttribute("id", "author");
  authorInput.setAttribute("name", "author");

  form.appendChild(authorLabel);
  form.appendChild(authorInput);

  const pagesLabel = document.createElement("label");
  pagesLabel.setAttribute("for", "pages");
  pagesLabel.innerHTML = "pages";

  const pagesInput = document.createElement("input");
  pagesInput.setAttribute("type", "number");
  pagesInput.setAttribute("id", "pages");
  pagesInput.setAttribute("name", "pages");

  form.appendChild(pagesLabel);
  form.appendChild(pagesInput);

  const subButtLabel = document.createElement("label");
  subButtLabel.setAttribute("for", "submit");

  const subButtInput = document.createElement("input");
  subButtInput.setAttribute("type", "submit");
  subButtInput.setAttribute("id", "submit");
  subButtInput.setAttribute("name", "submit");

  form.appendChild(subButtInput);
  form.appendChild(subButtLabel);

  document.body.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const bookTitle = titleInput.value;
    const bookAuthor = authorInput.value;
    const bookPages = pagesInput.value;

    const div = document.createElement("div");
    div.innerHTML = `${bookTitle},${bookAuthor},${bookPages}`;
    document.body.appendChild(div);
  });
});

// butt.addEventListener("click", () => {
//   let i = 0;
//   for (i = 0; i < 2; i++) {
//     addBookToLibrary();
//   }
//   let j = 0;
//   for (j = 0; j < array.length; j++) {
//     const div = document.createElement("div");
//     div.innerHTML = `${array[j].title},${array[j].author},${array[j].pages}`;
//     div.setAttribute("class", "new");
//     document.body.appendChild(div);
//   }
//   console.log(array);
// });
