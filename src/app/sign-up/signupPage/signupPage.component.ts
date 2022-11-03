import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/loginpage/login/login.component';
import { validateName } from './Validators';



@Component({
  selector: 'app-signupPage',
  templateUrl: './signupPage.component.html',
  styleUrls: ['./signupPage.component.css']
})
export class SignupPageComponent implements OnInit {

  SignUpForm : FormGroup;
   

  constructor(private fb: FormBuilder, public routes: Router ) {
    this.SignUpForm = this.fb.group({
      FisrtName: ['',[Validators.required,Validators.minLength(3),validateName]],
      LastName : ['',[Validators.required,Validators.minLength(3),validateName]],
      Email    : ['',[Validators.required, Validators.email]],
      Password :  '',
      CPassword: ''
    })
   
   }
   Submit(){
    console.log(this.SignUpForm.value)
   }

   redirectLogin(){
    this.routes.navigateByUrl('/login');
   }
   redirectSignUp(){
    this.routes.navigateByUrl('/signup');

   }

  ngOnInit() {
  }

  //###########  Getters For Validation  ###########
  get fisrtName(){
    return this.SignUpForm.get('FisrtName');
  }
  get lastName(){
    return this.SignUpForm.get('LastName');
  }
  get Email(){
    return this.SignUpForm.get('Email');
  }

}
