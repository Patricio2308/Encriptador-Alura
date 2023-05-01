var encBtn = document.getElementById("encriptadorBtn");
var desencBtn = document.getElementById("desencriptadorBtn");
var copyBtn = document.getElementById("copiadoraBtn");
var inputText = document.getElementById("textoInput");
var areaText = document.getElementById("textoOutput");
var areaImage = document.querySelector(".areaSinMensaje");

var texto = '';

/* Oculta la imagen y su texto, nuestra el texto desencriptado */
function esconderImagen() {
    areaImage.style.display = "none";
    document.querySelector(".areaOculta").style.display = "block";
}

function imprimirTexto() {
    if (inputText.value != "") {
        areaText.textContent = texto;
        inputText.value = "";
        esconderImagen();
    }
}

function encriptar() {
    texto = inputText.value;

    texto = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    imprimirTexto();
}

function desencriptar() {
    texto = inputText.value;

    texto = texto
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');

    imprimirTexto();
}

function copiar() {
    navigator.clipboard.writeText(areaText.value);
    inputText.focus();
    copyBtn.textContent = 'Copiado'
    setTimeout(function () {
        copyBtn.textContent = 'Copiar'
    }, 1500)
}

encBtn.onclick = encriptar;
desencBtn.onclick = desencriptar;
copyBtn.onclick = copiar;


