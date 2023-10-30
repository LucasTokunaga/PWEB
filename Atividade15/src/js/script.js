function validarForm() {
    const nome = document.meuForm.elements["nome"].value;
    const email = document.meuForm.elements["email"].value;
    const comentario = document.meuForm.elements["comentario"].value;
    const pesquisa = document.meuForm.elements["pesquisa"].value;

    if (nome.length < 10) {
        exibirMensagem("Nome não pode ter menos de 10 caracteres.");
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        exibirMensagem("Email deve conter '@' e '.'.");
        return false;
    }

    if (comentario.length < 20) {
        exibirMensagem("Comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    if (pesquisa !== "sim") {
        exibirMensagem("Que bom que você voltou a visitar esta página!");
    } else {
        exibirMensagem("Volte sempre a esta página!");
    }

    return false;
}

function exibirMensagem(texto) {
    const mensagem = document.getElementById("mensagem");
    const mensagemTexto = document.getElementById("mensagem-texto");
    mensagemTexto.textContent = texto;
    mensagem.style.display = "block";
}

function limparForm() {
    document.meuForm.reset();
    const mensagem = document.getElementById("mensagem");
    mensagem.style.display = "none";
}
