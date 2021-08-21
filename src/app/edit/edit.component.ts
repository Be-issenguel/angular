import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formEstudante: FormGroup
  estudante: Estudante

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _estudanteService: EstudanteService,
  ) { }

  ngOnInit() {
    this.find(parseInt(this.route.snapshot.paramMap.get('id')));
    this.formEstudante = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  find(id: Number) {
    this._estudanteService.find(id).subscribe(estudante => {
      this.formEstudante.patchValue(estudante);
    })
  }

  editar() {
    console.log(this.formEstudante.value);
  }
}
