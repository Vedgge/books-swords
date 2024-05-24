# Books & Swords
 
Este repositorio contiene el código fuente de la página web de Books & Swords, donde podrás registrarte y comprar los mejores libros al mejor precio del mercado.
Su fecha de inicio fue alrededor de Abril y forma parte de un Trabajo Práctico Obligatorio para el curso **Full Stack 2024** del programa [codo a codo](https://aulasvirtuales.edu.ar)

## Objetivo
Desarrollar un sitio web de venta de libros (libreria comercial) que sea atractivo, funcional y fácil de usar.
&emsp; 

    Desarrollar un sitio web que sea responsive y se vea bien en diferentes dispositivos.
    Desarrollar un sitio web que incluya un formulario de contacto que sea fácil de usar y que recopile información relevante de los clientes potenciales.
    Desarrollar un sitio web que incluya un listado de los libros disponibles.

## Características

- Los principales colores utilizados son blanco y #031830 como color primario.
- Utiliza HTML, CSS y JavaScript para la estructura, diseño y funcionalidad de la página.
- Incluye tipografía Oswald de Google Fonts y el uso de mapas embedidos de Google Maps.
- Utiliza iconos de FontAwesome para los elementos visuales.
- Incluye un favicon personalizado.
- Contiene un total de 4 páginas HTML totalmente estilizadas, animadas y funcionales, las mismas son: index.html, categoria.html, contacto.html y libro-detalle.html.
- Contiene además un total de 3 formularios para el envío de datos los cuales serán almacenados para su futuro tratamiento (inicio de sesión, registro y contacto).
- Incluye un motor de busqueda de libros utilizable en la página categoria.html.
- Utiliza una API pública de noticias para simular el fetch de datos a un blog de la tienda.

## Instrucciones de uso

- Vía Github:
    1. Descarga todos los archivos de este repositorio.
    2. Abre el archivo "index.html" en tu navegador web para ver la página.

- Vía nube, abriendo [este link](https://booksandswords.vercel.app/)

## Estructura de archivos

El repositorio contiene los siguientes archivos y carpetas:

- `index.html`: Página principal de la web es completamente responsiva.
- `categoria.html/`: Página que contiene todo el catálogo de libros de la tienda, accesible desde cualquier botón de género en el navbar. Posee un buscador usable por autor y nombre de libro.
- `libro-detalle.html/`: Página que muestra los detalles de un libro, así como una reseña y libros relacionados. Se puede acceder a ella mediante clickear cualquier libro del index.html o categoria.html. Los libros relacionados se muestran mediante funciones que obtienen los libros que posean mismo género y/o autor que el libro mostrado.
- `contacto.html`: Página de contacto con la tienda a la cual se accede desde el navbar "Contacto". Aquí se encuentra un form validado que al enviarse redirige a un html con los datos.
- `public/`: Carpeta contenedora los carpetas contenedoras de archivos públicos .js, .css e imagenes usadas.
- `images/`: Carpeta contenedora las imágenes utilizadas en la página.
- `css/`: Carpeta contenedora de los estilos globales y personalizados.
- `js/`: Carpeta contenedora de los scripts globales y personalizados.

## Desarrollos Futuros y Mejoras Potenciales

- Mejorar responsividad del index.
- Agregar páginas HTML faltantes.
- Tener un blog propio.
- Mayor cantidad de filtros y libros.
- Posibilidad de publicar libros de la tienda como ADMIN.
- Posibildad de comprar libros de la tienda como USER.

## Notas finales

¡Esperamos que disfrutes navegando por nuestra página web y encuentres el libro de tus sueños!


# Check List TPO
[x] Desarrollar cuatro páginas web en formato HTML, la temática es a elección.

[x] Diseñar la estructura del sitio usando etiquetas semánticas.

[x] Crear un formulario de contacto con validación en JavaScript.

[x] Incluir al menos un iframe, íconos (FontAwesome, Flaticon), y fuentes (locales o Google Fonts).

[x] Hacer al menos una página completamente adaptable a tres tamaños de dispositivos (Mobile, Tablet, Escritorio).

[x] Agregar una animación, transformación o transición en alguna parte del sitio.

[x] Utilizar Flexbox y/o CSS Grid para la maquetación.

[x] Realizar una solicitud a una API Rest desde JavaScript.

[o] Si se utiliza Bootstrap, solo en la página del formulario.

[x] Publicar el sitio en línea (GitHub Pages, Netlify, u otro).

[x] Sincronizar el código en un repositorio Git y compartir el enlace con el instructor.

[x] Aplicar diseño integral, incluyendo maquetación, tipografía, imágenes, colores, logo, e íconos.

[x] Preparar un archivo de documentación preliminar en PDF que describa el proyecto.

### Notas Check List
- "x" Completado 
- "o" No ocurre
