import { Animal } from "./Animal.js";

export class Canino extends Animal {

    constructor(nome, especie, altura, peso, dataNascimento) {
        super(nome, especie, altura, peso, dataNascimento)
    }

    farejar() {
        return "O " + this.constructor.name + " " + super.nome + " Está farejando!!!";
    }

    grunhir() {
        return "O " + this.constructor.name + " " + super.nome + " Está Grunindo!!!";
    }
    uivar() {
        return "O " + this.constructor.name + " " + super.nome + " Está Uivando!!!";
    }

    comer() {
        return  "O " + super.constructor.name + " " + super.nome + " Está Comendo Ração!!!";
    }

    andar() {
        return "O " + super.constructor.name + " " + super.nome + " Está Andando sob Quatro Patas!!!";
    }
}




