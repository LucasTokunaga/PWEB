function maiorNumero() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var num3 = parseFloat(prompt("Digite o terceiro número:"));
    var maior = 0;

    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    return maior; 
}

function ordenarNumeros() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var num3 = parseFloat(prompt("Digite o terceiro número:"));

    var numeros = [num1, num2, num3];

    numeros.sort(function(a, b) {
        if (a < b) {
            return -1; 
        } else if (a > b) {
            return 1;
        } else {
            return 0; 
        }
    });

    return numeros;
}

var maior = maiorNumero();
alert("O maior número é: " + maior);

var numerosOrdenados = ordenarNumeros();
alert("A sequência ordenada é: " + numerosOrdenados.join(", "));
