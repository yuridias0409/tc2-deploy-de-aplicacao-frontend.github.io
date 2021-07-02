import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  constructor(private http : HttpClient) { }

  @Output() fire: EventEmitter<any> = new EventEmitter();

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseURL = "https://sc300161x-tc2-deploy-aplicacao.herokuapp.com/api/";
  //baseURL = "http://localhost:8080/api/";

  getAllPeople() : Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.baseURL + "pessoa/");
  }

  addPessoa(person): Observable<any> {
    return this.http.post(this.baseURL + 'pessoa/', person, { observe: "response" });
  }

  deletarPessoa(id) : Observable<any> {
    return this.http.delete(this.baseURL + 'pessoa/' + id, { observe: "response"})
  }

  atualizarPessoa(person) : Observable<any> {
    return this.http.put(this.baseURL + 'pessoa/' + person._id, person, { observe: "response"})
  }
  
}