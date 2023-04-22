var encBtn = document.getElementById("encriptador");
var desencBtn = document.getElementById("desencriptador");
var inputText = document.getElementById("textoInput");
var areaText = document.getElementById("textoOutput");

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

    areaText.textContent = frase;
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

    areaText.textContent = frase;
}
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */


encBtn.onclick = encriptar;
desencBtn.onclick = desencriptar;
