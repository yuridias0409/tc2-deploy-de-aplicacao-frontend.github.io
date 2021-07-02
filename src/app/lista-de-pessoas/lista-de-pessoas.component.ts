import { DatabaseService } from '../database/database.service';
import { Pessoa } from '../models/Pessoa';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-de-pessoas',
  templateUrl: './lista-de-pessoas.component.html',
  styleUrls: ['./lista-de-pessoas.component.scss']
})
export class ListaDePessoasComponent implements OnInit {

  @Output() pessoaParaEditar = new EventEmitter<Pessoa>();

  constructor(private databaseService: DatabaseService) {}

  pessoas: Pessoa[] = [];
  selectedPessoa: Pessoa;

  getAllPeople() : void {
    this.databaseService.getAllPeople().subscribe(res => {
      this.pessoas = res;
      this.pessoas = this.pessoas.filter(p => p.nome)
    });
  }

  getPessoa(person){
    this.selectedPessoa = person;
  }

  clearPessoa() {
    this.selectedPessoa = null;
  }

  editarPessoa(pessoa){
    this.pessoaParaEditar.emit(pessoa);
  }

  ngOnInit(): void {
    this.getAllPeople();
  }

}
