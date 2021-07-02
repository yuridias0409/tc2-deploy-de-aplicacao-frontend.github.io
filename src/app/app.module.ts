import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { ListaDePessoasComponent } from './lista-de-pessoas/lista-de-pessoas.component';
import { MostrarPessoaComponent } from './mostrar-pessoa/mostrar-pessoa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FormularioCadastroComponent, ListaDePessoasComponent, MostrarPessoaComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
