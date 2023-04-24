import { Injectable } from '@angular/core';

// importação do model
import { Pessoa } from '../../shared/models/pessoa.model';

// chave de acesso ao localStorage (armazena strings)
const LS_CHAVE: string = "pessoas"
console.log("LS CHAVE", LS_CHAVE);

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() {

    // listarTodos(): Pessoa[] {
    //   const pessoas = localStorage[LS_CHAVE];
    //   return pessoas ? JSON.parse(pessoas) : []
    // }

    // inserir(pessoa: Pessoa): void {
    //   // obtém a lista completa de pessoass
    //   const pessoas = this.listarTodos();

    //   pessoa.id = new Date().getTime();

    //   pessoas.push(pessoa);

    //   localStorage[LS_CHAVE] = JSON.stringify(pessoas);
    // }

    // buscarPorId(id: number): Pessoa | undefined {

    //   const pessoas: Pessoa[] = this.listarTodos();

    //   return pessoas.find(pessoa.id === id);
    // }

    // atualizar(pessoa: Pessoa): void {
    //   const pessoas: Pessoa[] = this.listarTodos();

    //   pessoas.forEach((obj, index, objs) => {
    //     if (pessoa.id === obj.id) {
    //       objs[index] = pessoa
    //     }
    //   });

    //   localStorage[LS_CHAVE] = JSON.stringify(pessoas);
    // }
  }
}
