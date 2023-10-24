function transformarTexto() {
    var texto = document.getElementById("texto").value;
    var maiusculas = document.getElementById("maiusculas").checked;
    var minusculas = document.getElementById("minusculas").checked;
    var resultado = "";

    if (maiusculas) {
        resultado = texto.toUpperCase();
    }

    if (minusculas) {
        resultado = texto.toLowerCase();
    }

    document.getElementById("texto-transformado").textContent = resultado;
}

document.getElementById("maiusculas").addEventListener("change", transformarTexto);
document.getElementById("minusculas").addEventListener("change", transformarTexto);
