var pessoas = [];

document.getElementById("enviar").addEventListener("click", function() {
    var idade = parseInt(document.getElementById("idade").value);
    var sexo = document.getElementById("sexo").value;
    var opiniao = parseInt(document.getElementById("opiniao").value); 

    var pessoa = {
        Idade: idade,
        Sexo: sexo,
        Opiniao: opiniao
    };

    pessoas.push(pessoa);

    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("opiniao").value = "";

    if (pessoas.length == 45) {
        alert("Você adicionou informações para 45 pessoas!");
        document.getElementById("enviar").disabled = true; // Desabilitar o botão "Enviar"
    }

    console.log(pessoa);
});


document.getElementById("calcular").addEventListener("click", function() {
    function calcularMediaIdades(pessoas) {
        let somaIdades = 0;
    
        for (let i = 0; i < pessoas.length; i++) {
            somaIdades += pessoas[i].Idade;
        }
        return somaIdades / pessoas.length;
    }
    
    var mediaIdades = calcularMediaIdades(pessoas);
    
    var maisVelha = 0;
    var maisNova = 999;
    function verificaIdade (pessoas){
        for (let i = 0; i < pessoas.length; i++) {
            if(pessoas[i].Idade >= maisVelha){
                maisVelha = pessoas[i].Idade;
            } 
            if(pessoas[i].Idade <= maisNova){
                maisNova = pessoas[i].Idade;
            }
            else{
                continue;
            }
        }
    }

    verificaIdade (pessoas);

    var pessimo = 0, otimo = 0, bom = 0;
    function verificaNotas (pessoas){
        for (let i = 0; i < pessoas.length; i++) {
           if(pessoas[i].Opiniao == 1){
            pessimo += 1;
           }
           else if(pessoas[i].Opiniao == 3){
            bom += 1;
           }
           else if(pessoas[i].Opiniao == 4){
            otimo += 1;
           }
           else{
            continue;
           }
        }
        bom = ((bom * 100 / pessoas.length).toFixed(2)) + "%";
        otimo = ((otimo * 100 / pessoas.length).toFixed(2)) + "%";

    }

    verificaNotas(pessoas);
    
    
    var mulher = 0, homem = 0;
    function verificaSexo (pessoas){
        for (let i = 0; i < pessoas.length; i++) {
            if((pessoas[i].Sexo.toUpperCase()) == "F"){
                mulher += 1;
            }
            else{
                homem += 1;
            }
         }
    }

    verificaSexo(pessoas);

    alert("A média de idade é: " + Math.ceil(mediaIdades) + "\nIdade da pessoa mais velha: " + maisVelha + "\nIdade da pessoa mais nova: " + maisNova + "\nPéssimo: " + pessimo + "\nÓtimo: " + otimo + "\nBom: " + bom + "\nHomens: " + homem + "\nMulheres: " + mulher);
});

