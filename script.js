const textAreaInput = document.querySelector(".text-area-input");
const textAreaOutput = document.querySelector(".text-area-output");
const errorMessage = document.querySelector(".error-message");
const btnCopiar = document.querySelector(".btn-copiar");

function botonEncriptar() {
    const textoEncriptado = encriptar(textAreaInput.value);
    textAreaOutput.value = textoEncriptado;
    textAreaInput.value = "";
    textAreaOutput.style.backgroundImage = "none";

    if (textoEncriptado) {
        errorMessage.style.display = "none";
        btnCopiar.style.display = "block"; 
    }
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textAreaInput.value);
    textAreaOutput.value = textoDesencriptado;
    textAreaInput.value = "";
    textAreaOutput.style.backgroundImage = "none";

    if (textoDesencriptado) {
        errorMessage.style.display = "none";
        btnCopiar.style.display = "block"; 
    }
}

function copiarAlPortapapeles() {
    textAreaOutput.select(); 
    document.execCommand('copy'); 
}

btnCopiar.addEventListener("click", copiarAlPortapapeles);

function encriptar(textoAEncriptar) {
    let logica = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoAEncriptar = textoAEncriptar.toLowerCase();

    for (let i = 0; i < logica.length; i++) {
        if (textoAEncriptar.includes(logica[i][0])) {
            textoAEncriptar = textoAEncriptar.replaceAll(logica[i][0], logica[i][1]);
        }
    }
    return textoAEncriptar;
}

function desencriptar(textoADesncriptar) {
    let logica = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoADesncriptar = textoADesncriptar.toLowerCase();

    for (let i = 0; i < logica.length; i++) {
        if (textoADesncriptar.includes(logica[i][1])) {
            textoADesncriptar = textoADesncriptar.replaceAll(logica[i][1], logica[i][0]);
        }
    }
    return textoADesncriptar;
}
