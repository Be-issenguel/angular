import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudante } from './estudante';
@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get<Estudante[]>('http://localhost/laravel-livewire/public/api/estudantes');
  }

  store(estudante: Estudante) {
    return this._http.post<Estudante>('http://localhost/laravel-livewire/public/api/add', estudante);
  }

  destroy(id: Number) {
    return this._http.delete<Number>('http://localhost/laravel-livewire/public/api/delete/' + id);
  }

  find(id: Number) {
    return this._http.get<Estudante>('http://localhost/laravel-livewire/public/api/find/' + id);
  }
}
