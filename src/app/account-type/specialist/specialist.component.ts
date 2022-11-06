import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {

  specialistForm : FormGroup ; 
  constructor(public fb:FormBuilder , public router: Router) { 
    this.specialistForm =  this.fb.group({
      personalData:'',
      birthDate:'',
      mobileNumber:'',
      jobTitle:'',
      jobAddress:'',
    })
  }

  ngOnInit() {
  }
 
  Submit(){
    console.log(this.specialistForm.value)
    this.router.navigateByUrl('signup/accountType/schedule')
  }
  Back(){
    this.router.navigateByUrl('signup/accountType')
  }
}
