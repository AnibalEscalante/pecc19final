import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProviderService } from '../../../providers/user/user-provider.service';
import { User }  from '../../../models/user.model';
import { delay } from 'rxjs/operators';



@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less']
})
export class LoginScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje: string = "";
  isDivVisible = false;

  constructor(
    private router: Router,
    private userproviderservice : UserProviderService
  ){ 
    this.checkoutForm = this.createFormGroup();
    
  }

  ngOnInit(): void {
  }

  /* pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$") */

  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    });
  }



  SesionIniciada(){
    this.router.navigate(['./home-basic']);
  }

  user: User;

  onSubmit() {
    try {
      this.userproviderservice.loginUsuario(this.checkoutForm.get('email').value).subscribe(user => { this.user = user });
      
    } catch (error) {
      
    }
    console.log(this.checkoutForm.get('password').value + this.user.password);
    if(this.checkoutForm.get('password').value === this.user.password){
      this.mensaje="sesion iniciada";
      this.isDivVisible = true;
      delay(1000);
      this.SesionIniciada();
    }
    else
      this.mensaje = "credencial incorrecta";
      this.isDivVisible = true;
  }

  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password'); }

}
