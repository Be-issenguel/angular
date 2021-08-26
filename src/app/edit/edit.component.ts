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
    private formBuilder: FormBuilder,
    private estudanteService: EstudanteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      sobrenome: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.maxLength(20)]],
    })
    this.fillForm();
  }

  fillForm() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.estudanteService.find(id).subscribe((estudante) => {
      this.editForm.patchValue(estudante);
    })
  }

}
