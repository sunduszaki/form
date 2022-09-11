const form = document.getElementById("form");
const username = document.getElementById("username");
const email =document.getElementById("email");
const password =document.getElementById("password");
const password2=document.getElementById("password2");



function showError(input,message){
   const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;

}

//function to update class for success

function showSuceess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}


// event listner
form.addEventListener("submit",function(e){
    // stop page from reload on submit
    e.preventDefault();
// console.log(username.value);

//check if username input is empty
if(username.value === ''){
  showError(username,"username is required");
  
}else{
    showSuceess(username)
}

//check if email input is empty
if(email.value === ''){
    showError(email,"email is required");
    
  }else{
      showSuceess(email)
  }

  //check if password input is empty
if(password.value === ''){
    showError(password,"password is required");
    
  }else{
      showSuceess(password)
  }

  //check if password2 input is empty
if(password2.value === ''){
    showError(password2,"Re-enter your password");
    
  }else{
      showSuceess(password2)
  }
  // check both password
  if(password.value === password2.value){
    alert("password matched")
  }else{
    showError(password2,"password is not matched")
  }

});
 



