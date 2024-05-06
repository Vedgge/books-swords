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
  const buttonAllGenre = document.getElementById("menu-all-filters-header");
  const menuAllGenre = document.getElementById(
    "menu-all-filters-header-content"
  );
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
    console.log("menu wishlist clicked");
    if (menuWishlist.style.display === "block") {
      menuWishlist.style.display = "none";
      buttonWishlist.classList.remove("active");
    } else {
      closeMenus();
      menuWishlist.style.display = "block";
      buttonWishlist.classList.add("active");
    }
  });

  buttonUser.addEventListener("click", () => {
    console.log("menu user clicked");
    if (menuUser.style.display === "block") {
      menuUser.style.display = "none";
      buttonUser.classList.remove("active");
    } else {
      closeMenus();
      menuUser.style.display = "block";
      buttonUser.classList.add("active");
    }
  });

  buttonCart.addEventListener("click", () => {
    console.log("menu cart clicked");
    if (menuCart.style.display === "block") {
      menuCart.style.display = "none";
      buttonCart.classList.remove("active");
    } else {
      closeMenus();
      menuCart.style.display = "block";
      buttonCart.classList.add("active");
    }
  });

  buttonAllGenre.addEventListener("click", () => {
    console.log("menu all genre clicked");
    if (menuAllGenre.style.display === "block") {
      menuAllGenre.style.display = "none";
      buttonAllGenre.classList.remove("active");
    } else {
      closeMenus();
      menuAllGenre.style.display = "block";
      buttonAllGenre.classList.add("active");
    }
  });

  document.addEventListener("click", function (event) {
    const target = event.target;
    const isMenuButton = target.closest(
      "#menu-wishlist, #menu-user, #menu-cart, #menu-all-filters-header"
    );
    const isMenuContent = target.closest(
      "#menu-wishlist-content, #menu-user-content, #menu-cart-content, #menu-all-filters-header-content"
    );

    // Si el clic no fue en un botón de menú ni en su contenido, cerrar todos los menús
    if (!isMenuButton && !isMenuContent) {
      closeMenus();
    }
  });

  const closeButton = document.querySelector(
    ".close-button-all-filters-container"
  );
  const filterContainer = document.querySelector(".all-books-filter-container");

  closeButton.addEventListener("click", function () {
    filterContainer.style.display = "none";
  });

  // Iniciar sesión - Registrarse
  const passwordVisibilityButton = document.getElementById(
    "togglePasswordButton"
  );
  const closeButtonLogin = document.getElementById("close-button-login");
  const closeButtonRegister = document.getElementById("close-button-register");
  const toggleRegisterButton = document.getElementById(
    "toggle-register-button"
  );
  const toggleRegisterPopup = document.getElementById("toggle-signup-popup");
  const toggleLoginButton = document.getElementById("toggle-login-popup");
  const overlay = document.getElementById("overlay");
  const loginContainer = document.getElementById("login-container");
  const registerContainer = document.getElementById("register-container");


  toggleRegisterPopup.addEventListener("click", function () {
    if ((loginContainer.style.display = "block")) {
      loginContainer.style.display = "none";
    } else {
      console.log("login container is not visible");
    }
    registerContainer.style.display = "block";
    overlay.style.display = "block";
  });

  toggleLoginButton.addEventListener("click", function () {
    if (
      (registerContainer.style.display = "block")
    ) {
      registerContainer.style.display = "none";
    }
    loginContainer.style.display = "block";
    overlay.style.display = "block";
  });

  closeButtonLogin.addEventListener("click", function () {
    loginContainer.style.display = "none";
    overlay.style.display = "none";
  });

  closeButtonRegister.addEventListener("click", function () {
    registerContainer.style.display = "none";
    overlay.style.display = "none";
  });

  toggleRegisterButton.addEventListener("click", function () {
    console.log("toggle register clicked");
    if ((loginContainer.style.display = "block")) {
      loginContainer.style.display = "none";
    } else {
      console.log("login container is not visible");
    }
    registerContainer.style.display = "block";
    overlay.style.display = "block";
  });

  overlay.addEventListener("click", function () {
    if (loginContainer.style.display === "block") {
      loginContainer.style.display = "none";
      overlay.style.display = "none";
    } else if (registerContainer.style.display === "block") {
      registerContainer.style.display = "none";
      overlay.style.display = "none";
    }
  });

  passwordVisibilityButton.addEventListener("click", togglePasswordVisibility);

  function togglePasswordVisibility() {
    let passwordInput = document.getElementById("passwordInput");
    let toggleIcon = document.getElementById("toggleIcon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  }

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
