 class ControleRemote {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //método estático 
    static trocaPilha(){
    console.log('Ok, vou trocar');
    }
 }


 const controle = new  ControleRemote('LG');
 controle.aumentarVolume();
 controle.aumentarVolume();
 controle.diminuirVolume();
 console.log(controle);
 ControleRemote.trocaPilha();
