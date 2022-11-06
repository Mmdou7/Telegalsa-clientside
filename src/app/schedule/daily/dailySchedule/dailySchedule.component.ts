import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dailySchedule',
  templateUrl: './dailySchedule.component.html',
  styleUrls: ['./dailySchedule.component.css']
})
export class DailyScheduleComponent implements OnInit {
  dailyForm : FormGroup ; 

  constructor(public fb:FormBuilder, public router: Router) { 
    this.dailyForm = this.fb.group ({
      className: '',
      classCode: '',
      startDate: '',
      endDate: '',
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
