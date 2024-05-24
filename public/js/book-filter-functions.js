const contenedor = document.getElementById("listaDeLibros");

const filtrarLibros = function (genero, autor) {
  return booksData.filter((libro) => {
    const generoCoincide = genero === "todos" || libro.genero === genero;
    const autorCoincide = autor === "todos" || libro.autor === autor;
    return generoCoincide && autorCoincide;
  });
};

const agregarLibrosAPagina = function (listadoLibros) {
  const errorDiv = document.getElementById("error-case-div");
  while (contenedor.hasChildNodes()) {
    contenedor.removeChild(contenedor.firstChild);
  }

  if (listadoLibros.length === 0) {
    let errorText = document.createElement("h2");
    errorDiv.style = "width: 100%;";
    errorText.textContent = "Error 404: Libro no encontrado";
    errorText.style =
      "display: flex; justify-content: center;margin-left: 1rem;";
    contenedor.style = "display: flex; justify-content: center;";

    contenedor.appendChild(errorText);
  } else {
    errorDiv.style.width = "";
    contenedor.style.display = "grid";
    contenedor.style.justifyContent = "";
    for (let i = 0; i < listadoLibros.length; i++) {
      let contenedorLibro = document.createElement("figure");
      contenedorLibro.classList.add("contenedor-libro");

      let enlaceLibro = document.createElement("a");
      enlaceLibro.href =
        "./libro-detalle.html" + "?imagen=" + listadoLibros[i].imagen;
      enlaceLibro.setAttribute("target", "_blank");

      let unaImagen = document.createElement("img");
      unaImagen.classList.add("fotoTapa");
      unaImagen.setAttribute("src", listadoLibros[i].imagen);

      let titulo = document.createElement("figcaption");
      titulo.innerText = `${listadoLibros[i].titulo}\n${listadoLibros[i].autor}`;

      enlaceLibro.appendChild(unaImagen);
      enlaceLibro.appendChild(titulo);
      contenedorLibro.appendChild(enlaceLibro);
      contenedor.appendChild(contenedorLibro);
    }
  }

  actualizarConteoLibros(listadoLibros.length);
};

const actualizarConteoLibros = function (cantidad) {
  const conteoLibrosElemento = document.getElementById("conteo-libros");
  conteoLibrosElemento.textContent = cantidad;
};

const listaGeneros = function (datos) {
  const lista = [];
  datos.forEach((libro) => {
    if (!lista.includes(libro.genero)) {
      lista.push(libro.genero);
    }
  });
  return lista;
};

const listaAutores = function (datos) {
  const lista = [];
  datos.forEach((libro) => {
    if (!lista.includes(libro.autor)) {
      lista.push(libro.autor);
    }
  });
  return lista;
};

const agregarMenuDesplegable = function (
  listadoFiltros,
  contenedorFiltros,
  tipoFiltro
) {
  const contenedor = document.getElementById(contenedorFiltros);

  const menuSelect = document.createElement("select");
  menuSelect.setAttribute("id", "filtro-por-" + tipoFiltro);

  const placeholderOption = document.createElement("option");
  placeholderOption.setAttribute("value", "");
  placeholderOption.setAttribute("disabled", true);
  placeholderOption.innerText = "Filtra por " + tipoFiltro;
  menuSelect.appendChild(placeholderOption);

  const todosOption = document.createElement("option");
  todosOption.setAttribute("value", "todos");
  todosOption.innerText = "Todos";
  todosOption.setAttribute("selected", true);
  menuSelect.appendChild(todosOption);

  listadoFiltros.forEach((filtro) => {
    const elementoOption = document.createElement("option");
    elementoOption.setAttribute("value", filtro);
    elementoOption.innerText = filtro;
    menuSelect.appendChild(elementoOption);
  });

  contenedor.appendChild(menuSelect);
};

const listadoGeneros = listaGeneros(booksData);
agregarMenuDesplegable(listadoGeneros, "filtroGenero", "genero");

const listadoAutores = listaAutores(booksData);
agregarMenuDesplegable(listadoAutores, "filtroAutor", "autor");

document.addEventListener("DOMContentLoaded", () => {
  agregarLibrosAPagina(booksData);
});

const tituloFiltros = function (seleccionAutorFiltro, seleccionGeneroFiltro) {
  const contenedorTituloBusqueda = document.getElementById(
    "contenedor-titulo-busqueda"
  );
  let tituloBusqueda = document.getElementById("titulo-filtro");

  if (!tituloBusqueda) {
    tituloBusqueda = document.getElementById("titulo-filtro");
    contenedorTituloBusqueda.appendChild(tituloBusqueda);
  }

  if (seleccionAutorFiltro === "todos" && seleccionGeneroFiltro === "todos") {
    tituloBusqueda.textContent = "Todos los libros en nuestra tienda";
  } else if (
    seleccionAutorFiltro !== "todos" &&
    seleccionGeneroFiltro === "todos"
  ) {
    tituloBusqueda.textContent = "Todos los libros de " + seleccionAutorFiltro;
  } else if (
    seleccionGeneroFiltro !== "todos" &&
    seleccionAutorFiltro === "todos"
  ) {
    tituloBusqueda.textContent = "Todos los libros de " + seleccionGeneroFiltro;
  } else {
    tituloBusqueda.textContent =
      "Todos los libros de " +
      seleccionGeneroFiltro +
      " y de " +
      seleccionAutorFiltro;
  }
};

const menuGenero = document.getElementById("filtro-por-genero");
const menuAutor = document.getElementById("filtro-por-autor");

const actualizarLibros = function () {
  const seleccionGeneroFiltro = menuGenero.value;
  const seleccionAutorFiltro = menuAutor.value;

  const listaLibrosMostrar = filtrarLibros(
    seleccionGeneroFiltro,
    seleccionAutorFiltro
  );
  agregarLibrosAPagina(listaLibrosMostrar);

  tituloFiltros(seleccionAutorFiltro, seleccionGeneroFiltro);
};

menuGenero.addEventListener("change", actualizarLibros);
menuAutor.addEventListener("change", actualizarLibros);

const inputBusqueda = document.getElementById("input-busqueda");
inputBusqueda.addEventListener("input", (e) => {
  const busqueda = e.target.value.toLowerCase();
  const listaLibrosMostrar = booksData.filter((libro) => {
    return (
      libro.titulo.toLowerCase().includes(busqueda) ||
      libro.autor.toLowerCase().includes(busqueda) ||
      libro.genero.toLowerCase().includes(busqueda)
    );
  });
  agregarLibrosAPagina(listaLibrosMostrar);
});
