/*const {nome, sobrenome, falaNome} = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());

const mod1 = require('./mod1');
const falaNome = mod1.falaNome;
console.log(falaNome());*/

const {Pessoa} = require('./mod1');
const p1 = new Pessoa('Luiz');
console.log(p1);

