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
    if (inputText.value.trim() != "") {
        areaText.textContent = texto;
        inputText.value = "";
        restricciones();
        esconderImagen();
    }
}
function restricciones() {
    var regexAcento = /[\u00C0-\u00FF]/g;
    var regexMayus = /[A-Z]/g;

    if (regexAcento.test(texto)){
        areaText.innerHTML = "&#128369; DENEGADO &#128369;\nEl texto no debe contener acentos ni caracteres especiales."; 
    } else if (regexMayus.test(texto)) {
        areaText.innerHTML = "&#128369; DENEGADO &#128369;\nEl texto no debe contener letras mayúsculas.";
    }
    texto = "";
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

    restricciones()
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
    copyBtn.textContent = 'Copiado';
    setTimeout(function () {
        copyBtn.textContent = 'Copiar';
    }, 1500);
}

encBtn.onclick = encriptar;
desencBtn.onclick = desencriptar;
copyBtn.onclick = copiar;


