function criaPesssoa(nome, sobrenome) {
    return {
      nome,
      sobrenome,
      nomeCompleto() {
          return `${this.nome} ${this.sobrenome}`;
      }
    };
}

const p1 = criaPessoa('Luis', 'Otavio');
console.log(p1.nomeCompleto());