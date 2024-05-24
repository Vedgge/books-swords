document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("boton login clicked");

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("passwordInput").value;

      if (validateEmail(email) && validatePassword(password)) {
        alert("Inicio de sesión exitoso");
      } else {
        alert("Por favor, ingrese información válida");
      }
    });

  document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("registerName").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const securityAnswer = document.getElementById("securityAnswer").value;

      if (
        validateName(name) &&
        validateEmail(email) &&
        validatePassword(password) &&
        confirmPasswordMatch(password, confirmPassword) &&
        securityAnswer
      ) {
        alert("Registro exitoso");
      } else {
        alert("Por favor, complete todos los campos correctamente");
      }
    });

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("contactName").value;
      const email = document.getElementById("contactEmail").value;
      const phone = document.getElementById("contactPhone").value;
      const subject = document.getElementById("contactSubject").value;
      const message = document.getElementById("contactMessage").value;
      console.log(name, email, phone, subject, message);
      if (
        validateName(name) &&
        validateEmail(email) &&
        validatePhone(phone) &&
        validateMessage(message)
      ) {
        // Constructor la URL
        const url = `mostrar-datos-cto.html?contactName=${encodeURIComponent(
          name
        )}&contactEmail=${encodeURIComponent(
          email
        )}&contactPhone=${encodeURIComponent(
          phone
        )}&contactSubject=${encodeURIComponent(
          subject
        )}&contactMessage=${encodeURIComponent(message)}`;
        console.log(url);
        // Redirección a 'mostrar-datos-cto.html'
        window.location.href = url;
      } else {
        alert("Por favor, complete todos los campos de contacto requeridos correctamente");
      }
    });

  function validateName(name) {
    return name.trim().length > 0;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    return true;
  }

  function validatePhone(phone) {
    const phoneRegex = /^\+?\d{10,20}$/;
    return phoneRegex.test(phone);
  }

  function validateMessage(message) {
    return message.trim().length > 0;
  }

  function confirmPasswordMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
      alert("Contraseñas no coinciden");
    } else {
      return password;
    }
  }
});
