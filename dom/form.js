function validateForm(e) {
    e.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || !/^[a-z A-Z]+$/.test(name)) {
      document.getElementById("nameError").textContent = "Name should not be empty and should contain only letters.";
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      return false;
    }

    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
      document.getElementById("passwordError").textContent = "Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.";
      return false;
    }

    if (confirmPassword !== password) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      return false;
    }

    document.getElementById("myForm").submit();
  }