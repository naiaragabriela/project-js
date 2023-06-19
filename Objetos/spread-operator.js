const  produto = {nome: 'caneca', preco: 1.8};
const copo = {
    ...produto,
    material: 'porcelana'
};

copo.nome = 'copo';
copo.preco = 2.5;
console.log(produto);
console.log(copo);