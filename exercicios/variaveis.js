let varA = 'A';
let varB = 'B';
let varC = 'C';

varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);

//desestruturação de arrays 
//atribuição via desestrutuação
const numeros = [1,2,3];
[varA, varB, varC] = numeros;

console.log(varA, varB, varC)