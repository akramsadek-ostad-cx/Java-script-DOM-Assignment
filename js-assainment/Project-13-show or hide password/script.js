const passwordInput = document.getElementById("password");

const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("change", function(){

    if(showPassword.checked){

        passwordInput.type = "text";

    }else{

        passwordInput.type = "password";

    }

});