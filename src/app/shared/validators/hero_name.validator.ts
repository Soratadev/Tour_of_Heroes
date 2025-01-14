import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";

const INVALID_NAME = ['fatman', 'mr.cock', 'penniswise', 'squirtman', 'Fartman'];

export const heroNameValidator: AsyncValidatorFn = async (control: AbstractControl): Promise<ValidationErrors | null> => {
	const forbidden = INVALID_NAME.includes(control.value.toLowerCase());
    return forbidden ? {invalidHeroName: {value: control.value}}:null;

};