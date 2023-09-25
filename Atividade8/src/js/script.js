var nome, escolha1, escolha2;
nome = prompt ("Qual seu nome?");

escolha1 = prompt ("Qual sua escolha?");
var maiscula1 = escolha1.toUpperCase();
alert("Escolha de " + nome + ": " + escolha1);

escolha2 = Math.floor(Math.random() * 2);
if (escolha2 == 0){
    var escolha2 = "PEDRA";
    alert("Escolha do computador: Pedra");
}
else if (escolha2 == 1){
    var escolha2 = "PAPEL";
    alert("Escolha do computador: Papel");
}
else if (escolha2 == 2){
    var escolha2 = "TESOURA";
    alert("Escolha do computador: Tesoura");
}

console.log(escolha2);

if (maiscula1 == escolha2){
    alert ("Empate");
}
else if (maiscula1 == "TESOURA" && escolha2 == "PEDRA"){
    alert ("Computador venceu!!!");
}
else if (maiscula1 == "PAPEL" && escolha2 == "TESOURA"){
    alert ("Computador venceu!!!");
}
else if (maiscula1 == "PEDRA" && escolha2 == "PAPEL"){
    alert ("Computador venceu!!!");
}
else{
    alert (nome +" venceu!!!");
}
