import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { validateName } from './Validators';
import { UserService } from './../../services/user.service';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-signupPage',
  templateUrl: './signupPage.component.html',
  styleUrls: ['./signupPage.component.css']
})
export class SignupPageComponent implements OnInit {

  SignUpForm : FormGroup;

  user:User = new User();

  constructor(private fb: FormBuilder , public router:Router ,public userService:UserService ) {

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

  //############################################  Getters For Validation  #################################
  get fisrtName(){
    return this.SignUpForm.get('FisrtName');
  }
  get lastName(){
    return this.SignUpForm.get('LastName');
  }
  get Email(){
    return this.SignUpForm.get('Email');
  }

  //########################################## Functionality ##########################################
  Next(){
    console.log(this.SignUpForm.value)
    this.router.navigateByUrl('/signup/accountType')
  }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }

  getUserData(){
    this.SignUpForm.controls['FisrtName'].value;
    this.user.setFirstName(this.SignUpForm.controls['FisrtName'].value)
    this.user.setLastName(this.SignUpForm.controls['LastName'].value);
    this.user.setEmail(this.SignUpForm.controls['Email'].value);
    this.user.setPassword(this.SignUpForm.controls['Password'].value);
    this.user.setCPassword(this.SignUpForm.controls['CPassword'].value);

    this.router.navigateByUrl('/signup/accountType');


    // console.log(this.user);

  }






}
