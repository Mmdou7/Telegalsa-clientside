import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
Randomly(){
this.router.navigateByUrl('signup/accountType/schedule/randomly');
}
Weekly(){
  this.router.navigateByUrl('signup/accountType/schedule/weekly');
}
Daily(){
  this.router.navigateByUrl('signup/accountType/schedule/daily');
}
}
