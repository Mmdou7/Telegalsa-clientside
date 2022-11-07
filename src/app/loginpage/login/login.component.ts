import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'loginPage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPageForm : FormGroup;


  constructor(private fb: FormBuilder, public router:Router ,public httpServices:HttpService) {
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

  routeBool:boolean = false

  loginProcess(){
    this.httpServices.loginUser(this.loginPageForm.value).subscribe(data => {
      localStorage.setItem('token',data.token);
      localStorage.setItem('id',data.user.id);
      this.router.navigateByUrl('/calendar');



    },err =>{
      alert("Invalid Email or Password")
    } );

  }



}
