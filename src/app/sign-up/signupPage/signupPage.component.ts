import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { validateName } from './Validators';



@Component({
  selector: 'app-signupPage',
  templateUrl: './signupPage.component.html',
  styleUrls: ['./signupPage.component.css']
})
export class SignupPageComponent implements OnInit {

  SignUpForm : FormGroup;
   

  constructor(private fb: FormBuilder ) {
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
