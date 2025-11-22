const likeIcons = document.querySelectorAll(".like-icon"); 

likeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("liked");

    if (icon.classList.contains("liked")) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    }
  });
});

//AOS animation
AOS.init();
AOS.init({
  duration: 1000,
});

// Form validation

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    clearErrors();

    // Name validation
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your name");
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Please enter your email");
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address");
      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === "") {
      showError(messageInput, "Please enter your message");
      isValid = false;
    }

    if (isValid) {
      alert("Thank you! Your message has been sent successfully.");
      form.reset();
    }
  });

  function showError(input, message) {
    const error = document.createElement("small");
    error.className = "text-danger";
    error.innerText = message;
    input.parentElement.appendChild(error);
    input.classList.add("is-invalid");
  }

  function clearErrors() {
    const errors = form.querySelectorAll(".text-danger");
    errors.forEach((el) => el.remove());
    const inputs = form.querySelectorAll(".is-invalid");
    inputs.forEach((el) => el.classList.remove("is-invalid"));
  }
});
