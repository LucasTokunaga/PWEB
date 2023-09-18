var valor1, valor2;

valor1 = prompt ("Digite o 1º Valor:");
valor2 = prompt ("Digite o 2º Valor:");

var soma = parseFloat(valor1) + parseFloat(valor2);
var subtracao = parseFloat(valor1) - parseFloat(valor2);
var multiplicacao = parseFloat(valor1) * parseFloat(valor2);
var divisao = parseFloat(valor1) / parseFloat(valor2);
var resto = parseFloat(valor1) % parseFloat(valor2);

alert ("Soma: " + soma + "\nSubtração: " + subtracao + "\nMultiplicação: " + multiplicacao + "\nDivisão: " + divisao + "\nResto: " + resto);

