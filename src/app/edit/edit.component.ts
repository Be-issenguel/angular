import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup

  constructor(
    private _estudanteService: EstudanteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      sobrenome: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.maxLength(30)]],
    })
    this.fillForm();
  }

  fillForm() {
    this._estudanteService.get(parseInt(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((estudante) => {
      this.editForm.patchValue(estudante);
    })
  }

  salvar() {

  }

}
