import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import {
  nombreApePattern,
  noPuedeSerStrider,
  emailPattern,
} from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  miForm: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [Validators.required, Validators.pattern(this.vs.nombreApePattern)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        [this.emailValidator],
      ],
      usuario: ['', [Validators.required, this.vs.noPuedeSerStrider]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirm_pass: ['', [Validators.required]],
    },
    {
      validators: [this.vs.camposIguales('pass', 'confirm_pass')],
    }
  );

  get emailErrorMsg():string{
    const errors = this.miForm.get('email')?.errors;
    if(errors?.['required']){
      return 'Email es obligatorio';
    }else if(errors?.['pattern']){
      return 'El valor ingresado no tiene formato de correo';
    }else if(errors?.['emailTomado']){
      return 'El email ya fue tomado';
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miForm.reset({
      nombre: 'Rafa Her',
      email: 'test1@test.com',
      usuario: 'rafa.ha',
      pass: '123456',
      confirm_pass: '123456',
    });
  }

  campoNoValido(campo: string) {
    return this.miForm.get(campo)?.invalid && this.miForm.get(campo)?.touched;
  }



  // emailRequired() {
  //   return (
  //     this.miForm.get('email')?.errors?.['required'] &&
  //     this.miForm.get('email')?.touched
  //   );
  // }
  // emailFormato() {
  //   return (
  //     this.miForm.get('email')?.touched &&
  //     this.miForm.get('email')?.errors?.['pattern']
  //   );
  // }

  // emailTomado(){
  //   return (
  //     this.miForm.get('email')?.touched &&
  //     this.miForm.get('email')?.errors?.['emailTomado']
  //   );
  // }

  submitForm() {
    console.log(this.miForm.value);
    this.miForm.markAllAsTouched();
  }
}
