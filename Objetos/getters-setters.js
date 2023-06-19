function Produto (nome, preço, estoque) {
    this.nome = nome;
    this.preco = preço;

    let estoquePrivado = estoque;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
               throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}


//const p1 = new Produto ('Camiseta', 20, 3); 
//console.log(p1);
//p1.estoque = 'afsafsfa';
//console.log(p1.estoque);


function criaProduto(nome) {
    return { 
        get nome(){
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'qualquer coisa';
console.log(p2.nome);



