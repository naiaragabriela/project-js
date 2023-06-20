class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
      if(this.ligado) {
        console.log(this.nome + ' já está ligado');
        return;
      }
      this.ligado = true;
    }

    desligar() {
      if(!this.ligado) {
        console.log(this.nome + ' já está desligado');
        return;
      }
      this.ligado = false;
    }
}

/*
const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
console.log(d1);
*/

class Smartphone extends DispositivoEletronico {
    cosntructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iPhone', 'black', 'proMax');
console.log(s1);