const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

function generatePassword(){

    let password = "";

    for(let i = 0; i < 12; i++){

        const randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];

    }

    passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", function(){

    passwordInput.select();

    navigator.clipboard.writeText(passwordInput.value);

    alert("Password Copied!");

});