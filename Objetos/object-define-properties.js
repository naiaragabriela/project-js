function Produto (nome, preço, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: false,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
}