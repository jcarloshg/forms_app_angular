import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellifoPattern)]],
    correo: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.validUsername]],
    contrasenia: ['', [Validators.required, Validators.minLength(6)]],
    confiContrasenia: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    Validators: [this.validatorService.contraseniasIguales('contrasenia', 'confiContrasenia')]
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidatorService: EmailValidatorService,
  ) { }

  ngOnInit(): void {
    this.registerForm.reset({
      nombre: 'Jose Carlos',
      correo: 'test1@test.com',
      username: 'jcarloshg',
      contrasenia: '123123123',
      confiContrasenia: '123123123',
    })
  }

  validFild(campo: string) {
    const validFildInvalid = this.registerForm.get(campo)?.invalid;
    const validFildTouched = this.registerForm.get(campo)?.touched;

    return validFildInvalid && validFildTouched;
  }


  get errMessage(): string {
    const errors = this.registerForm.get('correo')?.errors;
    if (errors?.['required']) return 'Correo obligatorio';
    if (errors?.['pattern']) return 'No tiene formato de correo';
    if (errors?.['mailTomado']) return 'El correo ya existe';
    return '';
  }


  emailRequired() {
    return this.registerForm.get('correo')?.errors?.['required'];
  }

  emailFormato() {
    return this.registerForm.get('correo')?.errors?.['pattern'];
  }

  emailExistente() {
    return this.registerForm.get('correo')?.errors?.['mailTomado'];
  }

  submitFormuario() {
    console.log(this.registerForm.value);
    this.registerForm.markAllAsTouched();
  }

}
