import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formEstudante: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formEstudante = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  salvar() {
    console.log(this.formEstudante.value);
  }

}
