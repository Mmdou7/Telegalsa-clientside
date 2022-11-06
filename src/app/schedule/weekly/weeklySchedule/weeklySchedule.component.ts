import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weeklySchedule',
  templateUrl: './weeklySchedule.component.html',
  styleUrls: ['./weeklySchedule.component.css']
})
export class WeeklyScheduleComponent implements OnInit {

  weeklyForm : FormGroup;

  constructor(private fb : FormBuilder, public router:Router) { 
    this.weeklyForm = this.fb.group ({
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
