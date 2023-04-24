import { Component, OnInit } from '@angular/core';

import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss']
})
export class ListarPessoaComponent implements OnInit{

  constructor(private pessoaService : PessoaService) {}

  ngOnInit(): void {
    
  }
}
