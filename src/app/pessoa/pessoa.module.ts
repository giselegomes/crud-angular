import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PessoaService } from './services/pessoa.service';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';

@NgModule({
  declarations: [
    ListarPessoaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
