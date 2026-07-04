// শুরুতে Counter এর মান 0
let count = 0;

// HTML থেকে প্রয়োজনীয় Elements নেওয়া
const countDisplay = document.getElementById("count");

const increaseButton = document.getElementById("increaseBtn");

const decreaseButton = document.getElementById("decreaseBtn");

const resetButton = document.getElementById("resetBtn");


// এই Function সংখ্যা Screen এ দেখাবে
function updateCounter(){

    countDisplay.textContent = count;

}


// Increase Button এ Click করলে
increaseButton.addEventListener("click", function(){

    count++;

    updateCounter();

});


// Decrease Button এ Click করলে
decreaseButton.addEventListener("click", function(){

    count--;

    updateCounter();

});


// Reset Button এ Click করলে
resetButton.addEventListener("click", function(){

    count = 0;

    updateCounter();

});