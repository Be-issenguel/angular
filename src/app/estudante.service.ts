import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudante } from './estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }

  getEstudantes() {
    return this.http.get<Estudante[]>('http://localhost/laravel-livewire/public/api/estudantes');
  }
}
