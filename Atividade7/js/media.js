var nome, nota1, nota2, nota3;
nome = prompt ("Qual seu nome?");

nota1 = prompt ("Digite a 1º Nota:");
nota2 = prompt ("Digite a 2º Nota:");
nota3 = prompt ("Digite a 3º Nota:");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
alert ("Nome: " + nome + "\nMédia: " + media.toFixed(2));

