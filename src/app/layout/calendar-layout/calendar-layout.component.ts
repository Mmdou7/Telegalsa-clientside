import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-calendar-layout',
  templateUrl: './calendar-layout.component.html',
  styleUrls: ['./calendar-layout.component.css']
})
export class CalendarLayoutComponent implements OnInit {

  constructor(public httpser: HttpService) { }
  logo  = "../assets/imgs/Asset 1 1.png "
  myDate = new Date();

  date = this.myDate.toLocaleString('en-US', { hour: 'numeric', hour12: true , minute: "2-digit"})
  
  sessionTitle:string="hamo"
  sessionTitle2:string = "omaya"

   getIncomingSchedule(){
    this.httpser.getScheduleById(localStorage.getItem('id')).subscribe(data=>{
        console.log(data)
    })
   }
  ngOnInit(): void {
    this.getIncomingSchedule()
  }

}
