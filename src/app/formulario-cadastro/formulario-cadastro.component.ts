import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { DatabaseService } from '../database/database.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Pessoa } from '../models/Pessoa';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss']
})
export class FormularioCadastroComponent implements OnInit {

  @Input() pessoaEditar: Pessoa;

  @Output() clearPessoa = new EventEmitter<string>();

  constructor(private databaseService: DatabaseService) {}

  registroDePessoa : FormGroup = null;
  buttonText : String;

  cond : String = null;

  onSubmit() {
    if (!this.registroDePessoa.invalid){
      if (!this.registroDePessoa.value.foto){
        this.registroDePessoa.value.foto = 'https://pbs.twimg.com/profile_images/1185564118/bart2.JPG';
      }
      //Caso for uma adição
      if(this.pessoaEditar == null){
        this.databaseService.addPessoa(this.registroDePessoa.value).subscribe(res => {
          console.log(res);
          if(res.ok == true) {
            alert("Pessoa cadastrada com sucesso!");
            //Atualizar Página
            location.href = location.href;
          } else {
            alert("Não foi possível cadastrar a pessoa!");
          }
        });
      } else{
        //Salva os novos dados
        this.pessoaEditar.nome = this.registroDePessoa.value.nome;
        this.pessoaEditar.idade = this.registroDePessoa.value.idade;
        this.pessoaEditar.foto = this.registroDePessoa.value.foto;
        //Atualiza
        this.databaseService.atualizarPessoa(this.pessoaEditar).subscribe(res => {
          console.log(res);
          if(res.ok == true) {
            alert("Pessoa editada com sucesso!");
            this.clearPessoa.emit(null);
            this.cond = null;
            //Atualizar Página
            location.href = location.href;
          } else {
            alert("Não foi possível editar a pessoa!");
          }
        });
      }
      this.registroDePessoa.reset();
    } else {
      alert('Nome e Idade são necessários!');
    }

  }

  carregaDados(){
    if(this.registroDePessoa == null || (this.pessoaEditar != null && this.cond == null)){
      if(this.pessoaEditar == null){
        this.registroDePessoa = new FormGroup({
          nome: new FormControl('', Validators.required),
          idade: new FormControl('', Validators.required),
          foto: new FormControl(''),
        });
        this.buttonText = "Cadastrar";
      } else{
        this.cond = "block";
        this.registroDePessoa = new FormGroup({
          nome: new FormControl(this.pessoaEditar.nome, Validators.required),
          idade: new FormControl(this.pessoaEditar.idade, Validators.required),
          foto: new FormControl(this.pessoaEditar.foto),
        });
        this.buttonText = "Editar";
      }
    }

    return this.registroDePessoa;
  }

  ngOnInit(): void {
    
  }
}
