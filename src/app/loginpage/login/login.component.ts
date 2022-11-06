import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'loginPage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPageForm : FormGroup;
   

  constructor(private fb: FormBuilder, public router:Router ) {
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

}
