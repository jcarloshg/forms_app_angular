import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellifoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  validUsername(usernameControl: FormControl): ValidationErrors | null {
    const username: string = usernameControl.value?.trim();
    if (username !== 'jcarloshg') {
      return {
        isjcarloshg: true,
      }
    }
    return null;
  }

  contraseniasIguales(pass: string, confiPass: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {

      const _pass = formGroup.get(pass)?.value;
      const _confiPass = formGroup.get(confiPass)?.value;

      if (_pass !== _confiPass) {
        formGroup.get(confiPass)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }

      // tener cuidado, este se hace manual y no automatica como las demas
      formGroup.get(confiPass)?.setErrors(null);
      return null;
    }
  }
}
