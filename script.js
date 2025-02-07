document.querySelector("#signupForm").onsubmit = function (e) {
    e.preventDefault(); // Prevent form submission
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let password = document.querySelector("#password").value;
    let confirm_password = document.querySelector("#confirm_password").value;
  
    // Reset styles first
    document.querySelectorAll("input").forEach(input => input.style.borderColor = "#ccc");
  
    // Check username
    if (username === "") {
      alert("Please enter your name");
      document.querySelector("#username").style.borderColor = "red";
      return false;
    }
  
    // Check email
    if (!(email.includes("@") && email.includes(".com"))) {
      alert("Please enter a valid email");
      document.querySelector("#email").style.borderColor = "red";
      return false;
    }
  
    // Check number
    if (number.length !== 10) {
      alert("Please enter a 10-digit phone number");
      document.querySelector("#number").style.borderColor = "red";
      return false;
    } else if (isNaN(number)) {
      alert("Please enter a valid number");
      document.querySelector("#number").style.borderColor = "red";
      return false;
    }
  
    // Check password
    if (password === "") {
      alert("Please enter your password");
      document.querySelector("#password").style.borderColor = "red";
      return false;
    } else if (
      !password.match(/[0-9]/) ||
      !password.match(/[!@#$%^&*_()-]/) ||
      !password.match(/[a-z]/) ||
      !password.match(/[A-Z]/)
    ) {
      alert("Password must contain at least one lowercase, uppercase letter, one number, and one special character.");
      document.querySelector("#password").style.borderColor = "red";
      return false;
    }
  
    // Check confirm password
    if (confirm_password === "") {
      alert("Please confirm your password");
      document.querySelector("#confirm_password").style.borderColor = "red";
      return false;
    }
  
    if (password !== confirm_password) {
      alert("Passwords do not match.");
      return false;
    }
  
    // If everything is correct
    alert("Signup successful!");
    // Redirect to login page
    window.location.href = "login.html";
  };