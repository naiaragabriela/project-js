function Produto (nome, preço, estoque) {
    this.nome = nome;
    this.preco = preço;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: false,
        value: estoque,
        writable: true,
        configurable: false
    });
}

const p1 = new Produto ('Camiseta', 20, 3); 
//p1.estoque = 5000;
//delete p1.estoque;
//console.log(p1)
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}