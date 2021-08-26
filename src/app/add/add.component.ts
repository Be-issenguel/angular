import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private estudanteService: EstudanteService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.maxLength(20)]],
    })
  }

  salvar() {
    this.estudanteService.create(this.addForm.value).subscribe((estudantes) => {
      console.log(estudantes);
    })
  }

}
