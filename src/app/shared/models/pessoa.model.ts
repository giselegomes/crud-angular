export class Pessoa {
    // cria id, nome e idade como atributos
    // o "? indica que são opcionais na chamada do construtor"
    constructor (
        public id?: number,
        public nome?: string,
        public idade?: number
    ) { }
}
