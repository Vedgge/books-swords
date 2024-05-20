import { booksData } from "./datos.js";

import {
  listaDeLibrosPorGenero,
  agregarImagenesALaPagina,
} from "./books-functions.js";

let queryStrings = new URLSearchParams(window.location.search);
let parametrosGet = Object.fromEntries(queryStrings.entries());
let miImagen = parametrosGet.imagen;

const dadaImagenObtenerObjeto = function (imagenDato) {
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

const llenarUnaImagen = function (objetoDato) {
  let lugarImagen = document.getElementById("imagenTapa");
  while (lugarImagen.hasChildNodes()) {
    lugarImagen.removeChild(lugarImagen.firstChild);
  }
  let laImagen = document.createElement("img");
  laImagen.setAttribute("class", "fotoTapa");
  laImagen.setAttribute("src", `${objetoDato.imagen}`);
  laImagen.setAttribute(
    "alt",
    `Imagen de la tapa del libro: ${objetoDato.titulo}`
  );
  laImagen.setAttribute("id", "fotoTapa");
  laImagen.setAttribute("style", "width:20vw");
  lugarImagen.appendChild(laImagen);
  let lugarTitulo = document.getElementById("tituloLibro");
  lugarTitulo.innerText = "TÍTULO: " + objetoDato.titulo;
  let lugarAutor = document.getElementById("autorLibro");
  lugarAutor.innerText = "AUTOR: " + objetoDato.autor;
  let lugarGenero = document.getElementById("generoLibro");
  lugarGenero.innerHTML = "GENERO: " + objetoDato.genero;
  let lugarPrecio = document.getElementById("precioLibro");
  lugarPrecio.innerText = "PRECIO: $" + objetoDato.precio;
  let lugarStock = document.getElementById("stock");
  lugarStock.innerText = "STOCK: " + objetoDato.stock + " unidades";
  let comentario = document.getElementById("comentario");
  comentario.innerHTML = objetoDato.texto;
};

document.addEventListener("DOMContentLoaded", (e) => {
  let objLibro = dadaImagenObtenerObjeto(miImagen);
  llenarUnaImagen(objLibro);
  let listaDeLibros = listaDeLibrosPorGenero(objLibro.genero);
  agregarImagenesALaPagina(listaDeLibros, "lLibros", 5, false);
});

let lugarListaLibros = document.getElementById("lLibros");
lugarListaLibros.addEventListener("click", (e) => {
  let objetoDeLaImagen = dadaImagenObtenerObjeto(e.target.getAttribute("src"));
  llenarUnaImagen(objetoDeLaImagen);
});
