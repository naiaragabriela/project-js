const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
      rua: "Av Brasil",
      numero: 320
  }
};


//Atribuição via desestruturação 

const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);


//criar uma váriavel com as outras propriedades
const { idade, ...resto } = pessoa;
console.log(resto);