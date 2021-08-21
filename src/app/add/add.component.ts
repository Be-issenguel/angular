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

  addForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private _estudanteService: EstudanteService,
    private route: Router
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.maxLength(30)]]
    })
  }

  salvar() {
    this._estudanteService.create(this.addForm.value).subscribe((estudante) => {
      this.route.navigate(['view']);
    })
  }


}
