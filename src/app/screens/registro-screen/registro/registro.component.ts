import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProviderService } from '../../../providers/user/user-provider.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.less']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  mensaje: string = "";
  isDivVisible = false;
    constructor(
        private formBuilder: FormBuilder,
        private userproviderservice : UserProviderService
        
    ){  
   }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          
          nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
          apellido: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],            
          email: ['', [Validators.required, Validators.email]],
          celular: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required],
          
      }, {
          validator: this.MustMatch('password', 'confirmPassword')
      });
  }

  get email() { return this.registerForm.get('email'); }
  get nombre() { return this.registerForm.get('nombre'); }
  get apellido() { return this.registerForm.get('apellido'); }  
  get celular() { return this.registerForm.get('celular'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

    
     async onSubmit() {
        let usuario: Partial<User> = {
            nombre: this.registerForm.get('nombre').value,
            apellido: this.registerForm.get('apellido').value,
            email: this.registerForm.get('email').value,
            celular: this.registerForm.get('celular').value,
            password: this.registerForm.get('password').value
        }
        try {
            await this.userproviderservice.registrousuario(usuario).toPromise();
            this.mensaje="registro completo";
            this.isDivVisible = true;
        } catch (error) {
        this.mensaje = "registro invalido";
        this.isDivVisible = true;
            console.log(error);
        }
        

  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
  


  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

    
}
