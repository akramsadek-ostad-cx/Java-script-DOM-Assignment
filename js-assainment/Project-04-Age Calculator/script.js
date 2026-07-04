const birthDate = document.getElementById("birthDate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function(){

    if(birthDate.value === ""){
        result.textContent = "Please select your birth date.";
        return;
    }

    const dob = new Date(birthDate.value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    const monthDifference = today.getMonth() - dob.getMonth();

    if(
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < dob.getDate())
    ){
        age--;
    }

    result.textContent = `Your Age: ${age} Years`;

});