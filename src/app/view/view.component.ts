import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  estudantes: Estudante[]

  constructor(private _estudanteService: EstudanteService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this._estudanteService.read().subscribe((estudantes) => {
      this.estudantes = estudantes
    })
  }

  destroy(id) {
    this._estudanteService.delete(id).subscribe(() => {
      this.getAll();
    })
  }

}