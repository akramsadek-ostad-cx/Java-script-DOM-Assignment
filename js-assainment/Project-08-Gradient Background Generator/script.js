const generateBtn = document.getElementById("generateBtn");
const gradientCode = document.getElementById("gradientCode");

const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F39C12",
    "#8E44AD",
    "#1ABC9C",
    "#E91E63",
    "#00BCD4",
    "#9C27B0",
    "#2ECC71"
];

function randomColor(){

    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
}

generateBtn.addEventListener("click",function(){

    const color1 = randomColor();

    const color2 = randomColor();

    const angle = Math.floor(Math.random() * 360);

    const gradient =
    `linear-gradient(${angle}deg, ${color1}, ${color2})`;

    document.body.style.background = gradient;

    gradientCode.textContent = gradient;

});