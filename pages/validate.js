function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate name field
  if (name == "" || name.length < 3) {
    alert("Please enter your name.");
    return false;
  }

  // Validate email field
  if (email == "" || !email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate message field
  if (message == "") {
    alert("Please enter a message.");
    return false;
  }

  return true;
}

// Attach the validation function to the submit button
document.getElementById("submit").onclick = validateForm;
