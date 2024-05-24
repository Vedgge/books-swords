document.addEventListener("DOMContentLoaded", function () {
  // Menus desplegables
  const buttonWishlist = document.getElementById("menu-wishlist");
  const buttonUser = document.getElementById("menu-user");
  const buttonCart = document.getElementById("menu-cart");
  const buttonAllGenre = document.getElementById("menu-all-filters-header");
  const buttonAllGenreMobile = document.getElementById(
    "menu-all-filters-mobile"
  );
  const menuAllGenre = document.getElementById(
    "menu-all-filters-header-content"
  );
  const menuWishlist = document.getElementById("menu-wishlist-content");
  const menuUser = document.getElementById("menu-user-content");
  const menuCart = document.getElementById("menu-cart-content");
  // Mobile buttons
  const menuUserMobile = document.getElementById("menu-user-mobile");
  const menuWishlistMobile = document.getElementById("menu-wishlist-mobile");
  const menuCartMobile = document.getElementById("menu-cart-mobile");

  function closeMenus() {
    menuWishlist.style.display = "none";
    menuUser.style.display = "none";
    menuCart.style.display = "none";
    menuAllGenre.style.display = "none";

    buttonWishlist.classList.remove("active");
    buttonUser.classList.remove("active");
    buttonCart.classList.remove("active");
    buttonAllGenreMobile.classList.remove("active");
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

  buttonAllGenreMobile.addEventListener("click", () => {
    console.log("menu all genre clicked");
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
  const passwordConfirmVisibilityButton = document.getElementById(
    "toggleConfirmPasswordButton"
  );

  const closeButtonLogin = document.getElementById("close-button-login");
  const closeButtonRegister = document.getElementById("close-button-register");
  const cancelButtonRegister = document.getElementById(
    "cancel-register-button"
  );
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
    if ((registerContainer.style.display = "block")) {
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

  cancelButtonRegister.addEventListener("click", function () {
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
  passwordConfirmVisibilityButton.addEventListener("click", togglePasswordVisibility)

  function togglePasswordVisibility() {
    let passwordInput = document.getElementById("passwordInput");
    let confirmPassword = document.getElementById("confirmPassword");
    let toggleIcon = document.getElementById("toggleIcon");
    console.log(passwordInput.type);

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }

    if (confirmPassword.type === "password") {
      confirmPassword.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      confirmPassword.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  }
});
