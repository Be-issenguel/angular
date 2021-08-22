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

  read() {
    return this._http.get<Estudante[]>('http://localhost/laravel-livewire/public/api/estudantes');
  }

  update(estudante: Estudante) {
    return this._http.put<Estudante>('http://localhost/laravel-livewire/public/api/update', estudante);
  }

  get(id: Number) {
    return this._http.get<Estudante>('http://localhost/laravel-livewire/public/api/find/' + id);
  }

}
