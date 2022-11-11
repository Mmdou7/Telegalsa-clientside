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

  sessionTitle:string|undefined=undefined
  sessionTitle2:string|undefined = undefined

  session:any;

   getIncomingSchedule(){
   this.session = this.httpser.getScheduleById(localStorage.getItem('id')).subscribe(data=>{
      // let templeteOne:string = Object.values(data)[0].sessionTitle;
      // let templeteTwo:string = Object.values(data)[1].sessionTitle;
      // this.sessionTitle=templeteOne;
      // this.sessionTitle2=templeteTwo;
        // console.log(data)
        this.session= data;
      })
   }
  ngOnInit(): void {
    this.getIncomingSchedule()
  }

}
