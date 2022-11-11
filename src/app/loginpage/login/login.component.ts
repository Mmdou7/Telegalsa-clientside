import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'loginPage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPageForm : FormGroup;


  constructor(private fb: FormBuilder, public router:Router ,public httpServices:HttpService, public userService:UserService) {
    this.loginPageForm = this.fb.group({
      Email    :  '',
      Password :  ''
    })

   }
   Submitlogin(){
    console.log(this.loginPageForm.value)
   }

  ngOnInit(): void {
  }

  goToSignUp(){

this.router.navigateByUrl('/signup')
  }

  routeBool:boolean = false;
  // response: any ;

  loginProcess(){

    this.httpServices.loginUser(this.loginPageForm.value).subscribe(data => {
      localStorage.setItem('token',data.token);
      localStorage.setItem('id',data.user.id);
      localStorage.setItem('username',data.user.userName);
      localStorage.setItem('isSpecialist',data.user.isSpecialist)

      // localStorage.setItem('isSpecialist',data.user.isSpecialist);
      // this.response = data;
      // let jsonObject = JSON.parse(data);
      // let user:User;
      this.router.navigateByUrl('/calendar');

    },err =>{
      alert("Invalid Email or Password")
    } );





  }



}
