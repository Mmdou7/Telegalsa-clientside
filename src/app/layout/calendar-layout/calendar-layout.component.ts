import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-layout',
  templateUrl: './calendar-layout.component.html',
  styleUrls: ['./calendar-layout.component.css']
})
export class CalendarLayoutComponent implements OnInit {

  constructor() { }
  logo  = "../assets/imgs/Asset 1 1.png "
  myDate = new Date();

  ngOnInit(): void {
  }

}
