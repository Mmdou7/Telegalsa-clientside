import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-randomlySchedule',
  templateUrl: './randomlySchedule.component.html',
  styleUrls: ['./randomlySchedule.component.css']
})
export class RandomlyScheduleComponent implements OnInit {

  randomlyForm : FormGroup;

  constructor( public fb : FormBuilder , public router:Router) { 

    this.randomlyForm = this.fb.group ({
      className: '',
      classCode: '',
      day: '',
      classStart:'',
      classEnd:'',
    })
  }

  ngOnInit() {
  }
Done(){

  }
  Back(){
this.router.navigateByUrl('signup/accountType')
  }
}
