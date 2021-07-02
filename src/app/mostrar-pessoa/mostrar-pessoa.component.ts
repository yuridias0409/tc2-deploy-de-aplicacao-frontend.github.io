import { Pessoa } from '../models/Pessoa';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-mostrar-pessoa',
  templateUrl: './mostrar-pessoa.component.html',
  styleUrls: ['./mostrar-pessoa.component.scss']
})
export class MostrarPessoaComponent {
  @Input() pessoa: Pessoa;

  @Input() show: boolean;

  @Output() clearPessoa = new EventEmitter<string>();

  @Output() pessoaParaEditar = new EventEmitter<Pessoa>();

  constructor(private databaseService: DatabaseService) {}

  fecharCard(): void {
    this.show = false;
    this.clearPessoa.emit(null);
  }

  removerPessoa(id){
    this.databaseService.deletarPessoa(id).subscribe(res => {
      if(res.ok == true) {
        alert("Pessoa removida com sucesso!");
        this.fecharCard();
        location.href = location.origin;
      } else {
        alert("Não foi possível remover a pessoa!");
      }
    });
  }

  editarPessoa(pessoa){
    this.pessoaParaEditar.emit(pessoa);
    this.fecharCard();
  }
}
