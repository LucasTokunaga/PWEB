class Retangulo {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calculaArea(){
        alert (this.base * this.altura);
    }
}

objRetangulo = new Retangulo (20,2);
objRetangulo.calculaArea();

class Conta {
    constructor(nome, banco, numero, saldo) {
        this.nome = nome;
        this.banco = banco;
        this.numero = numero;
        this.saldo = saldo;
    }

    consultaConta() {
        alert("Nome: " + this.nome + "\nBanco: " + this.banco + "\nNúmero: " + this.numero + "\nSaldo: " + this.saldo);
    }
}

class Corrente extends Conta {
    constructor(nome, banco, numero, saldo, saldoEspecial) {
        super(nome, banco, numero, saldo);
        this.saldoEspecial = saldoEspecial;
    }

    consultaConta() {
        alert("Nome: " + this.nome + "\nBanco: " + this.banco + "\nNúmero: " + this.numero + "\nSaldo: " + this.saldo + "\nSaldo Especial: " + this.saldoEspecial);
    }
}

class Poupanca extends Conta {
    constructor(nome, banco, numero, saldo, juros, dataVencimento) {
        super(nome, banco, numero, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    consultaConta() {
        alert("Nome: " + this.nome + "\nBanco: " + this.banco + "\nNúmero: " + this.numero + "\nSaldo: " + this.saldo + "\nJuros: " + this.juros + "\nData de Vencimento: " + this.dataVencimento);
    }
}



objCorrente = new Corrente("Lucas Tokunaga", "Banco Inter", "223344", 100000, 5000);
objPoupanca = new Poupanca("Miguel Orio", "Banco Bradesco", "54321", 25000, "10%", "29/12/2050");

objCorrente.consultaConta();
objPoupanca.consultaConta();
