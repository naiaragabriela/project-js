function rand(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string')  reject ('BAD VALUE'); 
    setTimeout(() => {
      resolve(msg);
    }, tempo); 
  });
}


esperaAi('Conexão com o BD', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Exibe dados na tela', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.catch(e=> {
    console.log('ERRO', e);
});


//Promise.all Promise.race Promise.resolve Promise.reject
const promises = [ 
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
];


Promise.all(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro)
});

Promise.race(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro)
});


function baixaPagina() {
    const emCache = true;
    if(emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO', e));