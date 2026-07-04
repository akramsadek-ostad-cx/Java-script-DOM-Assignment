const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");

const randomNumber = Math.floor(Math.random() * 100) + 1;

guessBtn.addEventListener("click", function(){

    const userGuess = Number(guessInput.value);

    if(userGuess < 1 || userGuess > 100){

        result.textContent = "Please enter a number between 1 and 100.";

    }
    else if(userGuess > randomNumber){

        result.textContent = "Too High!";

    }
    else if(userGuess < randomNumber){

        result.textContent = "Too Low!";

    }
    else{

        result.textContent = "🎉 Correct Answer!";

    }

});