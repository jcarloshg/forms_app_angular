import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {


  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Blinx, the time swipper'],
      // ['Halo, convat evolution'],
      // ['Call Of Duty'],
    ], Validators.required),
  })

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);


  public get favortiosArry(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  checkField(nameField: string): boolean {

    const fieldTouched = this.miFormulario.controls[nameField].touched;
    const fieldHaveErrors = this.miFormulario.controls[nameField].errors;

    const isValidField = fieldTouched && fieldHaveErrors;

    return (isValidField == false || isValidField == null) ? false : true;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;
    const newFormControl = new FormControl(this.nuevoFavorito.value, Validators.required);
    this.favortiosArry.push(newFormControl);
    // this.favortiosArry.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset('');
    // (this.miFormulario.controls.favoritos) as FormArray;
  }

  borrar(indexFavorito: number) {
    this.favortiosArry.removeAt(indexFavorito);
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log('guardar()');
    // this.miFormulario.reset();
  }

}
