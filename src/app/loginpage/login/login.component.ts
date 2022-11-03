import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'loginPage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPageForm : FormGroup;
   

  constructor(private fb: FormBuilder ) {
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

}
