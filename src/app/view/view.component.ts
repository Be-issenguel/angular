import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  estudantes: Estudante[];

  constructor(
    private estudanteService: EstudanteService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.estudanteService.read().subscribe((estudantes) => {
      this.estudantes = estudantes
    })
  }

  remover(id: Number) {
    this.estudanteService.delete(id).subscribe((estudante) => {
      this.getAll();
    });
  }

}
