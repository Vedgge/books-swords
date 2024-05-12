document.addEventListener("DOMContentLoaded", function () {
  //Devuelve toda la lista de libros de la categoría pasada coma argumento
  const contenedor = document.getElementById("listaDeLibros");

  const listaDeLibrosPorGenero = function (genero) {
    const lista = [];
    for (let i = 0; i < booksData.length; i++) {
      if (booksData[i].genero === genero) {
        lista.push(booksData[i]);
      }
    }
    return lista;
  };

  const agregarImagenesALaPagina = function (listado) {
    while (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.firstChild);
    }
    for (let i = 0; i < listado.length; i++) {
      let elementoFigure = document.createElement("figure");
      elementoFigure.classList.add("contenedorDeFigura");

      let unaImagen = document.createElement("img");
      unaImagen.classList.add("figura");
      unaImagen.setAttribute("src", listado[i].imagen);

      let titulo = document.createElement("figcaption");
      titulo.innerText = listado[i].titulo + "\n" + listado[i].autor;

      elementoFigure.appendChild(unaImagen);
      elementoFigure.appendChild(titulo);
      contenedor.appendChild(elementoFigure);
    }
  };

  const agregarImagenesPorGenero = function (genero) {
    const lista = listaDeLibrosPorGenero(genero);
    agregarImagenesALaPagina(lista);
  };

  function crearElementosLibrosTendencia() {
    const bookListSlider = document.getElementById("book-list-slider");

    if(bookListSlider) {
      const librosTendencia = booksData.filter((libro) => {
        return libro.tags.includes("tendencia");
      });
      librosTendencia.forEach((libro) => {
        const linkLibro = document.createElement("a");
        linkLibro.href = "#";
        linkLibro.classList.add("book-slider");

        const imgLibro = document.createElement("img");
        imgLibro.src = libro.imagen;
        imgLibro.alt = libro.titulo;

        linkLibro.appendChild(imgLibro);
        bookListSlider.appendChild(linkLibro);
      });
    }
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
      linkLibro.href = "#";
      linkLibro.classList.add("book-" + [i]);

      const imgLibro = document.createElement("img");
      imgLibro.src = booksData[randomBook].imagen; 
      imgLibro.alt = booksData[randomBook].titulo;

      linkLibro.appendChild(imgLibro);
      bookListShowcase.appendChild(linkLibro);
    }
  }


  function crearElementosLibrosJovenesLectores() {
    const bookListNuevos = document.getElementById("book-list-slider-nuevos");

    if (bookListNuevos) {
      const librosJovenesLectores = booksData.filter((libro) => {
        return libro.tags.includes("jovenes")
    });

      librosJovenesLectores.forEach((libro) => {
        const linkLibro = document.createElement("a");
        linkLibro.href = "#";
        linkLibro.classList.add("book-slider-nuevos");

        const imgLibro = document.createElement("img");
        imgLibro.src = libro.imagen;
        imgLibro.alt = libro.titulo;

        linkLibro.appendChild(imgLibro);
        bookListNuevos.appendChild(linkLibro);
      });
    } else {
      console.error(
        "El elemento 'book-list-slider-nuevos' no se encontró en el DOM."
      );
    }
  }

  function crearElementosLibrosTop() {
    const bookListTop = document.getElementById("book-list-slider-top100");
    if (bookListTop) {
      const librosTop = booksData.filter((libro) => {
        return libro.tags.includes("top100");
      });
      librosTop.forEach((libro) => {
        const linkLibro = document.createElement("a");
        linkLibro.href = "#";
        linkLibro.classList.add("book-slider-top");

        const imgLibro = document.createElement("img");
        imgLibro.src = libro.imagen;
        imgLibro.alt = libro.titulo;

        linkLibro.appendChild(imgLibro);
        bookListTop.appendChild(linkLibro);
      });
    } else {
      console.error(
        "El elemento 'book-list-slider-top100' no se encontró en el DOM."
      );
    }
  }

  crearElementosLibrosTendencia();
  crearElementosLibrosShowcase();
  crearElementosLibrosJovenesLectores();
  crearElementosLibrosTop();
});
