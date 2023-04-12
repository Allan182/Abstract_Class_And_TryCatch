
import { Canino } from "./Canino.js";
import { Felino } from "./Felino.js";
import { Ave } from "./Ave.js";
import { Animal } from "./Animal.js";

let vetObjetos = []

try {
    const canino = new Canino("Spyke", "Normal-Type", "1.90", "90KG", "23/08/2002"); // Testes de Criação de Objetos and Call Methods
    const felino = new Felino("Growlithe", "Fire-Type", "2.90", "120KG", "03/02/2000"); // Testes de Criação de Objetos and Call Methods
    const ave = new Ave("Pidgey", "Normal-Type", "0.90", "20KG", "03/04/2006"); // Testes de Criação de Objetos and Call Methods
    //  const animal = new Animal("Urso", "Normal-Type", "3.90", "120KG", "05/08/2003"); // Captura de Erro de instancimento da classe abstrata
    vetObjetos.push(canino);
    vetObjetos.push(felino);
    vetObjetos.push(ave);
    //   vetObjetos.push(animal);
    console.log(vetObjetos);
} catch (e) {
    console.log(e.name + "| " + e.message);
}

function executaAndar(vetObjetos) {
    vetObjetos.forEach(e => {
        console.log(e.andar());
    });
}

function executaComer(vetObjetos) {
    vetObjetos.forEach(e => {
        console.log(e.comer());
    })
}

executaAndar(vetObjetos);
console.log("<===========================>");
executaComer(vetObjetos);


