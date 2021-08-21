import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formEstudante: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private _estudanteService: EstudanteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formEstudante = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  salvar() {
    console.log();
    this._estudanteService.store(this.formEstudante.value).subscribe(e => {
      this.router.navigate(['view']);
    })
  }

}
