for (let i = 0; i<=5; i++ ) {
    console.log(i);
}
console.log();

const frutas = ['Maçã', 'Pera', 'Uva', 'Banana'];

for (let f = 0; f < frutas.length; f++ ){
    console.log(`Indice ${f}`, frutas[f]);
}
console.log();

for (let indice in frutas) {
    console.log(frutas[indice]);
}
console.log();

for (let valor of frutas){
    console.log(valor);
}
console.log();

frutas.forEach(function(valor, indice) {
    console.log(valor, indice);
});
console.log();

const pessoa = {
    nome: 'Naiara',
    sobrenome: 'Gabriela'
};
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}