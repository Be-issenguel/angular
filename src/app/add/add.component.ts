import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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
      nome: [],
      sobrenome: [],
      email: [],
    })
  }

  store() {
    console.log(this.formEstudante.value);

  }

}
