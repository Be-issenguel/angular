import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  estudantes: Estudante[];

  constructor(private estudanteService: EstudanteService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.estudanteService.all().subscribe((estudantes) => {
      this.estudantes = estudantes
    })
  }

}
