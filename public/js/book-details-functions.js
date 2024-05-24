const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const list = document.getElementById("book-list-slider");

const bookWidth = 220;
const padding = 10;

prev.addEventListener("click", () => {
  console.log("prev clicked");
  list.scrollLeft -= bookWidth + padding;
});

next.addEventListener("click", () => {
  console.log("next clicked");
  list.scrollLeft += bookWidth + padding;
});

function mostrarLibrosSimilares(objetoDato) {
  const bookListSlider = document.getElementById("book-list-slider");
  if (bookListSlider) {
    bookListSlider.innerHTML = "";

    const libroGenero = objetoDato.genero;
    const libroAutor = objetoDato.autor;

    const librosSimilares = booksData.filter((libro) => {
      const mismoGenero = libroGenero === libro.genero;
      const mismoAutor = libroAutor === libro.autor;

      return mismoGenero || mismoAutor;
    });

    librosSimilares.forEach((libro) => {
      const linkLibro = document.createElement("a");
      linkLibro.href = "./libro-detalle.html" + "?imagen=" + libro.imagen;
      linkLibro.classList.add("book-slider");

      const imgLibro = document.createElement("img");
      imgLibro.src = libro.imagen;
      imgLibro.alt = libro.titulo;

      linkLibro.appendChild(imgLibro);
      bookListSlider.appendChild(linkLibro);
    });
  }
}

const listaGeneros = function (datos) {
  if (!Array.isArray(datos)) {
    return [];
  }

  const generos = new Set();
  datos.forEach((libro) => {
    generos.add(libro.genero);
  });
  return Array.from(generos);
};

let queryStrings = new URLSearchParams(window.location.search);
let parametrosGet = Object.fromEntries(queryStrings.entries());
let libroPortada = parametrosGet.imagen;

const obtenerObjetoDeImagen = function (imagenDato) {
  let encontrado = false;
  let i = 0;
  let respuesta = null;
  while (!encontrado && i < booksData.length) {
    if (booksData[i].imagen === imagenDato) {
      (encontrado = true), (respuesta = booksData[i]);
    }
    i++;
  }
  return respuesta;
};

const colocarLibros = function (objetoDato) {
  let contenedorImagen = document.getElementById("imagenTapa");
  while (contenedorImagen.hasChildNodes()) {
    contenedorImagen.removeChild(contenedorImagen.firstChild);
  }
  let imagenLibro = document.createElement("img");
  imagenLibro.setAttribute("class", "fotoTapa");
  imagenLibro.setAttribute("src", `${objetoDato.imagen}`);
  imagenLibro.setAttribute(
    "alt",
    `Imagen de la tapa del libro: ${objetoDato.titulo}`
  );
  imagenLibro.setAttribute("id", "fotoTapa");
  imagenLibro.setAttribute("style", "width:100%; max-width: 300px;");
  contenedorImagen.appendChild(imagenLibro);
  const titleBookBreadCrump = document.getElementById("book-title-breadcrump");
  titleBookBreadCrump.innerText = objetoDato.titulo;
  const contenedorTitulo = document.getElementById("tituloLibro");
  contenedorTitulo.innerText = objetoDato.titulo;
  const contenedorAutor = document.getElementById("autorLibro");
  contenedorAutor.innerText = "Por: " + objetoDato.autor;
  const contenedorGenero = document.getElementById("generoLibro");
  contenedorGenero.innerHTML = "Género: " + objetoDato.genero;
  const contenedorPrecio = document.getElementById("precioLibro");
  contenedorPrecio.innerText = "Precio: $" + objetoDato.precio;
  const contenedorStock = document.getElementById("stock");
  contenedorStock.innerText = "Disponibles: " + objetoDato.stock + " unidades";
  const comentario = document.getElementById("comentario");
  comentario.innerHTML = objetoDato.texto;
};

document.addEventListener("DOMContentLoaded", (e) => {
  let libro = obtenerObjetoDeImagen(libroPortada);
  colocarLibros(libro);
  mostrarLibrosSimilares(libro);
});
