document.addEventListener("DOMContentLoaded", function () {
  // B&S carrusel
  const slidesContainer = document.getElementById("slides-container");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");

  let currentSlide = 0;
  const slideCount = slides.length;

  const goToNextSlide = () => {
    currentSlide = (currentSlide + 1) % slideCount;
    const slideWidth = slides[0].clientWidth;
    slidesContainer.scrollLeft = currentSlide * slideWidth;
  };

  const goToPrevSlide = () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    const slideWidth = slides[0].clientWidth;
    slidesContainer.scrollLeft = currentSlide * slideWidth;
  };

  // Clones de los slides al principio y al final para crear loop infinito
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slideCount - 1].cloneNode(true);
  slidesContainer.insertBefore(lastClone, slides[0]);
  slidesContainer.appendChild(firstClone);

  nextButton.addEventListener("click", goToNextSlide);
  prevButton.addEventListener("click", goToPrevSlide);

  setInterval(goToNextSlide, 3000);

  // Menus desplegables
  const buttonWishlist = document.getElementById("menu-wishlist");
  const buttonUser = document.getElementById("menu-user");
  const buttonCart = document.getElementById("menu-cart");
  const buttonAllGenre = document.getElementById("menu-all-genre");
  const menuAllGenre = document.getElementById("menu-all-genre-content");
  const menuWishlist = document.getElementById("menu-wishlist-content");
  const menuUser = document.getElementById("menu-user-content");
  const menuCart = document.getElementById("menu-cart-content");

  function closeMenus() {
    menuWishlist.style.display = "none";
    menuUser.style.display = "none";
    menuCart.style.display = "none";
    menuAllGenre.style.display = "none";

    buttonWishlist.classList.remove("active");
    buttonUser.classList.remove("active");
    buttonCart.classList.remove("active");
    buttonAllGenre.classList.remove("active");
  }

  buttonWishlist.addEventListener("click", () => {
    closeMenus();
    console.log("menu wishlist clicked");
    buttonWishlist.classList.toggle("active");
    if (menuWishlist.style.display === "none") {
      menuWishlist.style.display = "block";
    } else {
      menuWishlist.style.display = "none";
    }
  });

  buttonUser.addEventListener("click", () => {
    closeMenus();
    console.log("menu user clicked");
    buttonUser.classList.toggle("active");
    if (menuUser.style.display === "none") {
      menuUser.style.display = "block";
    } else {
      menuUser.style.display = "none";
    }
  });

  buttonCart.addEventListener("click", () => {
    closeMenus();
    console.log("menu cart clicked");
    buttonCart.classList.toggle("active");
    if (menuCart.style.display === "none") {
      menuCart.style.display = "block";
    } else {
      menuCart.style.display = "none";
    }
  });

  buttonAllGenre.addEventListener("click", () => {
    closeMenus();
    console.log("menu all genre clicked");
    buttonAllGenre.classList.toggle("active");
    if (menuAllGenre.style.display === "none") {
      menuAllGenre.style.display = "block";
    } else {
      menuAllGenre.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    const target = event.target;
    const isMenuButton = target.closest(
      "#menu-wishlist, #menu-user, #menu-cart, #menu-all-genre"
    );
    const isMenuContent = target.closest(
      "#menu-wishlist-content, #menu-user-content, #menu-cart-content, #menu-all-genre-content"
    );

    // Si el clic no fue en un botón de menú ni en su contenido, cerrar todos los menús
    if (!isMenuButton && !isMenuContent) {
      closeMenus();
    }
  });

  // Booktok carrusel
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

  // Nuevos lanzamientos carrusel
  const prevNuevos = document.getElementById("prev-btn-nuevos");
  const nextNuevos = document.getElementById("next-btn-nuevos");
  const listNuevos = document.getElementById("book-list-slider-nuevos");

  prevNuevos.addEventListener("click", () => {
    console.log("prev nuevos clicked");
    listNuevos.scrollLeft -= bookWidth + padding;
  });

  nextNuevos.addEventListener("click", () => {
    console.log("next nuevos clicked");
    listNuevos.scrollLeft += bookWidth + padding;
  });

  // B&S Top 100 carrusel
  const prevTop100 = document.getElementById("prev-btn-top100");
  const nextTop100 = document.getElementById("next-btn-top100");
  const listTop100 = document.getElementById("book-list-slider-top100");

  prevTop100.addEventListener("click", () => {
    console.log("prev top100 clicked");
    listTop100.scrollLeft -= bookWidth + padding;
  });

  nextTop100.addEventListener("click", () => {
    console.log("next top100 clicked");
    listTop100.scrollLeft += bookWidth + padding;
  });

  // Blog carrusel
  const prevBlog = document.getElementById("prev-btn-blog");
  const nextBlog = document.getElementById("next-btn-blog");
  const listBlog = document.getElementById("blog-list-slider");

  const blogWidth = 445;

  prevBlog.addEventListener("click", () => {
    console.log("prev blog clicked");
    listBlog.scrollLeft -= blogWidth + padding;
  });

  // Blog carrusel paginación
  nextBlog.addEventListener("click", () => {
    const currentScrollLeft = listBlog.scrollLeft;
    const nextScrollLeft = currentScrollLeft + blogWidth + padding;
    const maxScrollLeft = listBlog.scrollWidth - listBlog.clientWidth;

    if (nextScrollLeft > maxScrollLeft) {
      listBlog.scrollLeft = 0;
      updatePaginationDots(0);
    } else {
      listBlog.scrollLeft = nextScrollLeft;
      const newIndex = Math.round(nextScrollLeft / (blogWidth + padding));
      updatePaginationDots(newIndex);
    }
  });

  function createPaginationDots() {
    const paginationContainer = document.querySelector(".container-pagination");
    const blogSliders = document.querySelectorAll(".blog-slider");
    const numDots = blogSliders.length - 2;

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot-pagination");
      if (i === 0) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => {
        listBlog.scrollLeft = i * (blogWidth + padding);
        updatePaginationDots(i);
      });
      paginationContainer.appendChild(dot);
    }
  }

  function updatePaginationDots(index) {
    const dots = document.querySelectorAll(".dot-pagination");
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  createPaginationDots();
});
