//superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Agencia/Banco: ${this.agencia}/${this.conta} `);
    console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

/*
const conta = new Conta(11, 2345, 10);
conta.depositar(11);
conta.depositar(10);
conta.sacar(31);
conta.sacar(0.01);
*/


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite; 
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;


ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

/*
const contaCorrente = new ContaCorrente(11,22,0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);
*/

function ContaPoupança(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;

const contaPoupança = new ContaPoupança(12,33,0);
contaPoupança.depositar(10);
contaPoupança.sacar(10);
contaPoupança.sacar(1);