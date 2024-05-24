//Veddge's code
document.addEventListener("DOMContentLoaded", function () {
  // Index functions to create diff elements
  function crearElementosLibrosTendencia() {
    const bookListSlider = document.getElementById("book-list-slider");

    const librosTendencia = booksData.filter((libro) => {
      return libro.tags.includes("tendencia");
    });
    librosTendencia.forEach((libro) => {
      const linkLibro = document.createElement("a");
      linkLibro.href = "./libro-detalle.html" + "?imagen=" + libro.imagen;
      linkLibro.setAttribute("target", "_blank");
      linkLibro.classList.add("book-slider");

      const imgLibro = document.createElement("img");
      imgLibro.src = libro.imagen;
      imgLibro.alt = libro.titulo;
      
      linkLibro.appendChild(imgLibro);
      bookListSlider.appendChild(linkLibro);
    });
  }

  function crearElementosLibrosShowcase() {
    const bookListShowcase = document.getElementById("container-book-showcase");
    const usedIndexes = new Set();
    for (let i = 1; i <= 7; i++) {
      let randomBook;
      do {
        randomBook = Math.floor(Math.random() * (40 - 2 + 1)) + 2;
      } while (usedIndexes.has(randomBook));
      usedIndexes.add(randomBook);

      const linkLibro = document.createElement("a");
      linkLibro.classList.add("book-" + [i]);
      linkLibro.href =
        "./libro-detalle.html" + "?imagen=" + booksData[randomBook].imagen;
      linkLibro.setAttribute("target", "_blank");

      const imgLibro = document.createElement("img");
      imgLibro.src = booksData[randomBook].imagen;
      imgLibro.alt = booksData[randomBook].titulo;

      linkLibro.appendChild(imgLibro);
      bookListShowcase.appendChild(linkLibro);
    }
  }

  function crearElementosLibrosJovenesLectores() {
    const bookListNuevos = document.getElementById("book-list-slider-nuevos");
    const librosJovenesLectores = booksData.filter((libro) => {
      return libro.tags.includes("jovenes");
    });

    librosJovenesLectores.forEach((libro) => {
      const linkLibro = document.createElement("a");
      linkLibro.href = "./libro-detalle.html" + "?imagen=" + libro.imagen;
      linkLibro.setAttribute("target", "_blank");
      linkLibro.classList.add("book-slider-nuevos");

      const imgLibro = document.createElement("img");
      imgLibro.src = libro.imagen;
      imgLibro.alt = libro.titulo;

      linkLibro.appendChild(imgLibro);
      bookListNuevos.appendChild(linkLibro);
    });
  }

  function crearElementosLibrosTop() {
    const bookListTop = document.getElementById("book-list-slider-top100");
    const librosTop = booksData.filter((libro) => {
      return libro.tags.includes("top100");
    });
    librosTop.forEach((libro) => {
      const linkLibro = document.createElement("a");
      linkLibro.href = "./libro-detalle.html" + "?imagen=" + libro.imagen;
      linkLibro.setAttribute("target", "_blank");
      linkLibro.classList.add("book-slider-top");

      const imgLibro = document.createElement("img");
      imgLibro.src = libro.imagen;
      imgLibro.alt = libro.titulo;

      linkLibro.appendChild(imgLibro);
      bookListTop.appendChild(linkLibro);
    });
  }

  crearElementosLibrosTendencia();
  crearElementosLibrosShowcase();
  crearElementosLibrosJovenesLectores();
  crearElementosLibrosTop();
});
