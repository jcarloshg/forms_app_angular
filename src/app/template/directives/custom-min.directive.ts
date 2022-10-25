import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDorective,
        multi: true
    }]
})
export class CustomMinDorective implements Validator {
    @Input() minimo!: number;

    constructor() {
        console.log(`[directiva] -> `, this.minimo);
    }

    // validate(control: AbstractControl<any, any>): ValidationErrors | null {
    //     throw new Error("Method not implemented.");
    // }
    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error("Method not implemented.");
    // }

    validate(control: FormControl) {
        const inputValue = control.value;
        console.log(`[inputValue] -> `, inputValue);
        console.log(`[this.minimo] -> `, this.minimo);
        return (inputValue < this.minimo) ? { 'customMin': true } : null;
    }
}