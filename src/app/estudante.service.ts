import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudante } from './estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {


  constructor(private _http: HttpClient) { }

  create(estudante: Estudante) {
    return this._http.post<Estudante>('http://laravel-livewire.me/api/add', estudante);
  }

  read() {
    return this._http.get<Estudante[]>('http://laravel-livewire.me/api/estudantes');
  }

  delete(id: Number) {
    return this._http.delete<Estudante>('http://laravel-livewire.me/api/delete/' + id);
  }
}
