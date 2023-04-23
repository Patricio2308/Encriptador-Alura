var encBtn = document.getElementById("encriptadorBtn");
var desencBtn = document.getElementById("desencriptadorBtn");
var copyBtn = document.getElementById("copiadoraBtn");
var inputText = document.getElementById("textoInput");
var areaText = document.getElementById("textoOutput");
var areaImage = document.querySelector(".areaSinMensaje");
var areaHide = document.querySelector(".areaOculta");

var texto = '';

function encriptar() {
    texto = inputText.value;
    var frase = "";
    frase = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    
    if (inputText.value != ""){
        areaImage.style.display = "none";
        areaHide.style.display = "block";
        areaText.textContent = frase;
        inputText.value = "";
    }
}
function desencriptar() {
    texto = inputText.value;
    var frase = '';
    
    frase = texto
    .replace(/ufat/g, 'u')
    .replace(/ober/g, 'o')
    .replace(/ai/g, 'a')
    .replace(/imes/g, 'i')
    .replace(/enter/g, 'e');
    
    if (inputText.value != ""){
        areaText.textContent = frase;
        inputText.value = "";
    }
}

function copiar(){
    navigator.clipboard.writeText(areaText.value);
    inputText.focus();
}

encBtn.onclick = encriptar;
desencBtn.onclick = desencriptar;
copyBtn.onclick = copiar;

