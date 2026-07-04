const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");

textInput.addEventListener("input", function(){

    const text = textInput.value.trim();

    if(text === ""){

        preview.textContent = "Type Something...";

    }else{

        preview.textContent = text;

    }

});