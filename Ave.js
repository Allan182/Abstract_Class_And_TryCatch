import { Animal } from "./Animal.js";

export class Ave extends Animal {

    constructor(nome, especie, altura, peso, dataNascimento) {
        super(nome, especie, altura, peso, dataNascimento)
    }
    voar() {
        return "A " + this.constructor.name + " " + super.nome + " Está Voando!!!";
    }

    baterAsas() {
        return "A " + this.constructor.name + " " + super.nome + " Está Batendo as asas!!!";
    }
    piar() {
        return "A " + this.constructor.name + " " + super.nome + " Está Piando!!!";
    }

    comer() {
        return "O " + super.comer() + " Está Comendo Milho!!!";
    }

    andar() {
        return "O " + super.andar()  + " Está Andando sob Duas Patas!!!";

    }
}



