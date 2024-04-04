const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Nombre: ${fullName.value} <br> Email:${email.value}<br>Numero: ${phone.value}<br> Dice:" ${mess.value}"`;

  Email.send({
    SecureToken: "6d60719a-5308-4ad6-8d0a-7a6fb97cd28e",
    To: "info@adrian-coceres.com",
    From: "info@adrian-coceres.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Enviado!",
        text: "Mensaje enviado correctamente!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    if (items[1].value != "") {
      checkEmail();
    }
    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
    if (email.value != "") {
      errorTxtEmail.innerText = "Ingresa un mail valido";
    } else {
      errorTxtEmail = "No puede quedar vacio";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
    sendEmail();
    form.reset();
    return false;
  }
});
