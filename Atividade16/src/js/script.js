function mostrarConfirmacao() {
    var cursoSelect = document.getElementById('cursoSelect');
    var cursoEscolhido = cursoSelect.options[cursoSelect.selectedIndex].text;

    var confirmacao = confirm("Deseja abrir a janela do curso: " + cursoEscolhido + "?");

    if (confirmacao) {
        abrirJanela(cursoEscolhido);
    }
}

function abrirJanela(curso) {
    var url;

    if (curso == "Análise e Desenvolvimento de Sistemas") {
        url = "analise_sistemas.html";
    }
    else if (curso === "Eletrônica Automotiva") {
        url = "eletronica_automotiva.html";
    }
    else if (curso === "Sistemas Biomédicos") {
        url = "sistemas_biomedicos.html"
    }

    window.open(url, curso, "width=600, height=300");
}

