import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {


  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  checkField(nameField: string): boolean {

    const fieldTouched = this.miFormulario.controls[nameField].touched;
    const fieldHaveErrors = this.miFormulario.controls[nameField].errors;

    const isValidField = fieldTouched && fieldHaveErrors;

    return (isValidField == false || isValidField == null) ? false : true;
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario);
    this.miFormulario.reset();
  }

}
