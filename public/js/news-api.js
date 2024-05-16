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
      const aElementsSrc = article.url;

      // Reemplazar el href del <a> por la URL de la noticia completa
      a.href = aElementsSrc;
      a.setAttribute("target", "_blank");

      // Reemplazar el texto del h2 por el título de la noticia
      const h2 = a.querySelector("h2");
      h2.textContent = title;

      // Agregar una imagen de la noticia dentro del <a>
      const img = document.createElement("img");
      if (imageSrc !== null) {
        img.src = imageSrc;
      } else {
        img.src = "/public/images/breaking-news-generic.jpg";
      }
      img.alt = title;
      a.appendChild(img);

      const overlay = document.createElement("div");
      overlay.style =
        "background: red; position: absolute; width: 100%; height: 250px; bottom: 0; background: linear-gradient(to top, black, transparent);";
      a.appendChild(overlay);
    });
  }
});
