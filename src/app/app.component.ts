import { Component, Input } from '@angular/core';
import { Pessoa } from './models/Pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Exercicio 06/05 - TC2';
  show2 = true;

  pessoaParaEditar: Pessoa = null;

  hiddenOrShow(){
    this.show2 = !this.show2;
  }

  editarPessoa(pessoa){
    this.show2 = false;
    this.pessoaParaEditar = pessoa;
  }

  clearPessoa(n) {
    this.pessoaParaEditar = null;
  }
  
}
