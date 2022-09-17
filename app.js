const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");



function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector('small');
  small.innerText = message;

}

//function to update class for success

function showsuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";

}

// event listner
form.addEventListener("submit", function (e) {
  // stop page from reload on submit
  e.preventDefault();
  // console.log(username.value);

  //check if username input is empty
  if (username.value === '') {
    showError(username, "username is required");

  } else {
    showsuccess(username)
  }
  // remove error from username on focus
  username.addEventListener("focus", function (e) {
    username.parentElement.classList.remove("error")
  })

  //check if email input is empty
  if (email.value === '') {
    showError(email, "email is required");

  } else {
    showsuccess(email)
  }
  // remove error from email on focus
  email.addEventListener("focus", function (e) {
    email.parentElement.classList.remove("error")
  })
  //check if password input is empty
  if (password.value === '') {
    showError(password, "password is required");

  } else {
    showsuccess(password)
  }
  // remove error on password on focus
  password.addEventListener("focus", function (e) {
    password.parentElement.classList.remove("error")
  })

  //check if password2 input is empty
  if (password2.value === '') {
    showError(password2, "Re-enter your password");

  } else {
    showsuccess(password2)
  }
  // check both password
  if (password.value === password2.value) {
    alert("password matched")
  } else {
    showError(password2, "password is not matched")
  }
  // remove error from password2 on focusF
  password2.addEventListener("focus", function (e) {
    password2.parentElement.classList.remove("error")
  })


});



