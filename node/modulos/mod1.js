/*const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
   nome + ' '+ sobrenome;
};


module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module.exports);


exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'qualquer coisa';

console.log(exports);

*/

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;