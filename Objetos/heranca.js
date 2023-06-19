function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco += quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Calca (nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
              return;  
            }
            estoque = valor;
        } 
    });
}
Calca.prototype = Object.create(Produto.prototype);
Calca.prototype.constructor = Calca;

const calca = new Calca('calca', 80, 'jeans', 3);
const produto = new Produto ('caneca', 5);
const camiseta = new Camiseta('Regata', 12, 'Preta');
console.log(camiseta);
console.log(produto);
console.log(calca);