const quoteText = document.getElementById("quote");
const quoteButton = document.getElementById("quoteBtn");

const quotes = [

    "Believe you can and you're halfway there.",

    "Dream big and dare to fail.",

    "Success is not final, failure is not fatal.",

    "Do something today that your future self will thank you for.",

    "The best way to get started is to quit talking and begin doing.",

    "Stay positive. Work hard. Make it happen.",

    "Never stop learning because life never stops teaching.",

    "Small steps every day lead to big results."

];

quoteButton.addEventListener("click", function(){

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[randomIndex];

});