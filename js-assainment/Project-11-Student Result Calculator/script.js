const bangla = document.getElementById("bangla");
const english = document.getElementById("english");
const math = document.getElementById("math");

const calculateBtn = document.getElementById("calculateBtn");

const totalText = document.getElementById("total");
const averageText = document.getElementById("average");
const gradeText = document.getElementById("grade");

calculateBtn.addEventListener("click", function(){

    const banglaMarks = Number(bangla.value);
    const englishMarks = Number(english.value);
    const mathMarks = Number(math.value);

    const total = banglaMarks + englishMarks + mathMarks;

    const average = total / 3;

    let grade = "";

    if(
        banglaMarks < 33 ||
        englishMarks < 33 ||
        mathMarks < 33
    ){
        grade = "F";
    }
    else if(average >= 80){
        grade = "A+";
    }
    else if(average >= 70){
        grade = "A";
    }
    else if(average >= 60){
        grade = "A-";
    }
    else if(average >= 50){
        grade = "B";
    }
    else if(average >= 40){
        grade = "C";
    }
    else if(average >= 33){
        grade = "D";
    }
    else{
        grade = "F";
    }

    totalText.textContent = `Total: ${total}`;

    averageText.textContent = `Average: ${average.toFixed(2)}`;

    gradeText.textContent = `Grade: ${grade}`;

});