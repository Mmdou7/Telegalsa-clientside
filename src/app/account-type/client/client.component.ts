import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientForm : FormGroup ; 
  constructor(public fb:FormBuilder , public router : Router) { 
    this.clientForm =  this.fb.group({
      personalData:'',
      birthDate:'',
      mobileNumber:'',
      classCode: '',
    })
  }

  ngOnInit() {
  }
  Submit() { 
    console.log(this.clientForm.value)
    this.router.navigateByUrl('signup/accountType/schedule')
  }
  Back(){
    this.router.navigateByUrl('signup/accountType')

  }
}
