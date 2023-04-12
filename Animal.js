export class Animal {

    #nome;
    #especie;
    #altura;
    #peso;
    #dataNascimento;

    constructor(nome, especie, altura, peso, dataNascimento) {

        if (this.constructor != Animal) {
            this.#nome = nome;
            this.#especie = especie;
            this.#altura = altura;
            this.#peso = peso;
            this.#dataNascimento = dataNascimento;
        } else {
            throw new TypeError("O Objeto instânciado pertence a uma classe Abstrata !!!");
        }
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        if (nome != undefined) {
            this.#nome = nome;
        }
    }

    get especie() {
        return this.#especie;
    }

    set especie(especie) {
        if (especie != undefined) {
            this.#especie = especie;
        }
    }

    get altura() {
        return this.#altura;
    }

    set altura(altura) {
        if (altura != undefined) {
            this.#altura = altura;
        }
    }

    get peso() {
        return this.#peso;
    }

    set peso(peso) {
        if (peso != undefined) {
            this.#peso = peso;
        }
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    set dataNascimento(dataNascimento) {
        if (dataNascimento != undefined) {
            this.#dataNascimento = dataNascimento;
        }
    }

    comer() {
        return `${this.constructor.name} ${this.nome}`;
    }

    andar() {
        return `${this.constructor.name} ${this.nome}`;
    }
}


