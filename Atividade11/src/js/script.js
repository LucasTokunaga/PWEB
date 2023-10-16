var aluno1 = new Object();
aluno1.RA = "0030482211026";
aluno1.nome = "Lucas Tokunaga da Silva";
alert("Aluno 1" + "\nRA: " + aluno1.RA + "\nNome: " + aluno1.nome);

var aluno2 = {};
aluno2.RA = "0030482211021";
aluno2.nome = "Tokunaga da Silva";
alert("Aluno 2" + "\nRA: " + aluno2.RA + "\nNome: " + aluno2.nome);

var aluno3 = {
    RA: "0030482211022",
    nome: "Silva"
};
alert("Aluno 3" + "\nRA: " + aluno3.RA + "\nNome: " + aluno3.nome);

function Aluno (ra, nome) {
    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function() {
        return "ra: " + this.ra + " nome: " + this.nome;
    }
}

var aluno4 = new Aluno ("123", "Lucas");

alert(aluno4.MostraDados());
alert(aluno4.nome);

var aluno5 = {};
var nome_propriedade = "ra";
aluno5[nome_propriedade] = "123";
aluno5['nome'] = "Vitor";
alert(aluno5.ra + " " + aluno5.nome);

