import { Component, OnInit } from '@angular/core';

import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss']
})
export class ListarPessoaComponent implements OnInit{

  constructor(private pessoaService : PessoaService) {}

  //atributo pessoa 
  pessoas: Pessoa[] = [];

  // onInit garante que o componente esteja pronto para ser usado antes de ser exibido na tela
  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    return [
      new Pessoa(1, "Razer", 20),
      new Pessoa(2, "Brunna", 52),
      new Pessoa(3, "Guilherme", 33),
      new Pessoa(4, "Juan", 88)
    ];
  }
}
