import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(5),
  // });

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.required, Validators.min(0)]],
    existencias: [null, [Validators.required, Validators.min(1)]],
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // * esto produce error
    // this.miFormulario.setValue({
    // nombre: 'RTX 4080ti',
    // precio: 1600,
    // // existencias: 10,
    // });

    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600,
    });
  }

  campoValido(fieldName: string): boolean {

    const filedTouched = this.miFormulario.controls[fieldName].touched;
    const filedHaveErrors = this.miFormulario.controls[fieldName].errors;

    const fieldIsValid = filedTouched && filedHaveErrors;

    return (fieldIsValid == null || fieldIsValid == false)
      ? false
      : true;

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
