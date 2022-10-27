import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  })

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.miFormulario.setValue(this.persona);
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false, // set params that [this.person] not contains
    });

    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(console.log);
    // this.miFormulario.valueChanges.subscribe(console.log);

    // this.miFormulario.valueChanges.subscribe(({ condiciones, ...resp }) => {
    this.miFormulario.valueChanges.subscribe(formValue => {
      const formValueWithoutCondiciones = { ...formValue };
      delete formValueWithoutCondiciones.condiciones;
      this.persona = formValueWithoutCondiciones;

    })

  }

  guardar() {
    const fomrValue = { ...this.miFormulario.value };
    delete fomrValue.condiciones;

    this.persona = fomrValue;
  }

}
