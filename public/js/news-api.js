document.addEventListener("DOMContentLoaded", function () {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=b5423a20aedf48ea98ea664d75237c57";
  var req = new Request(url);
  fetch(req)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getNews(data.articles);
    })
    .catch(function (error) {
      console.log("Error fetching news:", error);
    });

  function getNews(articles) {
    const blogListSlider = document.getElementById("blog-list-slider");
    const aElements = blogListSlider.querySelectorAll("a.blog-slider");
    aElements.forEach((a, index) => {
      const article = articles[index];
      const title = article.title;
      const imageSrc = article.urlToImage;

      // Reemplazar el texto del h2 por el título de la noticia
      const h2 = a.querySelector("h2");
      h2.textContent = title;

      // Agregar una imagen de la noticia dentro del <a>
      const img = document.createElement("img");
      img.src = imageSrc;
      img.alt = title;
      a.appendChild(img);
    });
  }
});
