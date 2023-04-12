import { Animal } from "./Animal.js";

export class Felino extends Animal {

    constructor(nome, especie, altura, peso, dataNascimento) {
        super(nome, especie, altura, peso, dataNascimento)
    }

    miar() {
        return "O " + this.constructor.name + " " + super.nome + " Está Miando!!!";
    }

    ronronar() {
        return "O " + this.constructor.name + " " + super.nome + " Está Ronronando!!!";
    }
    higienizar() {
        return "O " + this.constructor.name + " " + super.nome + " Está Higienizando!!!";
    }
    comer() {
        return "O " + super.constructor.name + " " + super.nome + " Está Comendo Ração de Gatos!!!";
    }
    andar() {
        return "O " + super.constructor.name + " " + super.nome + " Está Andando como se não fosse um Felino!!!";
    }
}


