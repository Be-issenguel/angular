import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudante } from './estudante';


@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private _http: HttpClient) { }

  create(estudante: Estudante) {
    return this._http.post<Estudante>('http://localhost/laravel-livewire/public/api/add', estudante);
  }

}
