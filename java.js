const array = [];
/* function of deleting */
function renderBooks() {
  const delet = document.querySelectorAll(".new");
  let x = 0;
  for (x = 0; x < delet.length; x++) {
    delet[x].parentNode.removeChild(delet[x]);
  }
  for (let j = 0; j < array.length; j++) {
    const div = document.createElement("div");
    div.innerHTML = `${array[j].title},${array[j].author},${array[j].pages}<button class="delete">delete</button><button class="read">read</button>`;
    div.setAttribute("class", "new");
    document.body.querySelector(".box4").appendChild(div);

    const toggle = document.querySelector(".read");
    toggle.addEventListener("click", () => {
      if (toggle.innerHTML === "read") {
        toggle.innerHTML = "not read";
        toggle.classList.remove("read");
        toggle.setAttribute("class", "not-read");
      } else if (toggle.innerHTML === "not read") {
        toggle.innerHTML = "read";
        toggle.classList.remove("not-read");
        toggle.setAttribute("class", "read");
      }
    });

    const deleteBtn = div.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      const index = j;
      div.parentNode.removeChild(div);
      array.splice(index, 1);
      renderBooks();
    });
  }
}

/* the book object */

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let form;

let statement = false;

/* button creation */
const butt = document.createElement("button");
butt.innerHTML = "give me the books details";
butt.setAttribute("class", "butt");
document.body.querySelector(".box2").appendChild(butt);

/* the butt event listener */

butt.addEventListener("click", () => {
  if (statement === true) {
    document.body.removeChild(form);
    statement = false;
  } else if (statement === false) {
    form = document.createElement("form");

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

    document.body.querySelector(".box3").appendChild(form);

    /* submit event listener */
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const bookTitle = titleInput.value;
      const bookAuthor = authorInput.value;
      const bookPages = pagesInput.value;

      const book = new Book(bookTitle, bookAuthor, bookPages);

      array.push(book);

      renderBooks();

      // function renderBooks() {
      //   const delet = document.querySelectorAll(".new");
      //   let x = 0;
      //   for (x = 0; x < delet.length; x++) {
      //     delet[x].parentNode.removeChild(delet[x]);
      //   }
      //   for (let j = 0; j < array.length; j++) {
      //     const div = document.createElement("div");
      //     div.innerHTML = `${array[j].title},${array[j].author},${array[j].pages}<button class="delete">delete</button>`;
      //     div.setAttribute("class", "new");
      //     document.body.appendChild(div);

      //     const deleteBtn = div.querySelector(".delete");
      //     deleteBtn.addEventListener("click", () => {
      //       const index = j;
      //       div.parentNode.removeChild(div);
      //       array.splice(index, 1);
      //       renderBooks();
      //     });
      //   }
      // }

      titleInput.value = "";
      authorInput.value = "";
      pagesInput.value = "";
      console.log(array);
    });

    statement = true;
  }
});
