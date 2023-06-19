//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //_proto_: Object.prototype
};


//new Object -> Object.prototype
const objB = {
    chaveB: 'B'
    //_proto_: objA
};


const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveA);


console.log('*****************************************');

function Produto (nome, preco) {
    this.nome = nome;
    this.preco =preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
};


Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco* (percentual/100));
};


const p1 = new Produto('Camiseta azul', 50);
p1.desconto(100);
console.log(p1);

const p2 = {
    nome: 'camiseta amarela',
    preco: 15
}; 

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2);


const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'camiseta verde'
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    }
});

p3.preco = 110;
p3.aumento(10);
console.log(p3);
